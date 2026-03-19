# Keystro — Facts & Research

## Initial Research

### Market Size
- Global virtual keyboard market: **$1.25B in 2024**, projected $2B by 2032 (CAGR 6.5%) — Allied Market Research, Nov 2024
- AI-driven real estate market: **$2.9B in 2024**, projected $41.5B by 2033 — Dialzara/v7labs, Dec 2025
- Grammarly (keyboard-adjacent AI writing) revenue: **$251.8M in 2024**, 40.7% YoY growth — Electroiq, Jul 2025
- US real estate agents: **~3M active license holders**, ~1.49M NAR Realtors — Homelight, Nov 2025 / RubyHome 2025

### Gen Z / Teen Pain Data
- 70% of 18–34 year olds prefer texting over calling; 23% never answer calls — Uswitch UK survey 2024, cited Mar 2025
- 40% of Gen Z report feeling nervous or overwhelmed most of the time — Electroiq, Aug 2025
- 60%+ of Gen Z medically diagnosed with anxiety — Gallup/Walton Family Foundation 2024, cited in Montclair study Jun 2025
- Gen Z is the dominant texting-native generation — texting is primary social infrastructure

### Existing AI Keyboard Competitors (Consumer)
- **Rizz! (iOS)** — AI keyboard for dating/social replies, launched Jan 2023 on Product Hunt; pricing starts ~$4/mo — OMR Reviews, Apr 2025
- **CharmKey: AI Rizz Keyboard** — App Store, SEARCHADREAM LTD (active in 2024–2025)
- **RizzMode: AI Keyboard for Rizz** — App Store (active 2024–2025)
- **RizzKey: AI Emoji Keyboard** — "AI suggests smooth, charming replies and pick-up lines" — App Store (active)
- **WittyKeys: Rizz & AI Keyboard** — Google Play, "AI keyboard for flirty replies, grammar, translation"
- **Gboard** — Google, free, real-time translation, GIF search, predictive text — MarkTechPost Nov 2024
- **SwiftKey (Microsoft)** — free, adaptive prediction, multilingual — MarkTechPost Nov 2024
- **Grammarly Keyboard** — grammar, tone detection, style — free + premium
- **Fleksy** — fast, customizable, SDK-focused

### AI Keyboard Startups (VC-Backed)
- **Willow** (YC S25) — voice keyboard for iOS, launched Nov 2025, raised **$4.5M** from YC, Box Group, Burst Capital; 50% MoM user growth; enterprise customers: Uber, Heidi Health, Zego — TechCrunch Nov 2025
- **TypeAI** — AI keyboard + writer iOS app, v3.3.7 (Aug 2024), free tier

### Real Estate Communications Tools
- **TextExpander** — $3.33/user/mo (individual), $8.33/user/mo (business) billed annually — Lawyerist Mar 2025
- **Follow Up Boss** — CRM with integrated texting, used by real estate agents — FollowUpBoss.com
- **SimpleTexting** — lead follow-up SMS automation for real estate — ddiy.co Apr 2025
- **Emitrr** — real estate text messaging software, drip campaigns — May 2025
- No AI keyboard product specifically targets real estate agents for on-the-fly professional tone-matching across apps

### Pricing Benchmarks
- Rizz AI keyboard: ~$4/mo
- Grammarly Premium: ~$12/mo
- TextExpander Business: $8.33/user/mo
- WittyKeys (Google Play): freemium with in-app purchases

### App Store Signal
- Multiple "Rizz" keyboard apps active on App Store (CharmKey, RizzMode, RizzKey, WittyKeys) — indicates consumer demand but also market fragmentation
- Willow (voice keyboard) growing 50% MoM as of Nov 2025 — validates keyboard-layer AI appetite

---

## Pivot 1 - Facts

### Technical Pivot: Context-from-Typing (No Screen Reading Required)
- Every keystroke goes through the keyboard extension — this is sufficient signal for AI sentence completion
- Example: typing "following up on the showing at 123 Main" → AI completes the sentence with professional RE language
- iOS "Full Access" is required to make network calls (for AI API) — this is the SAME requirement as Gboard
- Apple's warning message: "If you enable Full Access, developers are permitted to access, collect and transmit the data you type" — this is a trust barrier even if the app is legitimate

### iOS Full Access Trust Barrier — Reality Check
- Apple community and Stack Exchange threads show significant user anxiety about this warning
- The warning language ("collect and transmit the data you type") implies password capture — even though passwords are protected by Apple's sandboxing
- Gboard has full access but survives because Google has brand trust. A startup keyboard does NOT have that trust
- For professional RE agents (not consumers), this trust barrier is lower — they're used to granting tool permissions
- For teens/consumers, this is effectively a dealbreaker at scale

### TextExpander AI — Significant New Competitive Threat (2025)
- TextExpander launched "TextExpander AI" in 2025 with AI-powered features
- Key feature: "Suggest the right Snippet based on context around your cursor"
- Key feature: "Create new Snippets on the fly when one doesn't already exist"
- TextExpander already has real estate agent users, enterprise sales motion, established brand trust
- **Critical difference**: TextExpander AI is primarily desktop-focused; mobile keyboard is secondary/weak
- Mobile texting (iMessage, WhatsApp) is where RE agents communicate with leads — TextExpander doesn't dominate here

### Willow — Clarification
- Willow is voice-first (dictate → AI formats the text to match app context and tone)
- Not a text-based AI keyboard; requires voice input
- Enterprise customers: Uber, Heidi Health, Zego
- Different modality entirely — they solve "too slow to type"; Keystro solves "don't know what to say"
- Threat: LOW for text-keyboard AI. Threat: MEDIUM if they add text-generation features.

### Compose AI — Desktop Autocomplete (Adjacent Competitor)
- Compose AI (Chrome extension) does AI sentence autocomplete from typing context
- Desktop-only, browser-only
- Not a mobile keyboard product
- Validates the "context-from-typing" model is technically sound and user-desired

### New RE Texting Tools Found (2025)
- **Smarter Contact** — AI-powered text marketing platform for RE, used by investors/wholesalers
- **Launch Control** — text messaging platform for RE wholesalers
- **Verse.ai** — fully-managed AI SMS platform for RE lead nurturing (24/7 auto-response)
- **Ylopo** — AI lead generation with AI voice + text assistants
- **Key distinction**: all above are CRM/automation tools (bulk SMS, drip campaigns, bot responses) — NOT keyboard-level real-time assistance
- None of them help an agent craft a message in the moment, in any app, with their voice
