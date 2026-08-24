/* =================================================================
   PORTFOLIO INTERACTIVE LOGIC (SUBHAM BHAL INSPIRED)
   Features: Advanced Filtering, Side-Drawer Injection, Header Shrink,
             Scroll Reveals, Mobile Hamburger, Form Processing
================================================================== */

// --- DYNAMIC VENTURE DATA (HIGH FIDELITY) ---
const portfolioData = {
  talentelgia: {
    name: "TALENTELGIA",
    category: "COMPANY / CURRENT JOB",
    tagline: "Talentelgia Technologies - Premier software development and tech solutions partner.",
    metric1Val: "1.6 Yrs",
    metric1Lbl: "Active Tenure",
    metric2Val: "Agile",
    metric2Lbl: "Sprint Workflows",
    description: "Talentelgia Technologies is a premier offshore software development agency and digital transformation consultancy. We specialize in scaling dedicated software engineering teams and delivering bespoke full-stack corporate solutions for global clients.",
    role: "As a Software Developer at Talentelgia, I engineer performant RESTful backend APIs, construct responsive pixel-perfect frontends, and collaborate actively in weekly scrum stand-ups to deliver state-of-the-art software systems.",
    tags: ["Custom Software", "API Integrations", "Full-Stack Dev", "Agile Standups", "Client Success"],
    link: "https://talentelgia.com"
  },
  covidtracker: {
    name: "COVID-19 TRACKER",
    category: "WEB APPLICATION",
    tagline: "UHD real-time global epidemiological mapping and analytics dashboard.",
    metric1Val: "1M+ Hits",
    metric1Lbl: "API Requests Daily",
    metric2Val: "99.9% Acc",
    metric2Lbl: "Data Synchronization",
    description: "A high-performance global dashboard providing real-time epidemiological analytics during the COVID-19 pandemic. The application aggregates telemetry from Johns Hopkins University, WHO, and CDC, rendering data through interactive vector maps and high-frequency time-series graphs.",
    role: "Sole Developer. I built the rapid caching layer utilizing Redis to prevent API rate-limiting, engineered the SVG geospatial visualization grid, and optimized mobile chart redraw frames to achieve smooth 60fps scrolling.",
    tags: ["React.js", "Redis Cache", "D3.js Visualization", "REST API", "Geospatial Data"],
    link: "https://github.com/subhambhal/covid19-tracker"
  },
  weatherforecasting: {
    name: "WEATHER FORECAST",
    category: "WEB APPLICATION",
    tagline: "Hyper-local meteorological prediction engine utilizing premium weather APIs.",
    metric1Val: "50K+ Users",
    metric1Lbl: "Active Daily",
    metric2Val: "< 200ms",
    metric2Lbl: "Response Latency",
    description: "A highly polished, minimal meteorological tracking application that delivers real-time weather analytics, 7-day granular forecasting, UV index warnings, and live precipitation radar overlays based on the user's active geographic coordinates.",
    role: "Lead Software Engineer. I integrated OpenWeatherMap and custom Radar SDKs, developed a secure geolocation lookup proxy, and structured a service-worker caching pipeline to enable completely offline weather telemetry reviews.",
    tags: ["Vanilla JS", "Geolocation API", "Service Workers", "Weather radar SDK", "Sleek UX"],
    link: "https://github.com/subhambhal/weather-forecasting"
  },
  companymanagement: {
    name: "COMPANY MGMT",
    category: "ENTERPRISE SAAS",
    tagline: "Full-scale enterprise resource planning (ERP) and department automation hub.",
    metric1Val: "500+ Staff",
    metric1Lbl: "Managed Easily",
    metric2Val: "40% Savings",
    metric2Lbl: "In Admin Overhead",
    description: "An advanced corporate ERP platform facilitating multi-department administrative control. It handles employee onboarding telemetry, secure role-based access control (RBAC), real-time payroll audits, and secure department resource scheduling.",
    role: "Backend & Systems Architect. I engineered the secure database schema with PostgreSQL, implemented JWT-based authentication pipelines, and structured custom SQL analytical procedures that generated automatic monthly financial audits.",
    tags: ["Node.js Express", "PostgreSQL", "JWT Authentication", "RBAC Security", "Enterprise ERP"],
    link: "https://github.com/subhambhal/company-management"
  },
  blogapplication: {
    name: "BLOG PLATFORM",
    category: "CMS PLATFORM",
    tagline: "High-performance markdown blogging engine with real-time editorial previews.",
    metric1Val: "10K+ Posts",
    metric1Lbl: "Published",
    metric2Val: "100 / 100",
    metric2Lbl: "PageSpeed Rating",
    description: "A modern, fast, and feature-rich content management platform designed for writers. It includes a custom WYSIWYG markdown drafting editor, dynamic thumbnail generation, robust reader commenting systems, and integrated SEO indexing engines.",
    role: "Full-Stack Developer. I built the editorial draft auto-saving mechanics using localIndexedDB, integrated image optimization pipelines utilizing Sharp, and engineered custom static page pre-rendering to optimize load times.",
    tags: ["Next.js", "MongoDB", "Markdown Parser", "Cloudinary Hosting", "Static Pre-rendering"],
    link: "https://github.com/subhambhal/blog-application"
  },
  eventmanagement: {
    name: "EVENT MANAGEMENT",
    category: "SAAS PRODUCT",
    tagline: "Centralized ticketing engine and live coordinate event scheduling SaaS.",
    metric1Val: "20K+ Tickets",
    metric1Lbl: "Issued Monthly",
    metric2Val: "99.98% SLA",
    metric2Lbl: "Transaction Success",
    description: "A comprehensive event scheduling and ticketing marketplace. The system allows organizers to curate corporate/creative events, issue cryptographically secure PDF tickets with custom QR codes, and process payments securely via Stripe integration.",
    role: "Lead Full-Stack Engineer. I integrated Stripe payment webhooks, engineered the automated QR code generation and validation system using mobile scan APIs, and optimized transactional databases to support 5,000+ concurrent ticketing requests.",
    tags: ["Node.js Express", "Stripe Checkout", "QR Code Engine", "PDF Telemetry", "MongoDB Clusters"],
    link: "https://github.com/subhambhal/event-management"
  }
};

// --- PORTFOLIO FILTERING SYSTEM ---
function initPortfolioFiltering() {
  const tabs = document.querySelectorAll(".tab-btn");
  const cards = document.querySelectorAll(".portfolio-card");
  
  if (tabs.length === 0 || cards.length === 0) return;
  
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      // Toggle active classes on tab buttons
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      
      const filterValue = tab.getAttribute("data-filter");
      
      cards.forEach(card => {
        const cardCategory = card.getAttribute("data-category");
        
        if (filterValue === "all" || filterValue === "websites") {
          // Both 'All Projects' and 'Web Applications' show the developer projects
          if (cardCategory === "websites") {
            card.classList.remove("hide");
            card.style.animation = "fadeIn 0.5s ease forwards";
          } else {
            card.classList.add("hide");
          }
        } else if (filterValue === "companies") {
          // 'Companies' tab shows strictly the Talentelgia Technologies card
          if (cardCategory === "companies") {
            card.classList.remove("hide");
            card.style.animation = "fadeIn 0.5s ease forwards";
          } else {
            card.classList.add("hide");
          }
        } else if (filterValue === "skills") {
          // 'Skills & Resume' tab shows strictly the skills dashboard card
          if (cardCategory === "skills") {
            card.classList.remove("hide");
            card.style.animation = "fadeIn 0.5s ease forwards";
          } else {
            card.classList.add("hide");
          }
        }
      });
    });
  });

  // URL tab parameter trigger for Skills & Resume redirect on page load
  if (window.location.href.includes("tab=skills") || window.location.hash.includes("skills")) {
    setTimeout(() => {
      const skillsTab = document.querySelector('.tab-btn[data-filter="skills"]');
      if (skillsTab) {
        skillsTab.click();
        const target = document.getElementById("work");
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, 400);
  }
}

// --- PROJECT SLIDE DRAWER / MODAL MECHANISM ---
function initProjectDrawer() {
  const cards = document.querySelectorAll(".portfolio-card");
  const overlay = document.getElementById("drawer-overlay");
  const drawer = document.getElementById("project-drawer-el");
  const closeBtn = document.getElementById("drawer-close");
  
  if (cards.length === 0 || !overlay || !drawer || !closeBtn) return;
  
  // Element variables inside the drawer
  const dCategory = document.getElementById("drawer-project-category");
  const dTitle = document.getElementById("drawer-project-title");
  const dTagline = document.getElementById("drawer-project-tagline");
  const dMetric1Val = document.getElementById("drawer-metric-val-1");
  const dMetric1Lbl = document.getElementById("drawer-metric-lbl-1");
  const dMetric2Val = document.getElementById("drawer-metric-val-2");
  const dMetric2Lbl = document.getElementById("drawer-metric-lbl-2");
  const dDescription = document.getElementById("drawer-project-description");
  const dRole = document.getElementById("drawer-project-role");
  const dTags = document.getElementById("drawer-project-tags");
  const dLink = document.getElementById("drawer-project-link");

  if (!dCategory || !dTitle || !dTagline || !dMetric1Val || !dMetric1Lbl || !dMetric2Val || !dMetric2Lbl || !dDescription || !dRole || !dTags || !dLink) return;

  function openDrawer(projId) {
    const data = portfolioData[projId];
    if (!data) return;
    
    // Inject values
    dCategory.textContent = data.category;
    dTitle.textContent = data.name;
    dTagline.textContent = data.tagline;
    
    dMetric1Val.textContent = data.metric1Val;
    dMetric1Lbl.textContent = data.metric1Lbl;
    dMetric2Val.textContent = data.metric2Val;
    dMetric2Lbl.textContent = data.metric2Lbl;
    
    dDescription.textContent = data.description;
    dRole.textContent = data.role;
    
    // Render tag list inside drawer
    dTags.innerHTML = "";
    data.tags.forEach(tag => {
      const span = document.createElement("span");
      span.textContent = tag;
      dTags.appendChild(span);
    });
    
    // Inject CTA href link
    dLink.setAttribute("href", data.link);
    
    // Open drawer transitions
    overlay.classList.add("open");
    drawer.classList.add("open");
    drawer.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden"; // Lock page scroll
  }

  function closeDrawer() {
    overlay.classList.remove("open");
    drawer.classList.remove("open");
    drawer.setAttribute("aria-hidden", "true");
    document.body.style.overflow = ""; // Unlock page scroll
  }

  // Bind click handlers to cards
  cards.forEach(card => {
    card.addEventListener("click", () => {
      const projId = card.getAttribute("data-id");
      openDrawer(projId);
    });
  });

  // Bind close buttons and escape keys
  closeBtn.addEventListener("click", closeDrawer);
  overlay.addEventListener("click", closeDrawer);
  
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer.classList.contains("open")) {
      closeDrawer();
    }
  });
}

// --- NAVIGATION HEADER SCROLL SHRUNK EFFECT ---
function initHeaderScroll() {
  const header = document.querySelector(".header");
  const navItems = document.querySelectorAll(".nav-item");
  const sections = document.querySelectorAll("section");
  
  if (!header) return;
  
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("shrink");
    } else {
      header.classList.remove("shrink");
    }
    
    let currentId = "";
    sections.forEach(sec => {
      const sectionTop = sec.offsetTop;
      const sectionHeight = sec.clientHeight;
      if (window.scrollY >= (sectionTop - varProgressMargin())) {
        currentId = sec.getAttribute("id");
      }
    });
    
    if (currentId) {
      navItems.forEach(item => {
        item.classList.remove("active");
        const href = item.getAttribute("href");
        if (href && (href === '#' + currentId || href.endsWith('#' + currentId))) {
          item.classList.add("active");
        }
      });
    }
  });

  function varProgressMargin() {
    return window.innerWidth <= 768 ? 100 : 150;
  }
}

// --- MOBILE NAVIGATION DRAWER TOGGLE ---
function initMobileMenu() {
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("mobile-menu-dropdown");
  const links = document.querySelectorAll(".mobile-nav-item, .mobile-btn-cta");
  
  if (!toggle || !menu) return;
  
  toggle.addEventListener("click", () => {
    toggle.classList.toggle("open");
    menu.classList.toggle("open");
    
    if (menu.classList.contains("open")) {
      document.body.style.overflow = "hidden"; // Lock page scroll
    } else {
      document.body.style.overflow = ""; // Unlock page scroll
    }
  });
  
  links.forEach(link => {
    link.addEventListener("click", () => {
      toggle.classList.remove("open");
      menu.classList.remove("open");
      document.body.style.overflow = ""; // Unlock scroll
    });
  });
}

// --- SCROLL REVEAL ANIMATIONS (INTERSECTION OBSERVER) ---
function initScrollReveals() {
  const revealElements = document.querySelectorAll(".scroll-reveal");
  
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: "0px 0px -40px 0px"
  });
  
  revealElements.forEach(el => {
    revealObserver.observe(el);
  });
}

// --- FORM SUCCESS SIMULATIONS ---
function initFormSubmissions() {
  const contactForm = document.getElementById("contact-form-el");
  const contactSuccess = document.getElementById("form-success");
  const btnSubmit = document.getElementById("btn-form-submit");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      btnSubmit.textContent = "Sending...";
      btnSubmit.setAttribute("disabled", "true");
      
      const data = new FormData(contactForm);
      fetch("https://formspree.io/f/xkoeakgk", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          contactForm.style.display = "none";
          contactSuccess.style.display = "block";
        } else {
          alert("Oops! There was a problem submitting your form. Please try again.");
          btnSubmit.removeAttribute("disabled");
          btnSubmit.textContent = "Send Message";
        }
      }).catch(error => {
        alert("Oops! There was a network error. Please check your connection and try again.");
        btnSubmit.removeAttribute("disabled");
        btnSubmit.textContent = "Send Message";
      });
    });
  }

  const newsletterForm = document.getElementById("newsletter-form-el");
  const newsInput = document.getElementById("newsletter-input");
  const newsSuccess = document.getElementById("newsletter-success-msg");
  const btnNewsSubmit = document.getElementById("btn-newsletter-submit");

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      btnNewsSubmit.textContent = "Joining...";
      btnNewsSubmit.setAttribute("disabled", "true");
      newsInput.setAttribute("disabled", "true");
      
      const data = new FormData(newsletterForm);
      fetch("https://formspree.io/f/xkoeakgk", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          btnNewsSubmit.style.display = "none";
          newsSuccess.style.display = "block";
        } else {
          alert("Oops! There was a problem joining our newsletter. Please try again.");
          btnNewsSubmit.removeAttribute("disabled");
          btnNewsSubmit.textContent = "Join";
          newsInput.removeAttribute("disabled");
        }
      }).catch(error => {
        alert("Oops! There was a network error. Please check your connection and try again.");
        btnNewsSubmit.removeAttribute("disabled");
        btnNewsSubmit.textContent = "Join";
        newsInput.removeAttribute("disabled");
      });
    });
  }
}

// --- PREMIUM URL ROUTER & ADDRESS BAR REWRITER ---
function initURLRouter() {
  const isHomePage = window.location.pathname.endsWith("index.html") || window.location.pathname === "/" || window.location.pathname.endsWith("/");

  // Helper to safely update URL address bar without throwing SecurityError under file:// protocol
  function safeUpdateURL(path) {
    try {
      if (window.location.protocol.startsWith("http")) {
        history.pushState(null, "", path);
      } else {
        // Fallback for file:// protocol
        history.replaceState(null, "", window.location.pathname + "#" + path.replace("/", ""));
      }
    } catch (e) {
      console.warn("History API rewrite skipped: " + e.message);
    }
  }

  function safeReplaceURL(path) {
    try {
      if (window.location.protocol.startsWith("http")) {
        history.replaceState(null, "", path);
      }
    } catch (e) {
      console.warn("History API rewrite skipped: " + e.message);
    }
  }

  // 1. Handle on-load URL normalization
  if (isHomePage) {
    const hash = window.location.hash;
    if (hash === "#services") {
      safeReplaceURL("/service");
    } else if (hash === "#work") {
      safeReplaceURL("/link");
    } else if (hash === "#contact") {
      safeReplaceURL("/contact");
    } else {
      safeReplaceURL("/home");
    }
  } else if (window.location.pathname.endsWith("about.html")) {
    safeReplaceURL("/about");
  } else if (window.location.pathname.endsWith("blog.html")) {
    safeReplaceURL("/blog");
  }

  // 2. Intercept navigation clicks
  const navLinks = document.querySelectorAll(".nav-item, .mobile-nav-item, .mobile-btn-cta, .btn-header");
  
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (!href) return;

      // Handle Home link click
      if (href === "index.html" || href === "index.html#home" || href === "./" || href === "#home" || href === "index.html") {
        if (isHomePage) {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
          safeUpdateURL("/home");
        }
      } 
      // Handle Services link click
      else if (href === "#services" || href === "index.html#services") {
        if (isHomePage) {
          e.preventDefault();
          const target = document.getElementById("services");
          if (target) {
            target.scrollIntoView({ behavior: "smooth" });
            safeUpdateURL("/service");
          }
        }
      } 
      // Handle Links click
      else if (href === "#work" || href === "index.html#work") {
        if (isHomePage) {
          e.preventDefault();
          const target = document.getElementById("work");
          if (target) {
            target.scrollIntoView({ behavior: "smooth" });
            safeUpdateURL("/link");
          }
        }
      } 
      // Handle Contact click
      else if (href === "#contact" || href === "index.html#contact") {
        if (isHomePage) {
          e.preventDefault();
          const target = document.getElementById("contact");
          if (target) {
            target.scrollIntoView({ behavior: "smooth" });
            safeUpdateURL("/contact");
          }
        }
      }
    });
  });

  // 3. Keep scroll highlights and URL synchronized
  let scrollTimeout;
  window.addEventListener("scroll", () => {
    if (!isHomePage) return;
    
    // Throttle scroll checks for optimum performance
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      const sections = [
        { id: "services", path: "/service" },
        { id: "work", path: "/link" },
        { id: "contact", path: "/contact" }
      ];

      let currentPath = "/home";
      sections.forEach(sec => {
        const el = document.getElementById(sec.id);
        if (el) {
          const top = el.offsetTop - 250;
          if (window.scrollY >= top) {
            currentPath = sec.path;
          }
        }
      });

      // Update state without thrashing the history entries
      safeReplaceURL(currentPath);
    }, 100);
  });
}

// --- RUN SYSTEM INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
  initPortfolioFiltering();    // 1. Set up category filter tabs
  initProjectDrawer();         // 2. Set up dynamic project detail drawers
  initHeaderScroll();          // 3. Shrink nav on scroll & highlight items
  initMobileMenu();            // 4. Build mobile hamburger logic
  initScrollReveals();         // 5. Hook viewport reveal observer
  initFormSubmissions();       // 6. Initialize form processing overrides
  initURLRouter();             // 7. Initialize premium address bar routing
  initChatbot();               // 8. Initialize premium portfolio chatbot
});

// --- PORTFOLIO CHATBOT WIDGET ---
function initChatbot() {
  // 1. Inject HTML markup dynamically into the DOM
  const chatbotHTML = `
    <!-- Toggle Welcome Tooltip -->
    <div class="chatbot-tooltip" id="chatbot-tooltip-el">Ask me anything! 👋</div>

    <!-- Toggle Button -->
    <button class="chatbot-toggle" id="chatbot-toggle-el" aria-label="Toggle Chatbot">
      <!-- Chat Icon -->
      <svg class="icon-chat" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H5.17L4 17.17V4H20V16Z" fill="currentColor"/>
        <path d="M7 9H17V11H7V9Z" fill="currentColor"/>
        <path d="M7 6H17V8H7V6Z" fill="currentColor"/>
        <path d="M7 12H13V14H7V12Z" fill="currentColor"/>
      </svg>
      <!-- Close Icon -->
      <svg class="icon-close" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="currentColor"/>
      </svg>
    </button>

    <!-- Glassmorphic Chat Window -->
    <div class="chatbot-window" id="chatbot-window-el">
      <div class="chatbot-header">
        <div class="chatbot-profile-info">
          <div class="chatbot-avatar-wrapper">
            <img class="chatbot-avatar" src="assets/entrepreneur_portrait.jpg" alt="Subham Bhal">
            <span class="chatbot-status-dot"></span>
          </div>
          <div class="chatbot-identity">
            <span class="chatbot-identity-name">Subham's Assistant</span>
            <span class="chatbot-identity-status">Active Online</span>
          </div>
        </div>
        <button class="chatbot-close-btn" id="chatbot-close-el" aria-label="Close Chat">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      <div class="chatbot-body" id="chatbot-messages-el">
        <!-- Messages will be injected here -->
      </div>

      <div class="chatbot-chips-container" id="chatbot-chips-el">
        <button class="chatbot-chip" data-query="Who is Subham?">Who is Subham? 👨‍💻</button>
        <button class="chatbot-chip" data-query="What services does he offer?">Services 🛠️</button>
        <button class="chatbot-chip" data-query="Show me his projects">Projects 🚀</button>
        <button class="chatbot-chip" data-query="About his paintings">Art Gallery 🎨</button>
        <button class="chatbot-chip" data-query="Download his Resume">Resume PDF 💼</button>
      </div>

      <div class="chatbot-footer">
        <input type="text" class="chatbot-input" id="chatbot-input-el" placeholder="Ask about Subham..." autocomplete="off">
        <button class="chatbot-send-btn" id="chatbot-send-el" aria-label="Send Message">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z" fill="currentColor"/>
          </svg>
        </button>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', chatbotHTML);

  // 2. Query DOM Elements
  const toggleBtn = document.getElementById('chatbot-toggle-el');
  const chatWindow = document.getElementById('chatbot-window-el');
  const closeBtn = document.getElementById('chatbot-close-el');
  const messagesContainer = document.getElementById('chatbot-messages-el');
  const inputField = document.getElementById('chatbot-input-el');
  const sendBtn = document.getElementById('chatbot-send-el');
  const chipsContainer = document.getElementById('chatbot-chips-el');
  const tooltip = document.getElementById('chatbot-tooltip-el');

  if (!toggleBtn || !chatWindow || !closeBtn || !messagesContainer || !inputField || !sendBtn) return;

  let hasOpenedBefore = false;

  // 3. Greeting text
  const welcomeText = "Hi! I'm Subham's AI Assistant. How can I help you explore his developer profile, services, and fine-art paintings today?";

  // Helper to add a message bubble
  function addMessage(sender, text) {
    const messageRow = document.createElement('div');
    messageRow.className = `chatbot-msg-row ${sender}`;

    const bubble = document.createElement('div');
    bubble.className = 'chatbot-msg-bubble';
    bubble.innerHTML = text;

    messageRow.appendChild(bubble);
    messagesContainer.appendChild(messageRow);
    
    // Auto scroll to bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  // Helper to show typing indicator
  let typingBubble = null;
  function showTypingIndicator() {
    if (typingBubble) return;

    typingBubble = document.createElement('div');
    typingBubble.className = 'chatbot-msg-row bot';
    typingBubble.innerHTML = `
      <div class="chatbot-typing-bubble">
        <div class="chatbot-typing-dot"></div>
        <div class="chatbot-typing-dot"></div>
        <div class="chatbot-typing-dot"></div>
      </div>
    `;
    messagesContainer.appendChild(typingBubble);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  function hideTypingIndicator() {
    if (typingBubble) {
      typingBubble.remove();
      typingBubble = null;
    }
  }

  // 4. Smart keyword matcher
  function getBotResponse(inputText) {
    const clean = inputText.toLowerCase().trim();

    if (clean.includes("who") || clean.includes("about") || clean.includes("bio") || clean.includes("subham") || clean.includes("bhal") || clean.includes("developer")) {
      return {
        text: "Subham Bhal is a Software Developer at Talentelgia Technologies with 1.6 years of professional coding experience, paired with a rich 7-8 year journey as a passionate fine-arts painter (100+ curated paintings). He thrives where logical code meets creative artistry!",
        action: "about"
      };
    }
    if (clean.includes("service") || clean.includes("consulting") || clean.includes("do you do") || clean.includes("offer") || clean.includes("booking") || clean.includes("workshop")) {
      return {
        text: "Subham offers three primary services: 1️⃣ Personal Branding & Growth Consulting, 2️⃣ Premium Web & App Development, and 3️⃣ Fine-Art Painting Workshops. Let me scroll you down to the Services section!",
        action: "services"
      };
    }
    if (clean.includes("project") || clean.includes("portfolio") || clean.includes("built") || clean.includes("website") || clean.includes("work")) {
      return {
        text: "Subham has built multiple advanced systems, including a SaaS Event Ticketing product, a Markdown Blog Engine, an Enterprise Company Management portal, and a Covid tracker. Let me scroll you down to the Projects section!",
        action: "projects"
      };
    }
    if (clean.includes("paint") || clean.includes("art") || clean.includes("canvas") || clean.includes("gallery") || clean.includes("creative")) {
      return {
        text: "Subham has over 7-8 years of experience as a painter and has curated 100+ fine-art canvases. You can check out his beautiful visual gallery on the <a href='about.html#gallery' style='text-decoration: underline; font-weight: 600;'>About Page Gallery</a>!",
        action: "paintings"
      };
    }
    if (clean.includes("contact") || clean.includes("email") || clean.includes("reach") || clean.includes("message") || clean.includes("support")) {
      return {
        text: "You can write directly to support@subhambhal.com, or fill out the contact form. Let me scroll you down to the Contact section!",
        action: "contact"
      };
    }
    if (clean.includes("resume") || clean.includes("cv") || clean.includes("download") || clean.includes("experience")) {
      return {
        text: "Sure! You can download Subham's official PDF resume here: <a href='assets/Subham_Bhal_Resume.pdf' target='_blank' style='text-decoration: underline; font-weight: 600;'>Download Resume PDF</a>.",
        action: "resume"
      };
    }
    if (clean.includes("hire") || clean.includes("job") || clean.includes("work with") || clean.includes("collab")) {
      return {
        text: "Subham is open to exciting software development roles, consulting calls, and creative collaborations! Let's scroll down to the contact details so you can get in touch.",
        action: "hire"
      };
    }
    if (clean.includes("hello") || clean.includes("hi") || clean.includes("hey") || clean.includes("greetings")) {
      return {
        text: "Hello! How can I assist you with Subham's portfolio today?",
        action: "hello"
      };
    }

    return {
      text: "I'm not sure about that, but feel free to write directly to support@subhambhal.com, or ask me about: 👨‍💻 Subham's Bio, 🛠️ Services, 🚀 Projects, or 🎨 Painting Gallery!",
      action: "default"
    };
  }

  // Dynamic Action executor
  const isHomePage = window.location.pathname.endsWith('/') || window.location.pathname.endsWith('index.html') || window.location.pathname === '' || (!window.location.pathname.includes('.html'));

  function handleBotAction(action) {
    setTimeout(() => {
      if (action === 'services') {
        if (isHomePage) {
          document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.location.href = 'index.html#services';
        }
      } else if (action === 'projects') {
        if (isHomePage) {
          document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.location.href = 'index.html#work';
        }
      } else if (action === 'contact' || action === 'hire') {
        if (isHomePage) {
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.location.href = 'index.html#contact';
        }
      } else if (action === 'resume') {
        if (isHomePage) {
          const tab = document.querySelector('.tab-btn[data-filter="skills"]');
          if (tab) tab.click();
          document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.location.href = 'index.html#work?tab=skills';
        }
      }
    }, 400);
  }

  // Handle incoming message submit
  function submitMessage(text) {
    if (!text.trim()) return;

    // Add user message
    addMessage('user', text);

    // Show typing
    showTypingIndicator();

    // Trigger bot reply with simulated thinking delay (800ms-1200ms)
    const replyDelay = 800 + Math.random() * 400;
    setTimeout(() => {
      hideTypingIndicator();
      const response = getBotResponse(text);
      addMessage('bot', response.text);
      handleBotAction(response.action);
    }, replyDelay);
  }

  // 5. Setup Listeners
  // Show / Hide Toggle
  toggleBtn.addEventListener('click', () => {
    const isOpening = !chatWindow.classList.contains('open');
    chatWindow.classList.toggle('open', isOpening);
    toggleBtn.classList.toggle('open', isOpening);
    
    // Hide welcome tooltip on click
    tooltip.classList.remove('show');

    if (isOpening && !hasOpenedBefore) {
      hasOpenedBefore = true;
      // Show greeting message
      showTypingIndicator();
      setTimeout(() => {
        hideTypingIndicator();
        addMessage('bot', welcomeText);
      }, 600);
    }
  });

  closeBtn.addEventListener('click', () => {
    chatWindow.classList.remove('open');
    toggleBtn.classList.remove('open');
  });

  // Suggestion Chips Click Handler
  chipsContainer.addEventListener('click', (e) => {
    const chip = e.target.closest('.chatbot-chip');
    if (!chip) return;
    const query = chip.getAttribute('data-query');
    if (query) {
      submitMessage(query);
    }
  });

  // Send Action Inputs
  sendBtn.addEventListener('click', () => {
    const text = inputField.value;
    submitMessage(text);
    inputField.value = '';
  });

  inputField.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const text = inputField.value;
      submitMessage(text);
      inputField.value = '';
    }
  });

  // 6. Tooltip Trigger Delay (2.5 seconds on load)
  setTimeout(() => {
    if (!hasOpenedBefore && !chatWindow.classList.contains('open')) {
      tooltip.classList.add('show');
    }
  }, 2500);

  // Hide tooltip on scrolling the page
  window.addEventListener('scroll', () => {
    tooltip.classList.remove('show');
  }, { passive: true });
}