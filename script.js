/**
 * Briefify - Application Core Script
 * Surgical Minimalism for Creative Minds
 */

// A high-fidelity, hand-curated dataset of design briefs that match the system's aesthetic
const BRIEFS_POOL = [
  {
    id: "lumiere-skincare",
    title: "Lumiere Skincare Rebrand",
    category: "Branding",
    tags: ["Health & Beauty", "Brand Identity"],
    industry: "Health & Beauty",
    deadline: "Oct 24, 2026",
    client: "Lumiere Labs Co.",
    target: "Eco-conscious Gen Z & Millennials (24-38) seeking dermatological transparency.",
    personality: "Clean, Scientific, Empathetic, Elevated.",
    goal: "Establish market authority in the 'Clean Medical' skincare niche through a premium visual language.",
    deliverables: [
      "Primary & Secondary Logos",
      "Packaging Design (3 SKU family)",
      "Digital Brand Guidelines"
    ],
    constraints: "Avoid high-gloss finishes. Must use FSC-certified material references. Typography must be legible at 8pt for packaging requirements.",
    style: "MINIMALIST",
    moodboardTags: ["#scandinavian", "#clinical-chic", "#sustainable"],
    moodboardImages: [
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=600&auto=format&fit=crop"
    ],
    typography: [
      { type: "SERIF + SANS", title: "Playfair Display", subtitle: "Inter Regular", fontClass: "font-serif", checked: true },
      { type: "MONO + SANS", title: "JetBrains Mono", subtitle: "Inter Medium", fontClass: "font-mono", checked: false }
    ],
    palette: [
      { name: "Pristine Snow", hex: "#F8F9FA", color: "#F8F9FA" },
      { name: "Deep Indigo", hex: "#4D41DF", color: "#4D41DF" },
      { name: "Medical Gray", hex: "#E1E3E4", color: "#E1E3E4" },
      { name: "Carbon Base", "hex": "#2E3132", color: "#2E3132" }
    ]
  },
  {
    id: "vortex-fintech-dashboard",
    title: "Vortex Fintech Dashboard",
    category: "Web Design",
    tags: ["Finance & Tech", "Web Design"],
    industry: "Finance & Tech",
    deadline: "Nov 12, 2026",
    client: "Vortex Global Inc.",
    target: "Gen Z & Millennial retail traders seeking clear data visualization without cognitive overload.",
    personality: "Hyper-functional, Secure, Advanced, Humanistic.",
    goal: "Democratize retail trading by replacing technical jargon with natural language and responsive charts.",
    deliverables: [
      "Responsive Web Dashboard Layout",
      "Design Token System Documentation",
      "Custom Data Visualization Widget Kit"
    ],
    constraints: "All interface patterns must achieve AAA WCAG standards. Data refresh cycles must have tactile feedback states.",
    style: "DARK MODERN",
    moodboardTags: ["#cyber-glass", "#data-rhythm", "#high-contrast"],
    moodboardImages: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1510519138101-570d1dca3d66?q=80&w=600&auto=format&fit=crop"
    ],
    typography: [
      { type: "MONO + SANS", title: "JetBrains Mono", subtitle: "Inter Medium", fontClass: "font-mono", checked: true },
      { type: "SERIF + SANS", title: "Playfair Display", subtitle: "Inter Regular", fontClass: "font-serif", checked: false }
    ],
    palette: [
      { name: "Midnight Void", hex: "#0F172A", color: "#0F172A" },
      { name: "Electric Indigo", hex: "#6366F1", color: "#6366F1" },
      { name: "Cyber Emerald", hex: "#10B981", color: "#10B981" },
      { name: "Neon Slate", hex: "#64748B", color: "#64748B" }
    ]
  },
  {
    id: "eco-pulse-launch",
    title: "Eco-Pulse Launch Toolkit",
    category: "Marketing",
    tags: ["Environment", "Marketing Identity"],
    industry: "Environment",
    deadline: "Sep 28, 2026",
    client: "GreenRoots Foundation",
    target: "Climate-conscious consumers looking for local community impact campaigns.",
    personality: "Organic, Bold, Direct, Urgent.",
    goal: "Frame carbon offsetting as a positive, proactive lifestyle option rather than an obligation.",
    deliverables: [
      "Physical Campaign Poster Series (3 layouts)",
      "Digital Campaign Landings",
      "Interactive Community Resource Map"
    ],
    constraints: "Can only use vegetable-ink color mappings for physical layouts. Minimal layout densities of less than 40% ink coverage.",
    style: "ORGANIC ACTIVE",
    moodboardTags: ["#canopy-view", "#raw-textiles", "#solar-gradient"],
    moodboardImages: [
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=600&auto=format&fit=crop"
    ],
    typography: [
      { type: "SERIF + SANS", title: "Playfair Display", subtitle: "Inter Regular", fontClass: "font-serif", checked: true },
      { type: "MONO + SANS", title: "JetBrains Mono", subtitle: "Inter Medium", fontClass: "font-mono", checked: false }
    ],
    palette: [
      { name: "Forest Canopy", hex: "#065F46", color: "#065F46" },
      { name: "Warm Canvas", hex: "#F3F4F6", color: "#F3F4F6" },
      { name: "Tuscan Ochre", hex: "#D97706", color: "#D97706" },
      { name: "River Bed", hex: "#374151", color: "#374151" }
    ]
  },
  {
    id: "roasters-co-packaging",
    title: "Origin Coffee Packaging & Identity",
    category: "Branding",
    tags: ["Food & Beverage", "Branding"],
    industry: "Food & Beverage",
    deadline: "Dec 05, 2026",
    client: "Origin Coffee Imports",
    target: "Specialty coffee collectors and design-minded morning commuters.",
    personality: "Warm, Artisanal, Grounded, Bold.",
    goal: "Reflect the precise geological terroir of high-altitude beans through earth tones and line-art topography.",
    deliverables: [
      "Biodegradable Bag Outer Print System",
      "Product Taxonomy Labels (3 Origin Types)",
      "Interactive Flavor Wheel Poster"
    ],
    constraints: "All assets must use zero plastic laminates. Max 2 colors per label to accommodate rotary screen printers.",
    style: "WARM BRUTALISM",
    moodboardTags: ["#terracotta", "#parchment", "#espresso-pours"],
    moodboardImages: [
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=600&auto=format&fit=crop"
    ],
    typography: [
      { type: "SERIF + SANS", title: "Playfair Display", subtitle: "Inter Regular", fontClass: "font-serif", checked: true },
      { type: "MONO + SANS", title: "JetBrains Mono", subtitle: "Inter Medium", fontClass: "font-mono", checked: false }
    ],
    palette: [
      { name: "Coffee Terroir", hex: "#5C3E21", color: "#5C3E21" },
      { name: "Steamed Foam", hex: "#FFFBF2", color: "#FFFBF2" },
      { name: "Saffron Sprout", hex: "#EA580C", color: "#EA580C" },
      { name: "Earth Bark", hex: "#1F2937", color: "#1F2937" }
    ]
  },
  {
    id: "odyssey-nomad-app",
    title: "Odyssey Travel Guide System",
    category: "Web Design",
    tags: ["Travel & Lifestyle", "Web Design"],
    industry: "Travel & Lifestyle",
    deadline: "Jan 18, 2027",
    client: "Odyssey Expeditions Ltd.",
    target: "Boutique travelers, slow-movement advocates, and digital nomads.",
    personality: "Adventurous, Serene, Cultured, Spacious.",
    goal: "Translate the architectural feeling of physical check-ins and maps into fluid web motion designs.",
    deliverables: [
      "Responsive Interactive Destination Hub",
      "Offline Map UI Component Specifications",
      "Traveler Visual Itinerary Booklet Layout"
    ],
    constraints: "Components must require zero sub-grid overlaps to ensure quick offline visual renders.",
    style: "MINIMAL NATURE",
    moodboardTags: ["#desert-adobe", "#geometric-shores", "#clean-journals"],
    moodboardImages: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=600&auto=format&fit=crop"
    ],
    typography: [
      { type: "SERIF + SANS", title: "Playfair Display", subtitle: "Inter Regular", fontClass: "font-serif", checked: true },
      { type: "MONO + SANS", title: "JetBrains Mono", subtitle: "Inter Medium", fontClass: "font-mono", checked: false }
    ],
    palette: [
      { name: "Adobe Clay", hex: "#C2410C", color: "#C2410C" },
      { name: "Alabaster", hex: "#FAFAF9", color: "#FAFAF9" },
      { name: "Mountain Dusk", hex: "#1E293B", color: "#1E293B" },
      { name: "Desert Sage", hex: "#0F766E", color: "#0F766E" }
    ]
  },
  {
    id: "capsule-wellness-ux",
    title: "Capsule Healthcare Application",
    category: "Web Design",
    tags: ["Health & Beauty", "Web Design"],
    industry: "Health & Beauty",
    deadline: "Feb 10, 2027",
    client: "Capsule Health Corp.",
    target: "Geriatric & physical therapy patients looking for stressless booking flows.",
    personality: "Empathetic, Pristine, Accessible, Professional.",
    goal: "Rethink health UI by employing extremely large tactile inputs and calming, non-clinical color palettes.",
    deliverables: [
      "Accessible Patient Web Portal UI",
      "Typography & Icon Accessibility Guidelines",
      "High-Fidelity Medication Reminder Wireframes"
    ],
    constraints: "Underlying HTML structure must support screen-readers natively. Core visual contrast ratio must be 7:1.",
    style: "ELEVATED SYSTEM",
    moodboardTags: ["#clinical-glass", "#pure-linen", "#ambient-light"],
    moodboardImages: [
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1579684389783-bdf560104de0?q=80&w=600&auto=format&fit=crop"
    ],
    typography: [
      { type: "SERIF + SANS", title: "Playfair Display", subtitle: "Inter Regular", fontClass: "font-serif", checked: false },
      { type: "MONO + SANS", title: "JetBrains Mono", subtitle: "Inter Medium", fontClass: "font-mono", checked: true }
    ],
    palette: [
      { name: "Tactile Blue", hex: "#1E40AF", color: "#1E40AF" },
      { name: "Pristine Snow", hex: "#FAF9F6", color: "#FAF9F6" },
      { name: "Medical Sage", hex: "#047857", color: "#047857" },
      { name: "Neutral Charcoal", hex: "#475569", color: "#475569" }
    ]
  },
  {
    id: "terra-solar-branding",
    title: "Terra Solar Renewable Identity",
    category: "Branding",
    tags: ["Environment", "Brand Identity"],
    industry: "Environment",
    deadline: "Mar 30, 2027",
    client: "Terra Solar Alternatives",
    target: "Commercial property owners looking to transition grids with elegant tech overlays.",
    personality: "Pioneering, Direct, Grounded, Technical.",
    goal: "Shift solar energy from a hippie stereotype into a high-technology, grid-integrated infrastructure paradigm.",
    deliverables: [
      "Primary Symbol & Technical Brandmark Layouts",
      "Corporate Sustainability Dashboard UI Mockups",
      "Eco-Materials Procurement Specifications Guide"
    ],
    constraints: "Packaging files must satisfy vector-only line constraints. High-fidelity prints must use 100% recycled stocks.",
    style: "MINIMAL SOLARIST",
    moodboardTags: ["#canopy-view", "#raw-textiles", "#solar-gradient"],
    moodboardImages: [
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509391366360-2e95aef16ee9?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=600&auto=format&fit=crop"
    ],
    typography: [
      { type: "MONO + SANS", title: "JetBrains Mono", subtitle: "Inter Medium", fontClass: "font-mono", checked: false },
      { type: "SERIF + SANS", title: "Playfair Display", subtitle: "Inter Regular", fontClass: "font-serif", checked: true }
    ],
    palette: [
      { name: "Solar Amber", hex: "#D97706", color: "#D97706" },
      { name: "Steep Silicon", hex: "#1E293B", color: "#1E293B" },
      { name: "Bright Canvas", hex: "#FAFAF9", color: "#FAFAF9" },
      { name: "Active Teal", hex: "#0D9488", color: "#0D9488" }
    ]
  }
];

// Local Storage Helper Functions
function getSavedProjects() {
  const data = localStorage.getItem("saved_projects");
  return data ? JSON.parse(data) : [];
}

function saveProjects(projects) {
  localStorage.setItem("saved_projects", JSON.stringify(projects));
}

function getCurrentBrief() {
  const data = localStorage.getItem("current_brief");
  if (data) {
    return JSON.parse(data);
  }
  return BRIEFS_POOL[0];
}

function saveCurrentBrief(brief) {
  localStorage.setItem("current_brief", JSON.stringify(brief));
}

// Generate New Brief State Manager
function generateRandomBrief() {
  const current = getCurrentBrief();
  let nextBrief;
  
  let iterations = 0;
  do {
    const randomIndex = Math.floor(Math.random() * BRIEFS_POOL.length);
    nextBrief = BRIEFS_POOL[randomIndex];
    iterations++;
  } while (nextBrief.id === current.id && iterations < 15);
  
  saveCurrentBrief(nextBrief);
  return nextBrief;
}

// Dynamic DOM Rendering For Generator Page
function renderGenerator(brief) {
  if (!document.getElementById("briefContent")) return;

  const container = document.getElementById("briefContent");
  container.innerHTML = `
    <div class="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6">
      <div>
        <h2 class="text-3xl font-serif font-black tracking-tight mb-2 text-slate-905">${brief.title}</h2>
        <div class="flex flex-wrap gap-2">
          ${brief.tags.map(tag => `<span class="bg-[#EAE7E0]/60 text-slate-800 border border-slate-200/70 px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider">${tag}</span>`).join('')}
        </div>
      </div>
      <div class="text-left sm:text-right">
        <span class="text-[10px] uppercase tracking-widest text-slate-400 font-bold block mb-1">DEADLINE</span>
        <span class="text-base font-serif italic font-extrabold text-slate-800">${brief.deadline}</span>
      </div>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-slate-200/60 pt-6">
      <div class="space-y-4">
        <div>
          <label class="text-[10px] uppercase tracking-widest text-slate-400 font-bold block mb-1">CLIENT NAME</label>
          <p class="text-sm font-semibold text-slate-800">${brief.client}</p>
        </div>
        <div>
          <label class="text-[10px] uppercase tracking-widest text-slate-400 font-bold block mb-1">TARGET AUDIENCE</label>
          <p class="text-xs text-slate-500 leading-relaxed">${brief.target}</p>
        </div>
        <div>
          <label class="text-[10px] uppercase tracking-widest text-slate-400 font-bold block mb-1">BRAND PERSONALITY</label>
          <p class="text-xs text-slate-500 leading-relaxed">${brief.personality}</p>
        </div>
      </div>
      
      <div class="space-y-4">
        <div>
          <label class="text-[10px] uppercase tracking-widest text-slate-400 font-bold block mb-1">PROJECT GOAL</label>
          <p class="text-xs font-semibold text-slate-800 leading-relaxed">${brief.goal}</p>
        </div>
        <div>
          <label class="text-[10px] uppercase tracking-widest text-slate-400 font-bold block mb-1">DELIVERABLES</label>
          <ul class="list-disc list-inside text-xs text-slate-500 space-y-1">
            ${brief.deliverables.map(del => `<li>${del}</li>`).join('')}
          </ul>
        </div>
      </div>
    </div>
    
    <div class="mt-6 p-4 bg-[#EAE7E0]/40 rounded border border-slate-200/60">
      <label class="text-[10px] uppercase tracking-widest text-slate-800 font-extrabold mb-1 block">DESIGN CONSTRAINTS</label>
      <p class="text-xs italic text-slate-600 leading-relaxed">${brief.constraints}</p>
    </div>
  `;

  // Render Sidebar Elements: Moodboard
  const moodboardTitle = document.getElementById("moodboard-style");
  if (moodboardTitle) {
    moodboardTitle.textContent = brief.style;
  }
  
  const moodboardGrid = document.getElementById("moodboard-grid");
  if (moodboardGrid && brief.moodboardImages) {
    moodboardGrid.innerHTML = brief.moodboardImages.map(imgUrl => `
      <div class="h-28 rounded-lg bg-cover bg-center border border-slate-100 hover:scale-[1.03] transition-transform duration-300 shadow-sm" 
           style="background-image: url('${imgUrl}');" 
           title="Visual reference asset for design style">
      </div>
    `).join('');
  }

  const moodboardTagsCont = document.getElementById("moodboard-tags");
  if (moodboardTagsCont && brief.moodboardTags) {
    moodboardTagsCont.innerHTML = brief.moodboardTags.map(tag => `
      <span class="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-medium">${tag}</span>
    `).join('');
  }

  // Render Sidebar Elements: Typography Pairings
  const typographyCont = document.getElementById("typography-pairings");
  if (typographyCont && brief.typography) {
    typographyCont.innerHTML = brief.typography.map((t, idx) => `
      <div class="group cursor-pointer p-3 rounded-xl hover:bg-slate-50 transition-all border ${t.checked ? 'border-indigo-100 bg-indigo-50/40' : 'border-transparent opacity-75 hover:opacity-100'}" 
           onclick="selectTypography(${idx})">
        <div class="flex justify-between items-center mb-1">
          <span class="text-[10px] uppercase tracking-wider font-bold text-slate-400">${t.type}</span>
          <span class="material-symbols-outlined text-[18px] ${t.checked ? 'text-indigo-600' : 'text-slate-300'} select-none">
            ${t.checked ? 'check_circle' : 'circle'}
          </span>
        </div>
        <p class="text-xl font-bold leading-tight" style="${t.fontClass === 'font-serif' ? "font-family: 'Playfair Display', serif;" : "font-family: 'JetBrains Mono', monospace;"}">${t.title}</p>
        <p class="text-xs text-slate-500">${t.subtitle}</p>
      </div>
    `).join('');
  }

  // Render Sidebar Elements: Color Swatches
  const swatchCont = document.getElementById("color-palette");
  if (swatchCont && brief.palette) {
    swatchCont.innerHTML = brief.palette.map(swatch => `
      <div class="flex items-center gap-3 group">
        <div class="w-10 h-10 rounded-lg border border-slate-200/60 shadow-sm group-hover:scale-105 transition-transform duration-300" 
             style="background-color: ${swatch.color};"></div>
        <div>
          <p class="text-xs font-bold text-slate-800">${swatch.name}</p>
          <p class="font-mono text-slate-400 text-xxs uppercase tracking-wider">${swatch.hex}</p>
        </div>
      </div>
    `).join('');
  }
}

// Add global toggle capability for typography choices
window.selectTypography = function(idx) {
  const brief = getCurrentBrief();
  brief.typography.forEach((t, i) => {
    t.checked = (i === idx);
  });
  saveCurrentBrief(brief);
  renderGenerator(brief);
};

// Generate Brief CTA Helper (shared between home page and workspace)
function initGeneratorPage() {
  const current = getCurrentBrief();
  renderGenerator(current);

  // Set up click events
  const generateBtn = document.getElementById("generateBtn");
  const generateSecondaryBtn = document.getElementById("generateSecondaryBtn");
  const saveBtn = document.getElementById("saveBtn");

  const triggerGenerate = () => {
    const briefBox = document.getElementById("briefContent");
    const btns = [generateBtn, generateSecondaryBtn].filter(Boolean);
    
    btns.forEach(btn => {
      btn.disabled = true;
      btn.innerHTML = '<span class="material-symbols-outlined animate-spin text-[18px]">progress_activity</span> Synthesizing...';
    });

    if (briefBox) {
      briefBox.classList.add("opacity-40", "blur-[1px]");
    }

    setTimeout(() => {
      const freshBrief = generateRandomBrief();
      renderGenerator(freshBrief);
      
      btns.forEach(btn => {
        btn.disabled = false;
        btn.innerHTML = btn.id === "generateBtn" 
          ? '<span class="material-symbols-outlined text-[18px]">auto_awesome</span> Generate Brief'
          : '<span class="material-symbols-outlined text-[18px]">refresh</span> Generate New Brief';
      });

      if (briefBox) {
        briefBox.classList.remove("opacity-40", "blur-[1px]");
        briefBox.animate([
          { transform: "translateY(6px)", opacity: 0 },
          { transform: "translateY(0)", opacity: 1 }
        ], { duration: 300, easing: "cubic-bezier(0.16, 1, 0.3, 1)" });
      }
      showToast("Fresh industry scenario curated", "success");
    }, 450);
  };

  if (generateBtn) generateBtn.addEventListener("click", triggerGenerate);
  if (generateSecondaryBtn) generateSecondaryBtn.addEventListener("click", triggerGenerate);

  if (saveBtn) {
    saveBtn.addEventListener("click", function() {
      const current = getCurrentBrief();
      const saved = getSavedProjects();
      
      const exists = saved.some(p => p.id === current.id || p.title === current.title);
      if (exists) {
        showToast("Project is already saved in index", "info");
        return;
      }

      const newSave = {
        ...current,
        uniqueId: current.id + "-" + Date.now(),
        dateSaved: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })
      };

      saved.push(newSave);
      saveProjects(saved);
      showToast("Registered file into localStorage storage unit", "success");
    });
  }
}

// Notification Toast Widget Creator
function showToast(message, type = "success") {
  const toast = document.createElement("div");
  toast.className = `fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-xl border shadow-xl text-xs font-semibold tracking-wide transition-all duration-300 transform translate-y-12 opacity-0`;
  
  if (type === "success") {
    toast.className += ` bg-white border-green-100 text-green-800`;
    toast.innerHTML = `<span class="material-symbols-outlined text-green-600 text-[18px]">check_circle</span> ${message}`;
  } else if (type === "info") {
    toast.className += ` bg-white border-indigo-100 text-indigo-800`;
    toast.innerHTML = `<span class="material-symbols-outlined text-indigo-600 text-[18px]">info</span> ${message}`;
  } else {
    toast.className += ` bg-white border-slate-100 text-slate-800`;
    toast.innerHTML = `<span class="material-symbols-outlined text-[18px]">notifications</span> ${message}`;
  }

  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.classList.remove("translate-y-12", "opacity-0");
  }, 15);

  setTimeout(() => {
    toast.classList.add("translate-y-4", "opacity-0");
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

// Search and Render Code for My Projects Page (saved.html)
function initSavedProjectsPage() {
  const container = document.getElementById("projects-container");
  const emptyState = document.getElementById("empty-state");
  const searchInput = document.getElementById("saved-search");

  function renderList(filterTerm = "") {
    const list = getSavedProjects();
    const filteredList = list.filter(proj => {
      const searchStr = (proj.title + " " + proj.client + " " + proj.industry + " " + proj.category).toLowerCase();
      return searchStr.includes(filterTerm.toLowerCase());
    });

    if (list.length === 0) {
      if (container) container.classList.add("hidden");
      if (emptyState) emptyState.classList.remove("hidden");
      return;
    }

    if (emptyState) emptyState.classList.add("hidden");
    if (container) {
      container.classList.remove("hidden");
      container.innerHTML = "";
    }

    if (filteredList.length === 0) {
      if (container) {
        container.innerHTML = `
          <div class="col-span-12 py-12 text-center text-slate-400 font-medium text-sm">
            No matching design files found in this workspace.
          </div>
        `;
      }
      return;
    }

    filteredList.forEach(proj => {
      let sectorIcon = "campaign";
      let iconColorClass = "bg-indigo-50 text-indigo-600";
      
      if (proj.category === "Branding") {
        sectorIcon = "auto_awesome";
        iconColorClass = "bg-indigo-50 text-indigo-600";
      } else if (proj.category === "Web Design") {
        sectorIcon = "web";
        iconColorClass = "bg-[#EAE7E0]/60 text-slate-800";
      } else if (proj.category === "Marketing") {
        sectorIcon = "campaign";
        iconColorClass = "bg-[#EAE7E0]/60 text-slate-800";
      }

      const card = document.createElement("div");
      card.className = "group bg-white border border-slate-200/80 rounded p-5 hover:border-[#1A1A1A] transition-all duration-300 flex flex-col h-full shadow-sm";
      card.id = `project-card-${proj.uniqueId}`;
      card.innerHTML = `
        <div class="flex justify-between items-start mb-4">
          <div class="w-9 h-9 rounded bg-[#EAE7E0] flex items-center justify-center text-slate-805">
            <span class="material-symbols-outlined text-[18px]">${sectorIcon}</span>
          </div>
          <div>
            <span class="bg-[#EAE7E0] text-slate-805 border border-slate-200/60 px-2.5 py-1 rounded text-[9px] font-bold uppercase tracking-widest">${proj.category}</span>
          </div>
        </div>
        <div class="flex-grow">
          <h3 class="font-serif font-black italic text-lg text-slate-900 mb-1 group-hover:text-indigo-600 transition-colors">${proj.title}</h3>
          <p class="text-slate-400 text-xs mb-4">Client: ${proj.client}</p>
          <div class="space-y-2 border-t border-slate-200/50 pt-4">
            <div class="flex justify-between items-center text-xs">
              <span class="text-slate-400 font-medium">Industry</span>
              <span class="text-slate-800 font-bold">${proj.industry}</span>
            </div>
            <div class="flex justify-between items-center text-xs">
              <span class="text-slate-400 font-medium">Created</span>
              <span class="text-slate-800 font-bold">${proj.dateSaved || 'Oct 24, 2026'}</span>
            </div>
          </div>
        </div>
        <div class="flex gap-2 mt-4 pt-4 border-t border-slate-200/50">
          <button class="flex-grow bg-[#1A1A1A] text-white hover:bg-slate-700 py-2 rounded text-[10px] font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95" 
                  onclick="viewSavedBrief('${proj.id}')">
            <span class="material-symbols-outlined text-[15px]">visibility</span> View Workspace
          </button>
          <button class="p-2 border border-slate-200 text-rose-500 hover:bg-rose-50 rounded transition-all cursor-pointer flex items-center justify-center" 
                  title="Extract Project" 
                  onclick="deleteSavedBrief('${proj.uniqueId}')">
            <span class="material-symbols-outlined text-[16px]">delete</span>
          </button>
        </div>
      `;
      container.appendChild(card);
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", function(e) {
      renderList(e.target.value);
    });
  }

  window.viewSavedBrief = function(originalId) {
    const brief = BRIEFS_POOL.find(b => b.id === originalId);
    if (brief) {
      saveCurrentBrief(brief);
      window.location.href = "generator.html";
    }
  };

  window.deleteSavedBrief = function(uniqueId) {
    const card = document.getElementById(`project-card-${uniqueId}`);
    if (card) {
      card.style.transform = "scale(0.95)";
      card.style.opacity = "0";
      
      setTimeout(() => {
        let saved = getSavedProjects();
        saved = saved.filter(p => p.uniqueId !== uniqueId);
        saveProjects(saved);
        renderList(searchInput ? searchInput.value : "");
        showToast("Extracted dynamic document from safe-storage", "info");
      }, 300);
    }
  };

  renderList();
}

// Global Redirector for CTAs
function setupGlobalNavigation() {
  const directCTAButtons = document.querySelectorAll("[data-navigate]");
  directCTAButtons.forEach(btn => {
    btn.addEventListener("click", function() {
      const dest = btn.getAttribute("data-navigate");
      if (dest) {
        window.location.href = dest;
      }
    });
  });
}

// Router Event Listeners to bootstrap active pages
document.addEventListener("DOMContentLoaded", function() {
  setupGlobalNavigation();

  const activePath = window.location.pathname;

  if (activePath.includes("generator.html")) {
    initGeneratorPage();
  } else if (activePath.includes("saved.html")) {
    initSavedProjectsPage();
  }

  // Pre-populate some projects for the user when they boot the application first time, to make the site look high fidelity!
  if (!localStorage.getItem("init_run")) {
    const defaultSaved = [
      {
        ...BRIEFS_POOL[0],
        uniqueId: "lum-aesthetic-saved",
        dateSaved: "Oct 24, 2026"
      },
      {
        ...BRIEFS_POOL[1],
        uniqueId: "vor-fintech-saved",
        dateSaved: "Oct 12, 2026"
      },
      {
        ...BRIEFS_POOL[2],
        uniqueId: "eco-pulse-saved",
        dateSaved: "Sep 28, 2026"
      }
    ];
    saveProjects(defaultSaved);
    localStorage.setItem("init_run", "true");
    
    if (activePath.includes("saved.html")) {
      initSavedProjectsPage();
    }
  }
});
