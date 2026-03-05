# Claude Cowork — Personalization & Practical Use Cases

> **AD48K Workshop Companion Repo**
> Everything you need to understand and apply Claude Cowork's personalization features: context files, skills, manifests, one-shot prompting, and real-world agentic workflows.

---

## What This Repo Covers

This repository is the **hands-on companion** to our Claude Cowork presentation. Instead of abstract theory, we walk through a real project — **Flindr**, a freelancer-client matching platform — that was built and managed entirely through Claude Cowork, demonstrating how personalization turns a general-purpose AI into a domain-aware collaborator.

### Core Topics

| Topic                        | What You'll Learn                                                 | Where to Look                                                                    |
| ---------------------------- | ----------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| **Context Files**            | How to structure knowledge so Claude reads the right files first  | [`context-kit/`](context-kit/)                                                   |
| **Global Instructions**      | Persistent rules that shape Claude's behavior across all sessions | [`context-kit/global-instructions.md`](context-kit/global-instructions.md)       |
| **Folder Manifests**         | Per-folder context maps that define canonical vs. archival docs   | [`context-kit/manifest-template.md`](context-kit/manifest-template.md)           |
| **Skills**                   | Custom capabilities you can upload to extend Claude's behavior    | [`context-kit/tiered-context-navigator/`](context-kit/tiered-context-navigator/) |
| **One-Shot Prompting**       | Feeding Claude a full brand identity in a single prompt           | [`oneshot-prompt-explainer.md`](oneshot-prompt-explainer.md)                     |
| **Live Demo (Landing Page)** | Interactive output generated from context + one-shot prompt       | [`index.html`](index.html)                                                       |

---

## 📂 Repo Structure

```
ad48k-cowork/
├── README.md                          ← You are here
├── index.html                         ← Interactive Flindr landing page (presentation demo)
├── oneshot-prompt-explainer.md        ← One-shot brand identity prompt for Flindr
│
├── context-kit/                       ← Context management system
│   ├── README.md                      ← Detailed guide for the Context Kit
│   ├── global-instructions.md         ← Global Instructions template (paste into Cowork settings)
│   ├── manifest-template.md           ← _MANIFEST.md template (drop into any folder)
│   └── tiered-context-navigator/
│       └── SKILL.md                   ← Uploadable Cowork skill definition
│
└── Flindr/                            ← Real-world case study: full project output
    ├── Flindr_Marka_Profili.txt              ← Brand profile & identity
    ├── Flindr_Basin_Bulteni_v2.0.docx        ← Press release
    ├── Flindr_Cold_Email_Sekans.docx         ← Cold email sequence
    ├── Flindr_Waitlist_Emails_v2.0.docx      ← Waitlist email campaign
    ├── Flindr_KVKK_Gizlilik_Politikasi.docx  ← Privacy policy (KVKK)
    ├── Flindr_Landing_Page_v2.html           ← Full landing page
    ├── Flindr_Claude_Ecosystem_Website.html   ← Ecosystem overview site
    ├── Flindr_Claude_Agentic_Ecosystem.pptx  ← Agentic ecosystem presentation
    ├── Flindr_Match_Engine_v2_User_Stories.md ← User stories for Match Engine v2
    ├── Flindr_Match_Engine_v2_Sprint_Plani.xlsx ← Sprint planning
    ├── Flindr_Finansal_Projeksiyon_12Ay.xlsx  ← 12-month financial projection
    ├── Flindr_Match_Engine_Icerik_Takvimi.xlsx ← Content calendar
    └── Flindr_Platform_Karsilastirma.xlsx     ← Competitor analysis
```

---

## 🧭 How to Navigate This Repo

### 1. Start with the Context Kit

The **Context Kit** is the core teaching material. It solves a real problem: when Claude has access to a large folder, it tries to read everything, burns through its context window, and output quality drops.

The kit introduces a **three-tier model**:

| Tier                         | Role                                   | When Claude Reads It           |
| ---------------------------- | -------------------------------------- | ------------------------------ |
| **Tier 1 — Canonical**       | Source-of-truth documents, manifests   | Always, before any work        |
| **Tier 2 — Domain-Relevant** | Working files in domain subfolders     | Only when the task requires it |
| **Tier 3 — Archival**        | Old versions, drafts, superseded files | Only when explicitly asked     |

Three components enforce this model:

- **Global Instructions** → Persistent rules pasted into Cowork settings that apply across all sessions
- **Folder Manifests** (`_MANIFEST.md`) → Per-folder context maps dropped into working directories
- **Tiered Context Navigator Skill** → An uploadable skill that enforces the orientation protocol automatically

👉 **Read the full guide:** [`context-kit/README.md`](context-kit/README.md)

---

### 2. Explore the One-Shot Prompt

[`oneshot-prompt-explainer.md`](oneshot-prompt-explainer.md) demonstrates how to give Claude a **complete brand identity in a single prompt** — brand personality, visual design system, site structure, component language, and behavioral guidelines.

This is the prompt that was used to generate the Flindr landing page. It shows how structured context turns a generic AI response into brand-consistent, production-quality output.

**Key elements of the one-shot prompt:**

- Brand personality & voice (what Flindr _is_ and _isn't_)
- Full color palette with semantic meanings
- Typography & component styling rules
- Page-by-page anatomy with exact section layouts
- Code-level conventions (border-radius, spacing, animation values)

---

### 3. See the Output: Interactive Landing Page

[`index.html`](index.html) is the **live result** — a fully functional, single-file Flindr landing page generated by Claude using the one-shot prompt. Open it in any browser to see:

- Animated gradient mesh background
- Glassmorphism card components
- Floating dashboard mockup with match scores
- Scrolling social proof strip
- Problem → Solution comparison
- Interactive pricing cards
- Full responsive design

This is the artifact we use in the presentation to demonstrate what "context-aware generation" actually produces.

---

### 4. Study the Flindr Case Study

The [`Flindr/`](Flindr/) directory contains a **complete project portfolio** — every deliverable was generated through Claude Cowork with proper context and personalization:

| Category                  | Files                                                      | What It Shows                       |
| ------------------------- | ---------------------------------------------------------- | ----------------------------------- |
| **Brand & Marketing**     | Brand profile, press release, cold emails, waitlist emails | Consistent voice across all content |
| **Legal & Compliance**    | KVKK privacy policy                                        | Domain-specific document generation |
| **Product & Engineering** | User stories, sprint plans, content calendar               | Structured technical output         |
| **Business**              | Financial projections, competitor analysis                 | Data-informed business documents    |
| **Web**                   | Landing pages, ecosystem website, presentation             | Full web application generation     |

This shows that with the right context files, Claude doesn't just answer questions — it operates as a **domain-expert collaborator** across brand, product, engineering, legal, and business functions.

---

## 🎯 Key Takeaways

1. **Context > Prompting** — Structured context files (global instructions, manifests, skills) produce better results than clever prompt engineering alone.

2. **Tier Your Information** — Not all files are equally important. Teaching Claude _what to read first_ and _what to skip_ dramatically improves output quality and consistency.

3. **One-Shot Prompts Work** — A well-structured single prompt containing brand identity, design system, and component rules can generate production-quality output.

4. **Skills Enforce Behavior** — Custom skills ensure Claude follows your protocols _consistently_, not just when you remember to ask.

5. **Real Projects, Not Demos** — The Flindr case study shows this working across an entire product lifecycle, not just a single chat.

---

## 🚀 Quick Start

```bash
# Clone the repo
git clone https://github.com/your-org/ad48k-cowork.git

# Open the interactive demo
open index.html

# Read the Context Kit guide
open context-kit/README.md
```

**To apply the Context Kit to your own work:**

1. **Paste** [`global-instructions.md`](context-kit/global-instructions.md) into Claude Desktop → Settings → Cowork → Global Instructions
2. **Copy** [`manifest-template.md`](context-kit/manifest-template.md) into your working folder as `_MANIFEST.md`
3. **Upload** the `tiered-context-navigator/` folder as a Cowork skill

---

## License

MIT — use it however you like.
