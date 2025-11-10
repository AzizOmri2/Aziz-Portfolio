// ===== Navigation Toggle =====
const navToggle = document.getElementById("navToggle");
const navList = document.getElementById("navList");

if (navToggle && navList) {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true" || false;
    navToggle.setAttribute("aria-expanded", !expanded);
    navList.classList.toggle("show");
  });
}

// ===== Year Auto Update =====
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ===== About Tabs =====
const expBtn = document.getElementById("expBtn");
const eduBtn = document.getElementById("eduBtn");
const experienceSection = document.getElementById("experienceSection");
const educationSection = document.getElementById("educationSection");

if (expBtn && eduBtn && experienceSection && educationSection) {
  expBtn.addEventListener("click", () => {
    expBtn.classList.add("active");
    eduBtn.classList.remove("active");
    experienceSection.classList.add("show");
    educationSection.classList.remove("show");
  });

  eduBtn.addEventListener("click", () => {
    eduBtn.classList.add("active");
    expBtn.classList.remove("active");
    educationSection.classList.add("show");
    experienceSection.classList.remove("show");
  });
}

// ===== Modal Elements =====
const overviewBtns = document.querySelectorAll(".overview-btn");
const modalBackdrop = document.getElementById("modalBackdrop");
const modalClose = document.getElementById("modalClose");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalKeyTitle = document.getElementById("modalKeyTitle");
const modalList = document.getElementById("modalList");
const modalSkills = document.getElementById("modalSkills");


// ===== Project Data (EN + FR) =====
const projectData = {
  hrprojectflow: {
    en: {
      title: "HR Project Workflow",
      desc: "Developed a smart and scalable HR and project management platform integrating AI modules for automation and intelligent decision support.",
      keyTitle: "Overview & Key Achievements",
      list: [
        "Designed and developed a scalable web architecture enabling smooth data management.",
        "Integrated AI-powered CV parsing, data extraction, and automatic profile generation.",
        "Implemented intelligent job–candidate matching to enhance recruitment efficiency.",
        "Automated integration and deployment with Jenkins CI/CD pipeline.",
        "Deployed containerized services ensuring consistency across environments."
      ],
      skills: "Technologies: Ruby On Rails, Angular, PostgreSQL, Calendar API, Mistral AI, Jenkins, Sonarqube, Nexus, Docker, Kubernetes, Prometheus, Grafana"
    },
    fr: {
      title: "HR Project Workflow",
      desc: "Développement d’une plateforme RH et de gestion de projets intelligente et évolutive intégrant des modules d’IA pour l’automatisation et l’aide à la décision.",
      keyTitle: "Aperçu général & Points forts",
      list: [
        "Conception et développement d’une architecture web évolutive pour une gestion fluide des données.",
        "Intégration d’une IA pour l’analyse et l’extraction de CV avec génération automatique de profils.",
        "Mise en place d’un système intelligent de correspondance emploi–candidat.",
        "Automatisation du pipeline CI/CD avec Jenkins.",
        "Déploiement de services conteneurisés garantissant la cohérence des environnements."
      ],
      skills: "Technologies : Ruby On Rails, Angular, PostgreSQL, Calendar API, Mistral AI, Jenkins, Sonarqube, Nexus, Docker, Kubernetes, Prometheus, Grafana"
    },
    images: ["assets/images/projects/hrprojectworkflow/web_home_page_hrprojectworkflow.png"]
  },

  pmwebapp: {
    en: {
      title: "Project Management Web App",
      desc: "A collaborative tool for project and task tracking with user management, deadlines, and performance analytics.",
      keyTitle: "Overview & Key Achievements",
      list: [
        "User authentication & role-based access.",
        "Task creation, deadlines, and progress tracking.",
        "Analytics dashboard with project insights."
      ],
      skills: "Technologies: Spring Boot, Angular, MySQL, Jenkins, Sonarqube, Nexus, Docker, Docker Compose"
    },
    fr: {
      title: "Application Web de Gestion de Projets",
      desc: "Outil collaboratif pour la gestion des projets et des tâches, incluant la gestion des utilisateurs, des échéances et des analyses de performance.",
      keyTitle: "Aperçu général & Points forts",
      list: [
        "Authentification des utilisateurs et gestion des rôles.",
        "Création de tâches, gestion des délais et suivi d’avancement.",
        "Tableau de bord analytique pour le suivi global des projets."
      ],
      skills: "Technologies : Spring Boot, Angular, MySQL, Jenkins, Sonarqube, Nexus, Docker, Docker Compose"
    },
    images: ["assets/images/projects/pmwebapp/web_home_page_pmwebapp.png"]
  },

  paidleave: {
    en: {
      title: "Paid Leave Management System",
      desc: "Web application designed to manage and automate paid leave requests, approvals, and employee records.",
      keyTitle: "Overview & Key Achievements",
      list: [
        "Conducted design and analysis for the leave management system.",
        "Developed the backend using Ruby on Rails and tested APIs with Postman.",
        "Built the frontend with Angular and integrated RESTful APIs."
      ],
      skills: "Technologies: Ruby, Ruby on Rails, Angular, SQLite, Postman"
    },
    fr: {
      title: "Système de Gestion des Congés Payés",
      desc: "Application web destinée à automatiser la gestion des demandes de congés, des validations et des dossiers employés.",
      keyTitle: "Aperçu général & Points forts",
      list: [
        "Conception et analyse du système de gestion des congés.",
        "Développement du backend avec Ruby on Rails et tests API via Postman.",
        "Développement du frontend avec Angular et intégration des API RESTful."
      ],
      skills: "Technologies : Ruby, Ruby on Rails, Angular, SQLite, Postman"
    },
    images: ["assets/images/projects/paidleave/dashboard_web_page.png"]
  },

  esprithub: {
    en: {
      title: "Esprit Hub Cloud Infrastructure",
      desc: "Deployment of a full-stack web application on a scalable Cloud Infrastructure built with OpenStack.",
      keyTitle: "Overview & Key Achievements",
      list: [
        "Designed and implemented a cloud infrastructure using OpenStack services.",
        "Configured controller, compute, and storage nodes for scalability.",
        "Deployed a full-stack app with Docker and Kubernetes orchestration."
      ],
      skills: "Technologies: OpenStack, Nova, Neutron, Docker, Kubernetes, Ansible, Prometheus, Grafana, Azure"
    },
    fr: {
      title: "Infrastructure Cloud Esprit Hub",
      desc: "Déploiement d’une application web full-stack sur une infrastructure cloud évolutive construite avec OpenStack.",
      keyTitle: "Aperçu général & Points forts",
      list: [
        "Conception et implémentation d’une infrastructure cloud basée sur OpenStack.",
        "Configuration des nœuds de contrôle, de calcul et de stockage pour la scalabilité.",
        "Déploiement d’une application full-stack avec Docker et Kubernetes."
      ],
      skills: "Technologies : OpenStack, Nova, Neutron, Docker, Kubernetes, Ansible, Prometheus, Grafana, Azure"
    },
    images: ["assets/images/projects/esprithub/esprithub_dashboard.png"]
  },

  energybox: {
    en: {
      title: "Energy Box",
      desc: "Innovative multi-platform application (Web, Desktop, and Mobile) designed to manage and visualize energy consumption in real time.",
      keyTitle: "Overview & Key Achievements",
      list: [
        "Developed the web app using Symfony with responsive UI.",
        "Built the desktop version with JavaFX and XML.",
        "Created the mobile app with Java and MySQL for synchronization.",
        "Followed Scrum methodology during development."
      ],
      skills: "Technologies: Symfony, MySQL, HTML, CSS, JavaScript, Ajax, Dompdf, Twilio API, Calendar API, JavaFX, XML, Java, Scrum"
    },
    fr: {
      title: "Energy Box",
      desc: "Application multiplateforme innovante (Web, Bureau et Mobile) pour la visualisation et la gestion en temps réel de la consommation d’énergie.",
      keyTitle: "Aperçu général & Points forts",
      list: [
        "Développement de l’application web avec Symfony et une interface réactive.",
        "Création de la version bureau avec JavaFX et XML.",
        "Développement de la version mobile avec Java et MySQL pour la synchronisation.",
        "Application de la méthodologie Scrum tout au long du projet."
      ],
      skills: "Technologies : Symfony, MySQL, HTML, CSS, JavaScript, Ajax, Dompdf, Twilio API, Calendar API, JavaFX, XML, Java, Scrum"
    },
    images: ["assets/images/projects/energybox/home_page_web_eb.png"]
  },

  oneurban: {
    en: {
      title: "One Urban",
      desc: "Comprehensive web platform designed to enhance urban living by centralizing a wide range of city services, events, and resources within a unified digital ecosystem.",
      keyTitle: "Overview & Key Achievements",
      list: [
        "Developed a full-featured web app using Symfony for managing city services such as transport, healthcare, tourism, and leisure.",
        "Integrated features like SMS alerts, data visualization, QR code generation, PDF export, calendar, and rating system.",
        "Implemented pagination and optimized data handling for a seamless user experience.",
        "Applied modular architecture and clean coding principles."
      ],
      skills: "Technologies: Symfony, MySQL, HTML, CSS, JavaScript, Ajax, Chart.js, Dompdf, Twilio API"
    },
    fr: {
      title: "One Urban",
      desc: "Plateforme web complète visant à améliorer la vie urbaine en centralisant une large gamme de services, d’événements et de ressources dans un écosystème numérique unifié.",
      keyTitle: "Aperçu général & Points forts",
      list: [
        "Développement d’une application web complète avec Symfony pour la gestion des services urbains : transport, santé, tourisme et loisirs.",
        "Intégration de fonctionnalités avancées telles que les alertes SMS, les statistiques, les QR codes, les exports PDF, le calendrier et le système de notation.",
        "Mise en place de la pagination et optimisation du traitement des données pour une navigation fluide.",
        "Architecture modulaire et code propre pour une maintenance facilitée."
      ],
      skills: "Technologies : Symfony, MySQL, HTML, CSS, JavaScript, Ajax, Chart.js, Dompdf, Twilio API"
    },
    images: ["assets/images/projects/oneurban/home_page_oneurban.png"]
  }
};


// ===== Modal Open =====
if (overviewBtns.length && modalBackdrop) {
  overviewBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const proj = btn.dataset.proj;
      const lang = localStorage.getItem("lang") || "en";
      const data = projectData[proj]?.[lang] || projectData[proj]?.en;
      if (!data) return;

      modalTitle.textContent = data.title;
      modalDesc.textContent = data.desc;
      modalKeyTitle.textContent = data.keyTitle;
      modalList.innerHTML = "";
      data.list.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        modalList.appendChild(li);
      });
      modalSkills.textContent = data.skills;

      const existingImg = document.getElementById("modalImages");
      if (existingImg) existingImg.remove();
      if (projectData[proj].images) {
        const imgContainer = document.createElement("div");
        imgContainer.id = "modalImages";
        imgContainer.className = "modal-images";
        projectData[proj].images.forEach(src => {
          const img = document.createElement("img");
          img.src = src;
          img.alt = `${data.title} preview`;
          imgContainer.appendChild(img);
        });
        modalDesc.insertAdjacentElement("afterend", imgContainer);
      }

      modalBackdrop.classList.add("show");
      modalBackdrop.setAttribute("aria-hidden", "false");
    });
  });

  modalClose?.addEventListener("click", () => {
    modalBackdrop.classList.remove("show");
    modalBackdrop.setAttribute("aria-hidden", "true");
  });

  modalBackdrop.addEventListener("click", e => {
    if (e.target === modalBackdrop) {
      modalBackdrop.classList.remove("show");
      modalBackdrop.setAttribute("aria-hidden", "true");
    }
  });
}

// ===== Language System (Using translations.js) =====
function loadTranslations(lang) {
  const data = translations[lang];
  if (!data) return;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (data[key]) el.textContent = data[key];
  });

  document.title = data.pageTitle || document.title;
  localStorage.setItem("lang", lang);

  if (langToggle) langToggle.textContent = lang === "en" ? "FR" : "EN";
}

// ===== Populate Soft Skills Dynamically =====
function populateSoftSkills(lang) {
  const softSkillsContainer = document.querySelector(".skills-category:last-child .skills-list");
  if (!softSkillsContainer) return;

  // Clear current skills
  softSkillsContainer.innerHTML = "";

  // Add translated skills
  translations[lang].softSkills.forEach(skill => {
    const span = document.createElement("span");
    span.textContent = skill;
    softSkillsContainer.appendChild(span);
  });
}




const langToggle = document.getElementById("langToggle");
const savedLang = localStorage.getItem("lang") || "en";
loadTranslations(savedLang);

// Call after loading translations
populateSoftSkills(savedLang);

if (langToggle) {
  langToggle.addEventListener("click", () => {
    const currentLang = localStorage.getItem("lang") || "en";
    const newLang = currentLang === "en" ? "fr" : "en";
    loadTranslations(newLang);
    populateSoftSkills(newLang); // ✅ Add this line
  });
}