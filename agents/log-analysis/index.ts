import Anthropic from '@anthropic-ai/sdk';

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------
const VERCEL_TOKEN = process.env.VERCEL_TOKEN;
const VERCEL_TEAM_ID = process.env.VERCEL_TEAM_ID; // optional, for team projects
const VERCEL_PROJECT_ID = process.env.VERCEL_PROJECT_ID;
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;

if (!VERCEL_TOKEN || !VERCEL_PROJECT_ID) {
  console.error('Missing required env vars: VERCEL_TOKEN, VERCEL_PROJECT_ID');
  console.error('Optional: VERCEL_TEAM_ID, ANTHROPIC_API_KEY (defaults to env)');
  process.exit(1);
}

// ---------------------------------------------------------------------------
// Vercel Analytics API helpers
// ---------------------------------------------------------------------------
async function vercelFetch(path: string, params: Record<string, string> = {}) {
  const url = new URL(`https://vercel.com/api${path}`);
  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
  if (VERCEL_TEAM_ID) url.searchParams.set('teamId', VERCEL_TEAM_ID);

  const res = await fetch(url.toString(), {
    headers: { Authorization: `Bearer ${VERCEL_TOKEN}` },
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Vercel API ${res.status}: ${text}`);
  }
  return res.json();
}

// Tool implementations
async function getPageViews(args: { period: string; limit?: string }) {
  const { period = '30d', limit = '20' } = args;
  return vercelFetch(`/web/insights/stats/path`, {
    projectId: VERCEL_PROJECT_ID!,
    from: periodToFrom(period),
    to: new Date().toISOString(),
    limit,
  });
}

async function getReferrers(args: { period: string; limit?: string }) {
  const { period = '30d', limit = '20' } = args;
  return vercelFetch(`/web/insights/stats/referrer`, {
    projectId: VERCEL_PROJECT_ID!,
    from: periodToFrom(period),
    to: new Date().toISOString(),
    limit,
  });
}

async function getCountries(args: { period: string; limit?: string }) {
  const { period = '30d', limit = '20' } = args;
  return vercelFetch(`/web/insights/stats/country`, {
    projectId: VERCEL_PROJECT_ID!,
    from: periodToFrom(period),
    to: new Date().toISOString(),
    limit,
  });
}

async function getDevices(args: { period: string }) {
  const { period = '30d' } = args;
  return vercelFetch(`/web/insights/stats/device`, {
    projectId: VERCEL_PROJECT_ID!,
    from: periodToFrom(period),
    to: new Date().toISOString(),
  });
}

async function getBrowsers(args: { period: string; limit?: string }) {
  const { period = '30d', limit = '10' } = args;
  return vercelFetch(`/web/insights/stats/browser`, {
    projectId: VERCEL_PROJECT_ID!,
    from: periodToFrom(period),
    to: new Date().toISOString(),
    limit,
  });
}

async function getOperatingSystems(args: { period: string; limit?: string }) {
  const { period = '30d', limit = '10' } = args;
  return vercelFetch(`/web/insights/stats/os`, {
    projectId: VERCEL_PROJECT_ID!,
    from: periodToFrom(period),
    to: new Date().toISOString(),
    limit,
  });
}

async function getTimeseries(args: { period: string; granularity?: string }) {
  const { period = '30d', granularity = 'day' } = args;
  return vercelFetch(`/web/insights/stats/path`, {
    projectId: VERCEL_PROJECT_ID!,
    from: periodToFrom(period),
    to: new Date().toISOString(),
    limit: '1',
    // The timeseries data is returned alongside stats
  });
}

function periodToFrom(period: string): string {
  const now = new Date();
  const match = period.match(/^(\d+)([dhw])$/);
  if (!match) return new Date(now.getTime() - 30 * 86400000).toISOString();
  const [, num, unit] = match;
  const ms = { d: 86400000, h: 3600000, w: 604800000 }[unit] ?? 86400000;
  return new Date(now.getTime() - parseInt(num) * ms).toISOString();
}

// ---------------------------------------------------------------------------
// Tool definitions for Claude
// ---------------------------------------------------------------------------
const tools: Anthropic.Messages.Tool[] = [
  {
    name: 'get_page_views',
    description: 'Get page view stats broken down by URL path. Shows which pages get the most traffic, helping identify the funnel flow and drop-off points. Use this to understand which pages visitors land on and where they go.',
    input_schema: {
      type: 'object' as const,
      properties: {
        period: { type: 'string', description: 'Time period like "7d", "30d", "90d"', default: '30d' },
        limit: { type: 'string', description: 'Max results to return', default: '20' },
      },
      required: [],
    },
  },
  {
    name: 'get_referrers',
    description: 'Get traffic sources/referrers. Shows where visitors are coming from (Google, social media, direct, etc.). Use this to understand which channels drive the most and best-converting traffic.',
    input_schema: {
      type: 'object' as const,
      properties: {
        period: { type: 'string', description: 'Time period like "7d", "30d", "90d"', default: '30d' },
        limit: { type: 'string', description: 'Max results to return', default: '20' },
      },
      required: [],
    },
  },
  {
    name: 'get_countries',
    description: 'Get visitor breakdown by country. Useful for understanding geographic distribution of traffic.',
    input_schema: {
      type: 'object' as const,
      properties: {
        period: { type: 'string', description: 'Time period like "7d", "30d", "90d"', default: '30d' },
        limit: { type: 'string', description: 'Max results to return', default: '20' },
      },
      required: [],
    },
  },
  {
    name: 'get_devices',
    description: 'Get visitor breakdown by device type (desktop, mobile, tablet). Important for understanding if the site experience on any device type is underperforming.',
    input_schema: {
      type: 'object' as const,
      properties: {
        period: { type: 'string', description: 'Time period like "7d", "30d", "90d"', default: '30d' },
      },
      required: [],
    },
  },
  {
    name: 'get_browsers',
    description: 'Get visitor breakdown by browser. Useful for identifying compatibility issues.',
    input_schema: {
      type: 'object' as const,
      properties: {
        period: { type: 'string', description: 'Time period like "7d", "30d", "90d"', default: '30d' },
        limit: { type: 'string', description: 'Max results to return', default: '10' },
      },
      required: [],
    },
  },
  {
    name: 'get_operating_systems',
    description: 'Get visitor breakdown by operating system.',
    input_schema: {
      type: 'object' as const,
      properties: {
        period: { type: 'string', description: 'Time period like "7d", "30d", "90d"', default: '30d' },
        limit: { type: 'string', description: 'Max results to return', default: '10' },
      },
      required: [],
    },
  },
];

// Tool dispatch
type ToolArgs = Record<string, string>;

async function executeTool(name: string, args: ToolArgs): Promise<string> {
  try {
    let result;
    switch (name) {
      case 'get_page_views': result = await getPageViews(args); break;
      case 'get_referrers': result = await getReferrers(args); break;
      case 'get_countries': result = await getCountries(args); break;
      case 'get_devices': result = await getDevices(args); break;
      case 'get_browsers': result = await getBrowsers(args); break;
      case 'get_operating_systems': result = await getOperatingSystems(args); break;
      default: return JSON.stringify({ error: `Unknown tool: ${name}` });
    }
    return JSON.stringify(result, null, 2);
  } catch (err) {
    return JSON.stringify({ error: err instanceof Error ? err.message : String(err) });
  }
}

// ---------------------------------------------------------------------------
// Agent system prompt
// ---------------------------------------------------------------------------
const SYSTEM_PROMPT = `You are the Log Analysis Agent for Volley's marketing website (getvolley.com).

## Your Role
You analyze website traffic data to build a picture of the conversion funnel and produce actionable insights for the marketing team.

## Website Context
- Volley provides objective player rating and assessment systems for racquet sports (pickleball, padel, platform tennis, tennis)
- Target audience: club operators and individual players
- Primary conversion event: visitor completes the "Let's Talk" contact form at /contact-us
- Key pages in the expected funnel:
  - / (homepage) → entry point
  - /assessments → core product page
  - /for-clubs → club-focused value prop
  - /for-players → player-focused value prop
  - /pickleball, /padel → sport-specific pages
  - /pricing → pricing details
  - /contact-us → conversion page ("Let's Talk" form)

## Your Task
1. Use the available tools to pull analytics data for the requested time period
2. Build a funnel model: map how traffic flows from entry → product pages → conversion
3. Calculate key metrics: page view volumes, relative traffic share, estimated drop-off between stages
4. Identify the highest-friction points (where are we losing the most potential conversions?)
5. Flag any anomalies (sudden drops, unusual referrer spikes, etc.)
6. Produce 3-5 specific, actionable recommendations to improve Contact Us conversion

## Output Format
Structure your report as:

### Traffic Summary
Overall volume, trend direction, top entry pages

### Funnel Analysis
Stage-by-stage breakdown with volumes and drop-off rates

### Traffic Sources
Which channels drive traffic, and which appear most valuable

### Audience Profile
Device, geography, browser breakdown — flag anything notable

### Friction Points
Where the funnel leaks the most, with data backing each point

### Recommendations
3-5 specific, prioritized actions. Each should include:
- What to change
- Why (grounded in the data)
- Expected impact (high/medium/low)

Be direct and specific. The marketing team wants actions, not generalities.`;

// ---------------------------------------------------------------------------
// Main agent loop
// ---------------------------------------------------------------------------
async function run() {
  const client = new Anthropic({ apiKey: ANTHROPIC_API_KEY });
  const period = process.argv[2] || '30d';

  console.log(`\n🔍 Volley Log Analysis Agent`);
  console.log(`   Period: ${period}`);
  console.log(`   Project: ${VERCEL_PROJECT_ID}`);
  console.log(`   Running...\n`);

  const messages: Anthropic.Messages.MessageParam[] = [
    {
      role: 'user',
      content: `Analyze the website traffic for the last ${period}. Pull all available data sources, build the funnel model, identify friction points, and give me your recommendations. Be thorough — check page views, referrers, devices, and geography.`,
    },
  ];

  // Agentic loop: let Claude call tools until it's done
  let continueLoop = true;
  while (continueLoop) {
    const response = await client.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 4096,
      system: SYSTEM_PROMPT,
      tools,
      messages,
    });

    // Process response content
    const assistantContent = response.content;
    messages.push({ role: 'assistant', content: assistantContent });

    if (response.stop_reason === 'tool_use') {
      // Execute all tool calls
      const toolResults: Anthropic.Messages.ToolResultBlockParam[] = [];

      for (const block of assistantContent) {
        if (block.type === 'tool_use') {
          console.log(`   📊 Fetching: ${block.name}...`);
          const result = await executeTool(block.name, block.input as ToolArgs);
          toolResults.push({
            type: 'tool_result',
            tool_use_id: block.id,
            content: result,
          });
        }
      }

      messages.push({ role: 'user', content: toolResults });
    } else {
      // Agent is done — print final output
      continueLoop = false;
      console.log('\n' + '='.repeat(80));
      console.log('VOLLEY WEBSITE ANALYTICS REPORT');
      console.log('='.repeat(80) + '\n');

      for (const block of assistantContent) {
        if (block.type === 'text') {
          console.log(block.text);
        }
      }

      console.log('\n' + '='.repeat(80));
      console.log(`Report generated: ${new Date().toISOString()}`);
      console.log('='.repeat(80) + '\n');
    }
  }
}

run().catch(err => {
  console.error('Agent error:', err);
  process.exit(1);
});
