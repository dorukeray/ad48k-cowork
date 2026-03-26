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
    cowork: {
        title: "Claude Cowork",
        desc: "Opt for Cowork here. Its primary strength lies in securely digesting vast multi-document repositories, summarizing intricate schedules, and outputting to native document formats (like spreadsheets). This is the digital manager capable of autonomous progress while inherently enforcing human steerability.",
        color: "#f97316",
        badge: "Governed Docs Paradigm"
    },
    code: {
        title: "Claude Code",
        desc: "Deploy Claude Code synchronously inside your terminal. Through Subagent parallelization, it rapidly analyzes module dependencies and creates its own test plans. Combined with Prefix Caching (92% token reuse), it minimizes latencies making it the perfect active, supervised development tool.",
        color: "#8b5cf6",
        badge: "Synchronous Terminal"
    },
    codex: {
        title: "OpenAI Codex",
        desc: "OpenAI Codex is the absolute choice. Set the task to the GPT-5.3-Codex engine within a deeply secure cloud sandbox. Thanks to Native Compaction over a 192K token context limit, it will churn through your legacy code unmonitored for up to 24 hours until a pristine PR is generated.",
        color: "#10b981",
        badge: "Async Cloud Pipeline"
    },
    openclaw: {
        title: "OpenClaw (or NemoClaw)",
        desc: "The scenario requires proactive 24/7 background execution native to the local machine runtime—precisely what the OpenClaw OS is built for. Using its 'Heartbeat' system and direct Channel Adapters, it scrapes endpoints unprompted and reports state via WhatsApp. (Use NemoClaw for enterprise security).",
        color: "#ef4444",
        badge: "Sovereign Operator"
    }
};

function matchScenario(type) {
    const pane = document.getElementById('result-pane');
    const title = document.getElementById('res-title');
    const desc = document.getElementById('res-desc');
    const badge = document.getElementById('res-badge');

    const data = scenarios[type];

    // Reset animation
    pane.style.opacity = 0;
    
    setTimeout(() => {
        pane.style.borderLeftColor = data.color;
        title.innerHTML = data.title;
        title.style.color = data.color;
        
        desc.innerHTML = data.desc;
        
        badge.style.display = 'inline-block';
        badge.innerHTML = data.badge;
        badge.style.backgroundColor = `${data.color}20`; // 20% opacity 
        badge.style.color = data.color;
        badge.style.border = `1px solid ${data.color}50`;

        pane.style.opacity = 1;
    }, 150);
}
