# Marketing Division: Website Feedback Loop
**Status:** Draft  
**Scope:** Phases 1, 1B, and 2  
**Last Updated:** March 2026

---

## Overview

This document describes the marketing platform we are building for the Marketing Division: a closed feedback loop around our website that continuously monitors visitor behavior, surfaces conversion insights, and generates actionable recommendations to improve performance.

The system is being built in three phases. Phase 1 establishes the core loop. Phase 1B adds landing page management and lead tracking. Phase 2 retires the contact form in favor of direct on-site ordering, introduces Stripe payment processing, and adds a Person of Interest tracker for business development.

---

## System Goal

Turn raw website traffic into a self-improving conversion engine by connecting three core capabilities:

1. **Observe** — Parse website logs to understand how users move through the site
2. **Report** — Present that data in a live dashboard that the team can monitor
3. **Act** — Use the data to generate specific, reasoned edits to the website that improve conversion

---

## Roadmap Summary

| Phase | Focus | Conversion Mechanism |
|---|---|---|
| **Phase 1** | Core feedback loop: logs → dashboard → recommendations | Contact Us form |
| **Phase 1B** | Landing page management + lead tracking | Contact Us form + landing page leads |
| **Phase 2** | On-site ordering, Stripe integration, BD person tracking | Paperform order form + Stripe |

---

## Phase 1: Core Feedback Loop

### Conversion Goal
The single conversion event in Phase 1 is a visitor completing the **Contact Us** form. All funnel analysis, dashboard metrics, and optimization recommendations are oriented around driving users to this action.

### Architecture

```
┌─────────────────────┐
│   Hosted Website    │  ← Entry point. Serves pages, captures traffic logs.
└────────┬────────────┘
         │ Raw logs (page views, sessions, clicks, drop-offs, Contact Us submissions)
         ▼
┌─────────────────────┐
│  Log Analysis Agent │  ← Parses logs. Builds funnel model. Identifies friction points.
└────────┬────────────┘
         │ Structured funnel data
         ▼
┌─────────────────────┐
│ Website Dashboard   │  ← Live view of user stats, funnel health, and Contact Us conversion rate.
└────────┬────────────┘
         │ Funnel insights + performance trends
         ▼
┌──────────────────────────┐
│ Conversion Optimizer     │  ← Reads dashboard data. Proposes specific website edits
│ Agent                    │    to drive more Contact Us completions.
└──────────────────────────┘
         │ Proposed edits (copy, layout, CTA placement, etc.)
         ▼
┌─────────────────────┐
│   Hosted Website    │  ← Loop closes. Edits are reviewed, approved, and deployed.
└─────────────────────┘
```

### Components

#### 1. Hosted Website
The existing marketing website. Serves as both the entry point for visitors and the source of raw behavioral data.

**Responsibilities:**
- Serve pages to visitors
- Emit structured access logs (page views, referrer, session ID, timestamps, exit events)
- Track Contact Us form submissions as the primary conversion event
- Accept and serve updated content as edits are approved and deployed

**Key requirement:** Logs must be accessible to the Log Analysis Agent, either via direct log export, a logging pipeline (e.g., S3, a log aggregator), or an analytics event stream.

---

#### 2. Log Analysis Agent
An agent that ingests raw website logs on a continuous or scheduled basis and produces a structured picture of the conversion funnel.

**Responsibilities:**
- Parse raw logs into meaningful user journey events
- Map events onto funnel stages leading to Contact Us submission
- Calculate key metrics per stage: volume, drop-off rate, time-on-page, entry/exit sources
- Identify the highest-friction points in the funnel
- Output structured funnel data to the dashboard

**Key outputs:**
- Funnel stage metrics (visits, completions, drop-off %)
- Session-level summaries
- Anomaly flags (e.g., sudden drop in Contact Us submissions)
- Top traffic sources and their conversion rates

---

#### 3. Website Dashboard
A live, human-readable view of the funnel data. Designed for the marketing team to monitor at a glance without needing to pull logs manually.

**Key metrics displayed:**
- Overall Contact Us conversion rate
- Per-stage funnel breakdown
- Bounce rate and exit pages
- Session volume over time (daily, weekly)
- Source/medium breakdown

---

#### 4. Conversion Optimizer Agent
An agent that reads structured dashboard data and produces specific, reasoned recommendations for improving Contact Us conversion rates.

**Responsibilities:**
- Identify the highest-leverage improvement opportunities in the funnel
- Generate proposed edits to the website (copy, headlines, CTAs, page structure, form placement, etc.)
- Provide rationale for each edit grounded in funnel data
- Present edits in a reviewable format for team approval before deployment

**Key outputs:**
- Prioritized list of proposed edits
- Per-edit rationale tied to specific funnel data
- Suggested copy or structural changes, ready for review

### Success Criteria
- The marketing team can view live funnel stats without pulling logs manually
- The team receives at least one actionable, data-backed website edit recommendation per week
- The feedback loop from log → insight → recommendation is fully connected end-to-end
- The system requires no engineering involvement for day-to-day operation

---

## Phase 1B: Landing Pages & Lead Tracking

Phase 1B runs in parallel or immediately after Phase 1. It adds the ability to create, manage, and track dedicated landing pages, and introduces a lightweight lead tracking system for the leads those pages generate.

### Goals
- Enable the marketing team to spin up landing pages quickly without full engineering cycles
- Capture leads from landing pages distinctly from general website traffic
- Track each lead through to Contact Us conversion

### New Components

#### Landing Page Manager
A system for creating and managing dedicated landing pages tied to specific campaigns, traffic sources, or offers.

**Responsibilities:**
- Provide templates or a simple editor for creating landing pages
- Assign unique URLs or UTM parameters per page for source attribution
- Publish and retire pages independently of the main website deploy cycle

---

#### Lead Tracker
Captures and stores lead data from landing page submissions and tracks their progress toward conversion.

**Responsibilities:**
- Record lead source (which landing page, which UTM/campaign)
- Track lead status (submitted → contacted → converted)
- Feed lead data into the dashboard alongside funnel metrics
- Surface which landing pages are generating the most and highest-quality leads

### Dashboard Additions (Phase 1B)
- Landing page performance view (visits, submissions, conversion rate per page)
- Lead pipeline summary (total leads, status breakdown, source attribution)

---

## Phase 2: On-Site Ordering, Stripe Integration & BD Tracking

Phase 2 retires the Contact Us form as the primary conversion mechanism and replaces it with a fully integrated on-site ordering experience. It also introduces tracking tools for business development outreach.

### Conversion Goal Change
The Contact Us form is retired. The new conversion event is a completed **order submission** via the embedded Paperform order form, processed through **Stripe**.

### New Components

#### Paperform Order Form Integration
Embed the existing Paperform order forms directly into the website so visitors can convert without leaving the site.

**Responsibilities:**
- Replace Contact Us CTAs with embedded or linked Paperform order forms
- Capture order submissions as the new primary conversion event in the log pipeline and dashboard
- Pass order data downstream to Stripe for payment processing

---

#### Stripe Payment Integration
Handle payment collection for orders submitted through the Paperform integration.

**Responsibilities:**
- Process payments for completed order form submissions
- Handle success and failure states gracefully
- Emit payment events (completed, failed, refunded) back to the dashboard for conversion tracking

**Key requirement:** PCI compliance must be maintained. No raw card data is stored or logged by our systems — all payment handling is delegated to Stripe.

---

#### Person of Interest (POI) Tracker
A system for business development use cases that allows the team to generate and distribute unique tracked links, and monitor the engagement of specific individuals or organizations.

**Use case:** A BD team member wants to share a specific page or offer with a target account and know whether that person visited, how long they stayed, what they clicked, and whether they converted.

**Responsibilities:**
- Generate unique, attributable links tied to a named person or organization
- Track link visits, pages viewed, time on site, and conversion events
- Surface POI activity in a dedicated BD view within the dashboard
- Support manual notes or status updates per POI (e.g., "sent proposal," "follow-up pending")

**Key outputs:**
- Per-POI engagement timeline
- Conversion status per POI
- BD pipeline summary view

### Dashboard Additions (Phase 2)
- Order funnel replacing Contact Us funnel
- Stripe payment metrics (orders placed, revenue, failed payments)
- Person of Interest activity feed and BD pipeline view

---

## What Is Not In Scope (Future Phases)

| Feature | Notes |
|---|---|
| A/B testing framework | Would layer on top of Phase 1/1B infrastructure |
| Personalization by segment or traffic source | Requires richer data model |
| Automated deployment of edits (no human review) | Gated on trust in Optimizer Agent quality |
| Multi-channel attribution (paid, email, social) | Builds on UTM tracking established in Phase 1B |
| Full CMS integration | Enables faster edit deployment cycles |

---

## Open Questions

- What is the current logging setup on the website? (e.g., raw server logs, GA4, Segment, custom events?)
- Who owns approval and deployment of website edits?
- What is the team's preferred interface for the dashboard? (e.g., internal web app, Notion, Slack digest?)
- How frequently should the Log Analysis Agent run? (Real-time vs. nightly batch)
- For Phase 1B: Does the team have an existing landing page tool, or is this net new?
- For Phase 2: Are the Paperform order forms already live and in use? What Stripe account will be used?
- For Phase 2 POI Tracker: Should POI links be shareable via email, direct link, or both? Who on the BD team manages the POI list?

---

## Next Steps

### Phase 1
1. Audit current website logging and confirm data accessibility
2. Define the funnel stages specific to our website and goals
3. Stand up the Log Analysis Agent on sample log data
4. Build v1 of the dashboard with Contact Us conversion tracking
5. Connect the Conversion Optimizer Agent to dashboard output
6. Run first full loop end-to-end and review output with the team

### Phase 1B
1. Define landing page use cases and required templates
2. Build Landing Page Manager and publishing workflow
3. Implement lead capture and status tracking
4. Add landing page and lead views to the dashboard

### Phase 2
1. Confirm Paperform order forms and Stripe account setup
2. Embed Paperform forms into website and wire up conversion tracking
3. Integrate Stripe payment events into the dashboard
4. Build POI link generation and tracking system
5. Add BD pipeline view to the dashboard
