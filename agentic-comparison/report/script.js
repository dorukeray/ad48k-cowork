document.addEventListener('DOMContentLoaded', () => {
    
    // Smooth scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetEl = document.querySelector(targetId);
            if(targetEl) {
                targetEl.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

    // Tab Switching Logic for Interactive Deep Dive
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active classes
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            // Add active class
            btn.classList.add('active');
            const targetId = btn.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
        });
    });

    // ScrollSpy Logic for Table of Contents Sidebar
    const sections = document.querySelectorAll('.report-content > article, .report-content > section');
    const navLinks = document.querySelectorAll('.toc-link');

    const spyOptions = {
        root: null,
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0
    };

    const scrollSpyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                // Remove active from all
                navLinks.forEach(link => link.classList.remove('active-toc'));
                // Add to visible section
                const activeLink = document.querySelector(`.toc-link[href="#${id}"]`);
                if(activeLink) {
                    activeLink.classList.add('active-toc');
                }
            }
        });
    }, spyOptions);

    sections.forEach(sec => scrollSpyObserver.observe(sec));
});

// Scenario Wizard Interactive Data
const scenarios = {
    sc1: {
        title: "Claude Cowork",
        desc: "Opt for Cowork here. Its primary strength lies in securely digesting vast multi-document repositories, summarizing intricate schedules, and outputting to native document formats (like spreadsheets). This is the digital manager capable of autonomous progress while inherently enforcing human steerability.",
        color: "#f97316",
        badge: "<i class='ti ti-briefcase'></i> Governed Docs Paradigm",
        steps: [
            "Upload 500-page legacy legal repositories.",
            "Delegate Cowork to extract comparative clauses.",
            "Review generated compliance spreadsheet synchronously."
        ],
        security: "Low Risk. All file extractions remain scoped to the immediate ephemeral workspace without lateral API access.",
        secColor: "safe"
    },
    sc2: {
        title: "Claude Code",
        desc: "Deploy Claude Code synchronously inside your terminal. Through Subagent parallelization, it rapidly analyzes module dependencies and creates its own test plans. Combined with Prefix Caching (92% token reuse), it minimizes latencies making it the perfect active, supervised development tool.",
        color: "#8b5cf6",
        badge: "<i class='ti ti-terminal-2'></i> Synchronous Terminal",
        steps: [
            "Navigate to project root in CLI and spawn Claude Code.",
            "Prompt agent to scaffold a React frontend mapped to backend APIs.",
            "Agent recursively writes components and runs local `npm test`."
        ],
        security: "Medium Risk. Has local filesystem read/write access. Ensure execution is restricted to the specific project directory.",
        secColor: "warn"
    },
    sc3: {
        title: "OpenAI Codex",
        desc: "OpenAI Codex is the absolute choice. Set the task to the GPT-5.3-Codex engine within a deeply secure cloud sandbox. Thanks to Native Compaction over a 192K token context limit, it will churn through your legacy code unmonitored for up to 24 hours until a pristine PR is generated.",
        color: "#10b981",
        badge: "<i class='ti ti-cloud-cog'></i> Async Cloud Pipeline",
        steps: [
            "Assign massive Django to FastAPI migration via Jira / GitHub Issue.",
            "Codex clones repo into isolated Cloud Sandbox.",
            "24 hours later, Codex submits verified PR with passing CI/CD tests."
        ],
        security: "Low Risk. Operates entirely in a segregated cloud VM, structurally incapable of harming your local machine.",
        secColor: "safe"
    },
    sc4: {
        title: "OpenClaw (or NemoClaw)",
        desc: "The scenario requires proactive 24/7 background execution native to the local machine runtime—precisely what the OpenClaw OS is built for. Using its 'Heartbeat' system and direct Channel Adapters, it scrapes endpoints unprompted and reports state via WhatsApp.",
        color: "#ef4444",
        badge: "<i class='ti ti-cpu'></i> Sovereign Operator",
        steps: [
            "Configure Agent Daemon with credentials via `SOUL.md`.",
            "Set Cron heartbeat to trigger every 4 hours.",
            "Agent silently scrapes server logs and sends anomalies to your Telegram."
        ],
        security: "Severe Risk. Agent acts upon raw network traffic with API keys. Strict Nvidia NemoClaw containerization is mandatory.",
        secColor: "danger"
    },
    sc5: {
        title: "Claude Cowork",
        desc: "When aligning massive, multi-departmental PMOs, you need a shared space. Cowork allows non-technical stakeholders to collaborate with the agent, generating comprehensive alignment decks by securely pulling from internal Enterprise databases.",
        color: "#f97316",
        badge: "<i class='ti ti-calendar-stats'></i> Enterprise Knowledge",
        steps: [
            "Integrate Cowork with internal SharePoint / Confluence APIs.",
            "Command agent to compile weekly departmental KPIs.",
            "Agent generates and formats a cohesive alignment presentation."
        ],
        security: "Low Risk. Governed directly by Enterprise SSO and RBAC permissions.",
        secColor: "safe"
    },
    sc6: {
        title: "OpenClaw OS",
        desc: "For local, non-corporate hardware orchestration, absolute sovereignty is required. OpenClaw runs natively as a local daemon, hooking directly into your Home Assistant or local network scripts independently of cloud constraints.",
        color: "#ef4444",
        badge: "<i class='ti ti-home-bolt'></i> Sovereign Hardware",
        steps: [
            "Deploy OpenClaw to a local Raspberry Pi/NUC.",
            "Grant agent terminal access to local Python automation scripts.",
            "Agent controls smart home states reacting to customized external webhooks."
        ],
        security: "High Risk. Grants an autonomous LLM physical control over local network devices.",
        secColor: "danger"
    }
};

function matchScenario(type) {
    const pane = document.getElementById('result-pane');
    const title = document.getElementById('res-title');
    const desc = document.getElementById('res-desc');
    const badge = document.getElementById('res-badge');
    const dynamicContent = document.getElementById('res-dynamic-content');
    const stepsList = document.getElementById('res-steps');
    const securityTxt = document.getElementById('res-security');
    const securityBox = document.getElementById('res-security-box');

    const data = scenarios[type];

    // Reset animation
    pane.style.opacity = 0;
    
    // Select active card visually
    document.querySelectorAll('.scase-card').forEach(card => card.classList.remove('active-card'));
    event.currentTarget.classList.add('active-card');
    
    setTimeout(() => {
        pane.style.borderLeftColor = data.color;
        // Dynamically tint the box shadow to match the brand color
        pane.style.boxShadow = `0 15px 40px ${data.color}20, inset 0 0 20px ${data.color}05`;

        title.innerHTML = data.title;
        title.style.color = data.color;
        
        desc.innerHTML = data.desc;
        
        // Show rich content
        dynamicContent.style.display = 'block';

        badge.innerHTML = data.badge;
        badge.style.backgroundColor = `${data.color}15`; 
        badge.style.color = data.color;
        badge.style.border = `1px solid ${data.color}40`;

        // Inject Steps
        stepsList.innerHTML = '';
        data.steps.forEach((step, index) => {
            const li = document.createElement('li');
            li.innerHTML = `<span class="step-num">${index + 1}</span> <span class="step-txt">${step}</span>`;
            stepsList.appendChild(li);
        });

        // Inject Security Warning
        securityTxt.innerHTML = data.security;
        securityBox.className = `security-warning glass-card sec-${data.secColor}`;

        pane.style.opacity = 1;
    }, 150);
}
