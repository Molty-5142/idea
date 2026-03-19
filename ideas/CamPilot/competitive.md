# CamPilot — Competitive Analysis

## The Landscape

### Enterprise CRE Platforms (Out of Reach for Small Operators)
| Company | Focus | CAM | Price | Gap |
|---------|-------|-----|-------|-----|
| **Yardi Voyager** | 500+ unit institutional | Yes, full-featured | $100K+/yr | 100x too expensive |
| **MRI Software** | 100+ units | Yes, full-featured | $50K+/yr | 50x too expensive |
| **RealPage** | Enterprise | Yes | $50K+/yr | Enterprise minimums |
| **Prophia** | 50+ CRE assets | AI lease abstraction + CAM | Enterprise | Not priced for <50 properties |
| **Credia AI** | Large institutional | AI-powered | Enterprise | Too large |

### Mid-Market Platforms (Residential-First, CRE as Afterthought)
| Company | Focus | CAM | Price | Gap |
|---------|-------|-----|-------|-----|
| **AppFolio** | Residential + light CRE | Manual only | $1.50/unit/mo + fees | No NNN-native support |
| **Buildium** | Residential | No | $55-375/mo | Not designed for NNN |
| **DoorLoop** | Residential | Basic | $69-199/mo | No CAM complexity |
| **Rent Manager** | Residential/light CRE | Partial | Custom | Not AI-native |
| **Re-Leased** | CRE-focused but basic | Partial | ~$400+/mo | No AI reasoning on clauses |

### Emerging Players
| Company | Focus | CAM | Price | Gap |
|---------|-------|-----|-------|-----|
| **PigJet** | Small CRE PM broadly | Partial | Unknown | Very new, unknown traction, not AI-native on CAM clauses |
| **Leasey.AI** | Residential leasing workflow | No | N/A | Different market |

## Key Insight: The Gap is Specific

The gap isn't "no commercial PM software" — it's specifically:
1. AI-native CAM clause extraction from lease PDFs (not manual entry)
2. Per-tenant rule engine that applies complex lease-specific caps/exclusions/gross-ups
3. Priced for operators with 5-50 NNN leases ($200-600/month range)
4. No multi-month implementation or enterprise sales cycle

## CamPilot's Differentiation

**vs. Yardi/MRI**: 10x cheaper, no implementation, works in days not months
**vs. AppFolio/Buildium**: Actually reads lease PDFs and applies NNN-specific logic
**vs. Prophia**: Built for small operators, not just enterprise; accessible pricing
**vs. PigJet**: AI-first CAM reasoning, not just a database with basic math
**vs. spreadsheets**: Automated, auditable, catches missed recoveries

## Competitive Moat
1. **AI depth on lease clause reasoning**: The more leases processed, the better the model gets at understanding non-standard CAM language
2. **Switching cost**: Once all leases are uploaded and 3 years of reconciliation history exists, operators won't leave
3. **QuickBooks integration**: Biggest small business accounting tool; if CamPilot integrates natively, it becomes the path of least resistance

## Why No One Has Done This Yet
1. **Small market for large software companies**: $300/mo/customer isn't interesting to Yardi
2. **Technical complexity**: You need LLM reasoning to parse diverse lease language — this wasn't possible cheaply until GPT-4 class models (2023+)
3. **Domain expertise barrier**: Must understand CAM caps, gross-up provisions, base year stops — requires real CRE knowledge to build correctly
