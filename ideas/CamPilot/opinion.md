# CamPilot — Opinion & Analysis

## The Core Insight

Small commercial property managers (5-30 NNN leases) are stuck in spreadsheet hell every January through March. CAM reconciliation — calculating each tenant's share of operating expenses under triple-net leases — is the most painful annual ritual in commercial PM. It's:

1. **Complex by nature**: Every lease is different. CAM caps, gross-up provisions, exclusions (management fees, capital expenditures), base year stops — all negotiated differently by different lawyers.
2. **Error-prone**: Managers report losing 5-15% of recoverable expenses to calculation errors. On a $500K/yr expense pool, that's $25-75K left on the table per year.
3. **Impossible to automate cheaply**: Unlike residential rent collection (simple, standardized), CAM requires reading and understanding lease-specific language — exactly what AI reasoning does well.

## Why AI Is Genuinely Required (Not Forced)

This isn't a "put AI on it" situation. The problem is fundamentally language-parsing + math:

- A clause says "Tenant's Pro Rata Share excludes capital expenditures unless amortized over useful life not to exceed 15 years with a 5% carrying cost"
- Another says "NNN expenses exclude management fees exceeding 3% of gross revenues"
- Another has a 10% year-over-year CAM cap with a gross-up to 95% occupancy

A spreadsheet can't parse these from PDFs. A human takes hours per lease. An LLM can extract the structured logic and apply it to expense data in seconds.

**The AI advantage**: Extract lease terms from PDFs → apply per-tenant rules → produce auditable reconciliation reports with footnotes explaining each calculation. This is genuinely AI-native work.

## Why This Market Is Underserved

The tools that exist:
- **Prophia, Credia**: Built for institutional operators (50+ assets, $2M+ ARR deals). Not accessible to small operators.
- **Yardi/MRI**: Implementation takes months, costs $50-100K+/year. A 15-property portfolio can't justify this.
- **AppFolio/Buildium**: Designed for residential PM. Their "commercial" features are grafted on and don't handle NNN complexity.
- **PigJet**: Appears newly founded, minimal traction, unknown if CAM AI-native.

## Product Vision: CamPilot

**What it does:**
1. Upload lease PDFs → AI extracts key CAM terms (inclusions, exclusions, caps, gross-up, base year)
2. Connect accounting software (QuickBooks, Xero) OR upload expense data manually
3. AI applies per-tenant lease rules to actual expenses, calculates pro-rata shares
4. Generates tenant-facing reconciliation statements with line-item backup
5. Flags anomalies, over-cap situations, and missed recovery opportunities

**Why operators will pay:**
- 400 hours/year of manual work reduced to hours
- 5-15% more recoverable expenses captured = pays for itself on first reconciliation
- Audit trail reduces tenant disputes (AI-generated footnotes explain every calculation)
- Works for operators too small for Yardi, too complex for AppFolio

## Pricing Logic
- $299/month for up to 20 leases
- $499/month for up to 50 leases
- Enterprise custom above
- Path to $500K ARR: 140 customers at $299/mo (very achievable in underserved market)

## Risks

1. **Sales cycle**: Commercial PM operators are slow to adopt new software. Need strong ROI case (already there: 5-15% expense recovery improvement) and word-of-mouth from trusted sources.
2. **AI accuracy**: CAM miscalculation is legally risky. Need human review layer + audit trail. Must position as "AI-assisted, accountant-reviewed" not "fully automated."
3. **PigJet competition**: They're in the market but appear to be PM software broadly (rent collection, maintenance) with CAM as one feature — not AI-native CAM specialist. Differentiation is depth of AI reasoning on complex lease clauses.
4. **Data sensitivity**: Lease data and financial data are sensitive. Security/SOC2 required for enterprise deals.

## Score Confidence: 8-9/10

The pain is proven, specific, and acute. The AI advantage is genuine (not automatable any other way at reasonable cost). The market is large enough ($26B CRE software market with 180K small operators). The competitive moat is technical (lease clause reasoning at scale). Path to $500K ARR is credible.
