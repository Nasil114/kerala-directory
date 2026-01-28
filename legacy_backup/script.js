const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");
const subTabs = document.querySelectorAll(".subtab");
const subPanels = document.querySelectorAll(".subpanel");

const setActive = (items, target) => {
  items.forEach((item) => item.classList.toggle("active", item === target));
};

const showPanel = (panelName) => {
  panels.forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.panel === panelName);
  });
};

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    setActive(tabs, tab);
    showPanel(tab.dataset.tab);
  });
});

subTabs.forEach((subTab) => {
  subTab.addEventListener("click", () => {
    if (!subTab.dataset.subtab) {
      return;
    }
    setActive(subTabs, subTab);
    subPanels.forEach((panel) => {
      panel.classList.toggle("active", panel.dataset.subpanel === subTab.dataset.subtab);
    });
  });
});

const wrapSectionBlocks = () => {
  document.querySelectorAll(".section-title").forEach((title) => {
    const next = title.nextElementSibling;
    if (!next || !next.classList.contains("data-block")) {
      return;
    }
    if (title.parentElement && title.parentElement.tagName === "DETAILS") {
      return;
    }
    const details = document.createElement("details");
    details.className = "accordion";
    details.open = false;
    const summary = document.createElement("summary");
    summary.textContent = title.textContent;
    details.appendChild(summary);
    details.appendChild(next);
    title.replaceWith(details);
  });
};

const convertDistrictBlocks = () => {
  const districts = [
    "തിരുവനന്തപുരം",
    "കൊല്ലം",
    "പത്തനംതിട്ട",
    "ആലപ്പുഴ",
    "കോട്ടയം",
    "ഇടുക്കി",
    "എറണാകുളം",
    "തൃശ്ശൂർ",
    "പാലക്കാട്",
    "മലപ്പുറം",
    "കോഴിക്കോട്",
    "വയനാട്",
    "കണ്ണൂർ",
    "കാസർഗോഡ്",
  ];

  const districtSet = new Set(districts);

  document.querySelectorAll(".data-block").forEach((block) => {
    const text = block.textContent || "";
    const lines = text.split(/\n+/).map((line) => line.trim()).filter(Boolean);
    let foundDistrict = false;
    const sections = [];
    let current = null;

    const getDistrictName = (line) => {
      const cleaned = line.replace(/^\d+\.\s*/, "").trim();
      const nameOnly = cleaned.replace(/:.*$/, "").trim();
      return districtSet.has(nameOnly) ? nameOnly : null;
    };

    lines.forEach((line) => {
      const districtFromLine = getDistrictName(line);
      if (districtFromLine) {
        foundDistrict = true;
        current = sections.find((s) => s.name === districtFromLine);
        if (!current) {
          current = { name: districtFromLine, items: [] };
          sections.push(current);
        }
        const colonIndex = line.indexOf(":");
        if (colonIndex !== -1) {
          const inlineItem = line.slice(colonIndex + 1).trim();
          if (inlineItem) current.items.push(inlineItem);
        }
        return;
      }

      if (!current) {
        return;
      }

      const item = line.replace(/^[●○\-]\s*/, "").trim();
      if (item) {
        current.items.push(item);
      }
    });

    if (!foundDistrict || sections.length === 0) {
      return;
    }

    const wrapper = document.createElement("div");
    wrapper.className = "district-block";

    sections.forEach((section) => {
      const sectionEl = document.createElement("div");
      sectionEl.className = "district-section";

      const title = document.createElement("h5");
      title.className = "district-title";
      title.textContent = section.name;

      const list = document.createElement("ul");
      list.className = "district-list";
      section.items.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
      });

      sectionEl.appendChild(title);
      sectionEl.appendChild(list);
      wrapper.appendChild(sectionEl);
    });

    block.replaceWith(wrapper);
  });
};

const setupSearch = () => {
  const input = document.querySelector('input[type="search"]');
  if (!input) return;
  input.addEventListener("input", () => {
    const query = input.value.trim().toLowerCase();
    const blocks = document.querySelectorAll(
      ".data-block, .panel-list li, .link-list li, .district-list li"
    );
    blocks.forEach((block) => {
      const text = block.textContent.toLowerCase();
      const matches = !query || text.includes(query);
      block.style.display = matches ? "" : "none";
      const parentDetails = block.closest("details.accordion");
      if (parentDetails) {
        parentDetails.style.display = matches ? "" : "none";
        if (matches && query) parentDetails.open = true;
      }
    });
  });
};

const injectBreadcrumbs = () => {
  if (document.title === "പൊതു സേവന പോർട്ടൽ") return;
  const header = document.querySelector(".site-header");
  if (!header) return;
  const crumbs = document.createElement("nav");
  crumbs.className = "breadcrumbs";
  crumbs.innerHTML = '<a href="index.html">ഹോം</a> <span>›</span> <span>' + document.title + "</span>";
  header.insertAdjacentElement("afterend", crumbs);
};

const injectBackToTop = () => {
  const btn = document.createElement("button");
  btn.className = "back-to-top";
  btn.type = "button";
  btn.textContent = "മുകളിൽ";
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  document.body.appendChild(btn);
  window.addEventListener("scroll", () => {
    btn.classList.toggle("visible", window.scrollY > 500);
  });
};

wrapSectionBlocks();
convertDistrictBlocks();
setupSearch();
injectBreadcrumbs();
injectBackToTop();
