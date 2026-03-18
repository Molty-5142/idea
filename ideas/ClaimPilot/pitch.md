# ClaimPilot — Investor / Co-Founder Pitch (v4)

---

## Problem
Roofing and restoration contractors lose 20–30% of insurance claim value because writing thorough Xactimate supplements takes expertise and time they don't have — so they either leave money on the table or pay $150–$400/claim to human supplement writers who take 3–5 days and can't scale during storm season.

## Solution
ClaimPilot is AI that generates Xactimate-format supplement letters for roofing and restoration contractors — replacing a validated $400/claim human service with a $49/claim AI alternative that returns results in under 30 minutes.

---

## The Market Already Pays For This

This is not a "will they pay?" question. Contractors already pay humans to do exactly this.

Active supplement writing services (validated March 2026):
- **riseroofingsupplements.com** — $150–$400/supplement, 3–5 day turnaround
- **supplementexperts.net** — certified Xactimate writers, per-claim pricing
- **readyadjuster.com** — targets contractors who "don't have time to learn Xactimate"
- **estimatewriters.com** — active, B2B contractor focus

These businesses exist, have customers, and charge real money. They just can't scale. We replace them with AI.

---

## Market Size

- ~800,000 roofing contractors in the US (NRCA, 2025)
- Target: ~50,000 mid-size shops filing 20+ insurance claims/year
- Average 50-claim/year shop currently pays ~$7,500/year to supplement writers
- At $199/month ($2,388/year): 67% savings + same-day turnaround
- **SAM**: 50,000 shops × $2,388/year = **$119M**
- **Path to $500K ARR**: 210 paying accounts at $199/month

**Seasonality note:** Storm claims are concentrated April–October. Our model accounts for this: $199/month year-round = $2,388/year, but value delivery is 90% during 7 storm months. Contractors who understand their unit economics ($300/claim saved × 50 claims = $15,000 savings vs. $2,388 cost) will pay year-round for the efficiency gain and to have it ready when storm season hits. We model conservative 8-month active usage.

---

## Why Now

1. **Insurers now use AI to challenge supplements faster** (Sedgwick report: 58–82% of insurers use AI in claims, March 2026). Supplements submitted with incomplete or vague line items get rejected in hours, not days. Contractors need better output, not just faster output.
2. **Verisk launched XactAI in 2025 — for insurers only.** The insurer side of claims just got a major AI upgrade. The contractor side has nothing. This gap won't last forever, but it's open today.
3. **Human supplement services can't scale during disaster surges.** After a major hailstorm, a regional supplement writer's queue backs up 2–3 weeks. AI doesn't have a queue.
4. **LLM document reasoning is production-ready** for the specific, structured task of parsing estimate PDFs and generating line-item supplements.

---

## Competitive Moat

The pitch's honest answer: **we are early and we know it.** Our moat builds over time, not at launch.

**At launch:** Speed + price advantage over human writers. No direct AI competitor exists today.

**Moat that builds with scale:**
- **Outcome data flywheel**: every supplement submitted teaches us which line items get accepted vs. challenged, by insurer, by region, by claim type. After 10,000 supplements, our model knows that State Farm in Georgia rejects drip edge at standard price but accepts it with a specific code cite — and a human writer doesn't. This is data no competitor can buy.
- **Integration play**: AccuLynx, JobNimbus, CompanyCam are contractor workflow platforms used by 100K+ roofing companies. They are distribution channels, not competitors. Integrating with them as a supplement module is the Series A play — not something we fight.

**Risk we acknowledge:** Verisk could add contractor-side features to XactAI. If they do, that validates the market. Our response: deeper outcome data and integration distribution that Verisk won't touch (they can't partner with 50 different contractor CRMs without diluting their insurer relationships).

---

## Legal & Verisk Risk (Honest Assessment)

**Verisk TOS**: We are not scraping or replicating Xactimate's pricing database. Our initial product parses contractor-provided PDFs (documents the contractor already owns) and generates supplement letters. Regional pricing benchmarks are accessible through any licensed contractor's Xactimate account — our domain co-founder's existing license is the access mechanism at launch. We will have a commercial attorney review Verisk's contractor license terms before launch. If Verisk's terms prohibit this use case, we pivot to NCIS (National Cost Index Standard) as the pricing reference — an independent, non-Verisk source.

**Multi-state UPL risk**: We draft documents. We do not negotiate, advise, or represent. ClaimPilot never says "argue code compliance under statute X" — it outputs line items with quantities and Xactimate codes, which is what contractors already do manually. This is the same legal position as any estimating software. We will have a multi-state insurance regulatory attorney review before charging customers in FL, TX, and LA.

---

## What We're Building (Technical)

1. Contractor uploads: insurer's estimate PDF + damage photos
2. We extract line items from the estimate using document parsing
3. We compare extracted line items against regional benchmark pricing (via licensed Xactimate access)
4. We run a "missed item" classifier trained on patterns from supplement writing services (what items do human writers catch that adjusters miss)
5. We generate a formatted supplement letter: line items, quantities, Xactimate codes, photos cited
6. Contractor reviews and submits — 15 minutes

The hard technical problem is step 4: the missed item classifier. This is what requires a domain co-founder. Steps 1–3 and 5–6 are solvable with standard document AI.

---

## Business Model & Unit Economics

| Tier | Price | Margin |
|---|---|---|
| Per-claim | $49/claim | ~95% |
| Standard | $199/month (10 claims) | ~95% |
| Unlimited | $499/month (large firms) | ~92% |

**Full $750K breakdown:**
- Engineering (4-month MVP build, 2 engineers): $200K
- Domain co-founder (6-month salary bridge while equity vests): $120K
- Xactimate contractor license + legal review (Verisk TOS + multi-state UPL): $60K
- Storm-season acquisition test (geo-targeted B2B ads, 3 storm markets): $150K
- Operating reserve (12 months runway post-MVP): $220K

**CAC reality check:** B2B roofing contractor ads are not consumer insurance keywords. We are targeting a known professional audience (contractors, not homeowners) in a defined geography (storm-hit zip codes) with a clear ROI pitch ($300/claim saved). Comparable B2B SaaS CAC in construction software runs $150–400. We model $250 CAC, 12-month payback at $199/month.

---

## What's Not Validated Yet (Honest)

We are a pre-seed company. Here is what we have and what we don't:

**Have:**
- Validated market: supplement writing services exist, charge real money, have customers
- Real technical gap: no AI competitor in contractor supplementing
- Clear domain expertise path: domain co-founder role defined, recruiting active

**Don't have yet (this raise is to get these):**
- 20 validated supplements with insurer acceptance data
- Signed domain co-founder
- Paying customer

**The raise is a validation sprint, not a scale play.** We are asking for $750K to spend 6 months proving the product works — not to build a marketing machine on an unproven foundation.

---

## Why Us

- We have the engineering infrastructure for the hard parts: structured document extraction, multi-format PDF parsing, output normalization
- We are building *only* this — not a general AI with an insurance tab
- Our domain co-founder brings 500+ supplement patterns + existing contractor relationships (the first 10 beta users come from their network, not cold outreach)
- We understand the moat is data, not code — and we're designing for it from day one

---

## The Ask

**$750K pre-seed.** 6-month sprint to: sign domain co-founder, validate 20 supplements with real outcome data, get 10 paying contractors, and enter storm season with a proven product.

If we hit those milestones, we raise a $2M seed to scale the acquisition machine.

> "Every storm season, roofing contractors leave millions in underpaid claims on the table. ClaimPilot picks it up."
