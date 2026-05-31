// ═══════════════════════════════════════════════════
//  ADITYA SOLANKI — PORTFOLIO DATA (All Real Info)
// ═══════════════════════════════════════════════════
const portfolio = {
  name:        "Aditya Solanki",
  role:        "Full Stack Developer",
  location:    "Noida, Uttar Pradesh",
  email:       "aditya.s.solanki9536@gmail.com",
  phone:       "+91-7599525631",
  githubUrl:   "https://github.com/aditya018s",
  linkedinUrl: "https://linkedin.com/in/aditya-solanki-10a831240",
  summary:     "Full Stack Developer building responsive frontends and secure backends using React, Java, Spring Boot, REST APIs & MySQL.",

  stats: [
    { value: "4",        label: "Live Projects" },
    { value: "Full Stack", label: "Focus" },
    { value: "Java · React", label: "Core Stack" }
  ],

  projects: [
    {
      title:    "Banking Management System",
      type:     "Full Stack",
      status:   "Live",
      summary:  "Secure banking app with registration, login, deposits, withdrawals, fund transfers, transaction history, and PDF statement export.",
      impact:   "Production-grade Spring Security with role-based access for users & admins, JWT for REST APIs, and a full loan workflow with EMI tracking.",
      tags:     ["Java", "Spring Boot", "Spring Security", "Thymeleaf", "MySQL", "JWT", "REST API"],
      demo:     "https://bankingsystem-34mb.onrender.com",
      code:     "https://github.com/aditya018s",
      thumb:    "🏦",
      thumbType:"emoji",
      accent:   "var(--blue)"
    },
    {
      title:    "Journal App Backend",
      type:     "Backend",
      status:   "Complete",
      summary:  "Spring Boot backend with layered architecture — Controller, Service, Repository — featuring secured CRUD APIs for journal entries.",
      impact:   "DTO-based request/response, Redis caching to cut repeated DB calls, and clean authentication & authorization throughout.",
      tags:     ["Java", "Spring Boot", "Spring Security", "Redis", "REST API", "JPA"],
      demo:     "#projects",
      code:     "https://github.com/aditya018s",
      thumb:    "📓",
      thumbType:"emoji",
      accent:   "var(--teal)"
    },
    {
      title:    "Smart News App",
      type:     "Frontend",
      status:   "Live",
      summary:  "Real-time news app using React + NewsAPI with category filtering, keyword search, multi-language support, and infinite scrolling.",
      impact:   "Reusable card components, mobile-responsive layouts, fallback images, and paginated API loading for smooth UX.",
      tags:     ["React", "Vite", "JavaScript", "NewsAPI", "React Router", "Responsive"],
      demo:     "https://smartnewsbyadi.netlify.app",
      code:     "https://github.com/aditya018s",
      thumb:    "📰",
      thumbType:"emoji",
      accent:   "var(--coral)"
    },
    {
      title:    "E-Commerce Web App",
      type:     "Frontend",
      status:   "Complete",
      summary:  "Responsive e-commerce frontend with product sections, carousel, notifications, and form validation using React + Redux Toolkit.",
      impact:   "Redux Saga for scalable async state management, React Router for navigation, Bootstrap + custom CSS for all screen sizes.",
      tags:     ["React", "Redux Toolkit", "Redux Saga", "Vite", "Bootstrap", "React Router"],
      demo:     "#projects",
      code:     "https://github.com/aditya018s",
      thumb:    "🛒",
      thumbType:"emoji",
      accent:   "var(--purple)"
    }
  ],

  skillGroups: [
    {
      label: "Backend",
      icon:  "⚙️",
      color: "var(--blue)",
      items: ["Java", "Spring Boot", "Spring Security", "JWT", "REST APIs", "Spring Data JPA"]
    },
    {
      label: "Frontend",
      icon:  "🎨",
      color: "var(--coral)",
      items: ["React", "Redux Toolkit", "Redux Saga", "JavaScript ES6+", "HTML5", "CSS3"]
    },
    {
      label: "Database & Cache",
      icon:  "🗄️",
      color: "var(--teal)",
      items: ["MySQL", "Redis", "JPA", "Hibernate"]
    },
    {
      label: "Tools & Deployment",
      icon:  "🚀",
      color: "var(--purple)",
      items: ["Git", "GitHub", "VS Code", "IntelliJ IDEA", "Maven", "Render", "Netlify", "Railway"]
    },
    {
      label: "Concepts",
      icon:  "🧠",
      color: "var(--gold)",
      items: ["OOP", "MVC Architecture", "Layered Architecture", "Authentication", "Authorization", "API Integration", "System Design"]
    }
  ],

  meters: [
    { name: "Java & Spring Boot", level: 88 },
    { name: "React & Redux",      level: 82 },
    { name: "REST API Design",    level: 85 },
    { name: "MySQL & Redis",      level: 78 },
    { name: "Spring Security/JWT",level: 80 },
    { name: "Problem Solving",    level: 86 }
  ],

  notes: [
    {
      icon:    "🏦",
      title:   "How I built JWT Auth in Spring Boot",
      summary: "Custom filter chain → extract token → validate with secret key → set SecurityContext. Clean separation between web session auth and stateless REST auth."
    },
    {
      icon:    "⚡",
      title:   "Why I added Redis to the Journal App",
      summary: "Repeated DB reads for the same user's journal list were slowing responses. Redis caching cut those calls to near-zero with a simple @Cacheable annotation."
    },
    {
      icon:    "📰",
      title:   "React + NewsAPI: handling rate limits",
      summary: "NewsAPI's free tier limits by domain. I moved API calls behind query params, debounced search inputs, and cached category results in component state."
    },
    {
      icon:    "🛒",
      title:   "Redux Saga vs Thunk — what I chose & why",
      summary: "Saga for complex async flows (multiple dependent API calls, cancel logic). Thunk for simple fetches. E-commerce cart logic needed Saga's generator-based control."
    },
    {
      icon:    "🔐",
      title:   "Role-Based Access in Banking System",
      summary: "Spring Security config maps ADMIN and USER roles to different URL patterns. JWT payload carries role, filter reads it, SecurityContext enforces it. Zero DB hit per request."
    },
    {
      icon:    "🏗️",
      title:   "Layered Architecture: why it matters",
      summary: "Controller handles HTTP, Service handles business logic, Repository handles DB. Each layer tested independently. Changed Redis config without touching controllers once."
    }
  ],

  timeline: [
    {
      date:  "2021",
      title: "Class XII — PCM",
      text:  "Delhi Global School, Mawana. Chose Computer Science stream, started learning programming basics."
    },
    {
      date:  "2022",
      title: "BCA — IIMT University, Meerut",
      text:  "Started Bachelor of Computer Applications. Dived into Core Java, OOP, data structures, and web fundamentals."
    },
    {
      date:  "2023",
      title: "First Full Stack Project",
      text:  "Built the Banking Management System end-to-end — Spring Boot backend, Thymeleaf UI, MySQL, Spring Security, JWT. First production deploy on Render."
    },
    {
      date:  "2024",
      title: "React & Redux Mastery",
      text:  "Built Smart News App (live on Netlify) and E-Commerce App. Added Redux Toolkit + Saga for scalable state management."
    },
    {
      date:  "2025",
      title: "BCA Complete · Open to Work",
      text:  "Graduating 2025. Actively looking for full-stack developer internships and fresher roles. Portfolio live on GitHub Pages."
    }
  ]
};

// ═══════════════════════════════════════════════════
//  ELEMENT REFS
// ═══════════════════════════════════════════════════
const root           = document.documentElement;
const projectGrid    = document.querySelector("#project-grid");
const projectFilters = document.querySelector("#project-filters");
const projectSearch  = document.querySelector("#project-search");
const projectCount   = document.querySelector("#project-count");
const skillSection   = document.querySelector("#skill-groups");
const skillMeters    = document.querySelector("#skill-meters");
const notesGrid      = document.querySelector("#notes-grid");
const timelineEl     = document.querySelector("#timeline");
const scrollProg     = document.querySelector("#scroll-progress");
let activeFilter = "All";

// ═══════════════════════════════════════════════════
//  HELPERS
// ═══════════════════════════════════════════════════
const typeClass = { Backend:"backend", Frontend:"frontend", "Full Stack":"fullstack", Content:"content" };
const tc = t => typeClass[t] || "backend";
function tag(text) {
  const s = document.createElement("span");
  s.className = "tag"; s.textContent = text; return s;
}

// ═══════════════════════════════════════════════════
//  HERO — Populate real name, role, stats
// ═══════════════════════════════════════════════════
function renderHero() {
  const h1 = document.querySelector(".hero h1");
  if (h1) h1.textContent = `${portfolio.name} builds full-stack products — fast, secure, and clean.`;

  const eyebrow = document.querySelector(".eyebrow");
  if (eyebrow) eyebrow.textContent = `${portfolio.role} · ${portfolio.location}`;

  const heroText = document.querySelector(".hero-text");
  if (heroText) heroText.textContent = portfolio.summary;

  const statsEl = document.querySelector(".quick-stats");
  if (statsEl) {
    statsEl.innerHTML = "";
    portfolio.stats.forEach(s => {
      const d = document.createElement("div");
      d.innerHTML = `<strong>${s.value}</strong><span>${s.label}</span>`;
      statsEl.append(d);
    });
  }

  if (projectCount) projectCount.textContent = portfolio.projects.length;
}

// ═══════════════════════════════════════════════════
//  PROJECTS
// ═══════════════════════════════════════════════════
function renderFilters() {
  const types = ["All", ...new Set(portfolio.projects.map(p => p.type))];
  projectFilters.innerHTML = "";
  types.forEach(type => {
    const btn = document.createElement("button");
    btn.type = "button"; btn.textContent = type;
    btn.setAttribute("aria-pressed", String(type === activeFilter));
    btn.onclick = () => { activeFilter = type; renderFilters(); renderProjects(); };
    projectFilters.append(btn);
  });
}

function renderProjects() {
  const q = projectSearch.value.trim().toLowerCase();
  const list = portfolio.projects.filter(p => {
    const s = [p.title, p.type, p.summary, ...p.tags].join(" ").toLowerCase();
    return s.includes(q) && (activeFilter === "All" || p.type === activeFilter);
  });
  projectGrid.innerHTML = "";
  list.forEach((p, i) => {
    const cls = tc(p.type);
    const card = document.createElement("article");
    card.className = "project-card";
    card.style.animationDelay = `${i * 80}ms`;
    const isLive = p.demo && p.demo !== "#projects";
    card.innerHTML = `
      <div class="project-thumb thumb-${cls}">
        <div class="project-thumb-placeholder">${p.thumb}</div>
        ${isLive ? `<span class="live-badge">● Live</span>` : ""}
      </div>
      <div class="project-body">
        <div class="project-top">
          <div>
            <p class="section-kicker">${p.type} · ${p.status}</p>
            <h3>${p.title}</h3>
          </div>
          <span class="project-logo logo-${cls}">${p.title.charAt(0)}</span>
        </div>
        <p>${p.summary}</p>
        <p><strong style="color:var(--ink)">Impact:</strong> ${p.impact}</p>
        <div class="tag-row"></div>
        <div class="project-links">
          <a href="${p.demo}" ${isLive?'target="_blank" rel="noreferrer"':""}>↗ Demo</a>
          <a href="${p.code}" target="_blank" rel="noreferrer">⌥ GitHub</a>
        </div>
      </div>`;
    card.querySelector(".tag-row").append(...p.tags.map(tag));
    projectGrid.append(card);
  });
  setupTiltCards();
}

// ═══════════════════════════════════════════════════
//  SKILLS — grouped cards + meters
// ═══════════════════════════════════════════════════
function renderSkills() {
  // Skill group cards
  if (skillSection) {
    skillSection.innerHTML = "";
    portfolio.skillGroups.forEach((g, i) => {
      const card = document.createElement("div");
      card.className = "skill-group-card motion-reveal";
      card.style.transitionDelay = `${i * 60}ms`;
      card.style.setProperty("--group-color", g.color);
      card.innerHTML = `
        <div class="skill-group-header">
          <span class="skill-group-icon">${g.icon}</span>
          <strong>${g.label}</strong>
        </div>
        <div class="skill-tags"></div>`;
      g.items.forEach(item => card.querySelector(".skill-tags").append(tag(item)));
      skillSection.append(card);
    });
  }

  // Meters
  if (skillMeters) {
    skillMeters.innerHTML = "";
    portfolio.meters.forEach(s => {
      const m = document.createElement("div");
      m.className = "meter";
      m.innerHTML = `<span><b>${s.name}</b><b>${s.level}%</b></span>
        <div class="meter-track"><i style="--level:${s.level}%"></i></div>`;
      skillMeters.append(m);
    });
  }
}

// ═══════════════════════════════════════════════════
//  NOTES
// ═══════════════════════════════════════════════════
function renderNotes() {
  notesGrid.innerHTML = "";
  portfolio.notes.forEach((n, i) => {
    const c = document.createElement("article");
    c.className = "note-card";
    c.style.animationDelay = `${i * 70}ms`;
    c.innerHTML = `<div style="font-size:1.9rem;margin-bottom:12px">${n.icon}</div>
      <h3>${n.title}</h3><p>${n.summary}</p>`;
    notesGrid.append(c);
  });
}

// ═══════════════════════════════════════════════════
//  TIMELINE
// ═══════════════════════════════════════════════════
function renderTimeline() {
  timelineEl.innerHTML = "";
  portfolio.timeline.forEach((item, i) => {
    const row = document.createElement("article");
    row.className = "timeline-item";
    row.style.animationDelay = `${i * 80}ms`;
    row.innerHTML = `<time>${item.date}</time>
      <div><h3>${item.title}</h3><p>${item.text}</p></div>`;
    timelineEl.append(row);
  });
}

// ═══════════════════════════════════════════════════
//  RESUME SECTION — real data
// ═══════════════════════════════════════════════════
function renderResume() {
  const card = document.querySelector(".resume-card");
  if (!card) return;
  card.innerHTML = `
    <div>
      <h3>${portfolio.name}</h3>
      <p>${portfolio.role} · ${portfolio.location} · <a href="mailto:${portfolio.email}" style="color:var(--teal)">${portfolio.email}</a></p>
    </div>
    <ul>
      <li>Full-stack projects live in production — Banking System (Render) and Smart News App (Netlify).</li>
      <li>Spring Boot + Spring Security + JWT — role-based access, stateless REST APIs, session-based web auth.</li>
      <li>React + Redux Toolkit + Redux Saga — scalable state management across complex async workflows.</li>
      <li>BCA from IIMT University, Meerut · Graduating 2025 · Open to internships and fresher roles.</li>
    </ul>`;
}

// ═══════════════════════════════════════════════════
//  CONTACT
// ═══════════════════════════════════════════════════
function setupContact() {
  document.querySelectorAll(".contact-social-link").forEach(link => {
    if (link.textContent.includes("GitHub"))   link.href = portfolio.githubUrl;
    if (link.textContent.includes("LinkedIn")) link.href = portfolio.linkedinUrl;
  });
  document.querySelectorAll(".site-footer a").forEach(link => {
    if (link.textContent === "GitHub")   link.href = portfolio.githubUrl;
    if (link.textContent === "LinkedIn") link.href = portfolio.linkedinUrl;
    if (link.textContent === "Email")    link.href = `mailto:${portfolio.email}`;
  });

  const form = document.querySelector("#contact-form");
  const note = document.querySelector("#form-note");
  form.addEventListener("submit", e => {
    e.preventDefault();
    const d = new FormData(form);
    const sub = encodeURIComponent(`Portfolio enquiry from ${d.get("name")}`);
    const body = encodeURIComponent(`${d.get("message")}\n\nReply to: ${d.get("email")}`);
    window.location.href = `mailto:${portfolio.email}?subject=${sub}&body=${body}`;
    note.textContent = "Your email app should open with the message ready ✓";
  });
}

// ═══════════════════════════════════════════════════
//  THEME
// ═══════════════════════════════════════════════════
function setupTheme() {
  const saved = localStorage.getItem("portfolio-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  root.dataset.theme = saved || (prefersDark ? "dark" : "light");
  document.querySelector("#theme-toggle").addEventListener("click", () => {
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    localStorage.setItem("portfolio-theme", next);
  });
}

// ═══════════════════════════════════════════════════
//  MOTION / SCROLL / TILT
// ═══════════════════════════════════════════════════
function setupMotion() {
  const items = document.querySelectorAll(".motion-reveal, .meter");
  if (!("IntersectionObserver" in window)) {
    items.forEach(el => el.classList.add("is-visible")); return;
  }
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("is-visible"); obs.unobserve(e.target); } });
  }, { threshold: 0.12 });
  items.forEach(el => obs.observe(el));
}

function setupScrollProgress() {
  const update = () => {
    const s = document.documentElement.scrollHeight - window.innerHeight;
    scrollProg.style.transform = `scaleX(${s > 0 ? Math.min(window.scrollY / s, 1) : 0})`;
  };
  window.addEventListener("scroll", update, { passive: true });
  update();
}

function setupTiltCards() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("pointermove", e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `translateY(-8px) rotateX(${y * -5}deg) rotateY(${x * 5}deg)`;
    });
    card.addEventListener("pointerleave", () => card.style.transform = "");
  });
}

// ═══════════════════════════════════════════════════
//  CANVAS BACKGROUND
// ═══════════════════════════════════════════════════
function setupCanvas() {
  const canvas = document.querySelector("#skill-canvas");
  const ctx = canvas.getContext("2d");
  const pts = Array.from({ length: 55 }, () => ({
    x: Math.random(), y: Math.random(),
    vx: (Math.random() - 0.5) * 0.00042,
    vy: (Math.random() - 0.5) * 0.00042
  }));
  function resize() {
    canvas.width = window.innerWidth * devicePixelRatio;
    canvas.height = window.innerHeight * devicePixelRatio;
  }
  function draw() {
    const w = canvas.width, h = canvas.height;
    ctx.clearRect(0, 0, w, h);
    const col = root.dataset.theme === "dark" ? "47,191,173" : "13,122,110";
    pts.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > 1) p.vx *= -1;
      if (p.y < 0 || p.y > 1) p.vy *= -1;
    });
    for (let i = 0; i < pts.length; i++)
      for (let j = i + 1; j < pts.length; j++) {
        const a = pts[i], b = pts[j];
        const d = Math.hypot((a.x-b.x)*w, (a.y-b.y)*h);
        if (d < 150) {
          ctx.strokeStyle = `rgba(${col},${1-d/150})`;
          ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(a.x*w, a.y*h); ctx.lineTo(b.x*w, b.y*h); ctx.stroke();
        }
      }
    pts.forEach(p => {
      ctx.fillStyle = `rgba(${col},0.4)`;
      ctx.beginPath(); ctx.arc(p.x*w, p.y*h, 2.5*devicePixelRatio, 0, Math.PI*2); ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  window.addEventListener("resize", resize); resize(); draw();
}

// ═══════════════════════════════════════════════════
//  COUNTER ANIMATION (stats)
// ═══════════════════════════════════════════════════
function animateCounter(el, target, duration = 1200) {
  const num = parseInt(target);
  if (isNaN(num)) return;
  let start = null;
  const step = ts => {
    if (!start) start = ts;
    const p = Math.min((ts - start) / duration, 1);
    el.textContent = Math.floor(p * num);
    if (p < 1) requestAnimationFrame(step);
    else el.textContent = target;
  };
  requestAnimationFrame(step);
}

// ═══════════════════════════════════════════════════
//  INIT
// ═══════════════════════════════════════════════════
// Resume download handled by <a href="..."> tags directly
document.querySelector("#footer-year").textContent = new Date().getFullYear();
projectSearch.addEventListener("input", renderProjects);

renderHero();
renderFilters();
renderProjects();
renderSkills();
renderNotes();
renderTimeline();
renderResume();
setupTheme();
setupContact();
setupMotion();
setupScrollProgress();
setupCanvas();

// Animate stat counters when hero is visible
const heroObs = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    document.querySelectorAll(".quick-stats strong").forEach(el => {
      animateCounter(el, el.textContent);
    });
    heroObs.disconnect();
  }
}, { threshold: 0.3 });
const hero = document.querySelector(".hero");
if (hero) heroObs.observe(hero);
