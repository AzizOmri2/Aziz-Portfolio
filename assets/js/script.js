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

// ===== Smooth Scroll + Active Link =====
const navLinks = document.querySelectorAll("#navList a");
const sections = document.querySelectorAll("section");

navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;

    // Smooth scroll
    target.scrollIntoView({ behavior: "smooth" });

    // Immediately update active class
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");

    // Close mobile menu if open
    navList.classList.remove("show");
  });
});

// Update active link on scroll
window.addEventListener("scroll", () => {
  let scrollPos = window.scrollY + window.innerHeight / 3; // offset for earlier highlight
  sections.forEach(section => {
    if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${section.id}`) {
          link.classList.add("active");
        }
      });
    }
  });
});


// ===== Section Fade In =====
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.section');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // animate once
      }
    });
  }, { threshold: 0.2 }); // trigger when 20% visible

  sections.forEach(section => observer.observe(section));
});



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


// ===== Modal Toast Under Deployment ==== 
document.addEventListener("DOMContentLoaded", () => {
  const liveDemoBtns = document.querySelectorAll('.live-demo-btn');
  const modalToast = document.getElementById('modalToast');

  liveDemoBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault(); // prevent link redirection

      // Show the toast
      modalToast.classList.add('show');

      // Hide it after 2 seconds
      setTimeout(() => {
        modalToast.classList.remove('show');
      }, 2000);
    });
  });
});


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
  tastytounsi: {
    en: {
      title: "Tasty Tounsi",
      desc: "A modern Tunisian food discovery and ordering platform featuring an intuitive interface, dynamic menu management, and secure online payments.",
      keyTitle: "Overview & Key Achievements",
      list: [
        "Designed a responsive and user-friendly interface for browsing traditional Tunisian dishes.",
        "Implemented a dynamic admin dashboard for managing food items, categories, and orders.",
        "Added online payment integration using Stripe for secure and seamless transactions.",
        "Developed a RESTful API with NodeJS/ExpressJS to handle client–server communication.",
        "Optimized database structure with MongoDB to support scalability and fast data retrieval."
      ],
      skills: "Technologies : MongoDB, ReactJS, NodeJS, ExpressJS, Stripe API"
    },
    fr: {
      title: "Tasty Tounsi",
      desc: "Une plateforme moderne pour découvrir et commander des plats tunisiens, avec une interface intuitive, une gestion dynamique du menu et des paiements en ligne sécurisés.",
      keyTitle: "Aperçu général & Points forts",
      list: [
        "Conception d’une interface responsive et intuitive pour explorer les plats tunisiens.",
        "Développement d’un tableau de bord admin pour gérer les plats, catégories et commandes.",
        "Intégration des paiements en ligne via Stripe de manière fluide et sécurisée.",
        "Création d’une API REST avec NodeJS/ExpressJS assurant la communication client-serveur.",
        "Optimisation de la structure de base de données avec MongoDB pour plus de performance et d’évolutivité."
      ],
      skills: "Technologies : MongoDB, ReactJS, NodeJS, ExpressJS, Stripe API"
    },
    images: [
      { 
        src: "assets/images/projects/tastytounsi/User - Home Page.PNG", 
        caption: "Tasty Tounsi - Home Page" 
      },
      { 
        src: "assets/images/projects/tastytounsi/User - Login PopUp.PNG", 
        caption: "Tasty Tounsi - Login" 
      },
      { 
        src: "assets/images/projects/tastytounsi/User - Explore Menu.PNG", 
        caption: "Tasty Tounsi - Explore Menu" 
      },
      { 
        src: "assets/images/projects/tastytounsi/User - Add To Cart.PNG", 
        caption: "Tasty Tounsi - Add To Cart" 
      },
      { 
        src: "assets/images/projects/tastytounsi/User - Proceed To Checkout.PNG", 
        caption: "Tasty Tounsi - Proceed To Checkout" 
      },
      { 
        src: "assets/images/projects/tastytounsi/User - Proceed To Payment.PNG", 
        caption: "Tasty Tounsi - Proceed To Payment" 
      },
      { 
        src: "assets/images/projects/tastytounsi/User - 404 Not Found.PNG", 
        caption: "Tasty Tounsi - 404 Not Found" 
      },
      { 
        src: "assets/images/projects/tastytounsi/User - Orders List.PNG", 
        caption: "Tasty Tounsi - Orders List" 
      },

      { 
        src: "assets/images/projects/tastytounsi/loginAdmin.PNG", 
        caption: "Admin Panel - Login" 
      },
      { 
        src: "assets/images/projects/tastytounsi/admin - Dashboard.PNG", 
        caption: "Admin Panel – Dashboard" 
      },
      { 
        src: "assets/images/projects/tastytounsi/admin - Add Food Night Mode.png", 
        caption: "Admin Panel – Add Food" 
      },
      { 
        src: "assets/images/projects/tastytounsi/admin - List Food Night Mode.PNG", 
        caption: "Admin Panel - Food's List" 
      },
      { 
        src: "assets/images/projects/tastytounsi/admin - Details Food Night Mode.PNG", 
        caption: "Admin Panel – Food Details" 
      },
      { 
        src: "assets/images/projects/tastytounsi/admin - Orders List.PNG", 
        caption: "Admin Panel - Orders List" 
      },
      { 
        src: "assets/images/projects/tastytounsi/admin - Settings.PNG", 
        caption: "Admin Panel - Settings" 
      },
    ]
  },

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
    images: [
      { 
        src: "assets/images/projects/hrprojectworkflow/HRProjectWorkflow - Home Page.PNG", 
        caption: "HR Project Workflow - Home Page" 
      },
      { 
        src: "assets/images/projects/hrprojectworkflow/Candidate - View Job Offers.PNG", 
        caption: "Candidate - View Job Offers" 
      },
      { 
        src: "assets/images/projects/hrprojectworkflow/Candidate - View Job Offer Details.PNG", 
        caption: "Candidate - View Job Offer Details" 
      },
      { 
        src: "assets/images/projects/hrprojectworkflow/Candidate - Add Application.PNG", 
        caption: "Candidate - Add Application" 
      },
      { 
        src: "assets/images/projects/hrprojectworkflow/Candidate - View My Applications.PNG", 
        caption: "Candidate - View My Applications" 
      },
      { 
        src: "assets/images/projects/hrprojectworkflow/Candidate - Generate Profile.PNG", 
        caption: "Candidate - Generate Profile" 
      },
      { 
        src: "assets/images/projects/hrprojectworkflow/Candidate - Loading Generate Profile.PNG", 
        caption: "Candidate - Loading Generate Profile" 
      },
      { 
        src: "assets/images/projects/hrprojectworkflow/Candidate - Profile Generated.PNG", 
        caption: "Candidate - Profile Generated" 
      },
      { 
        src: "assets/images/projects/hrprojectworkflow/Admin Panel - Welcome.PNG", 
        caption: "Admin Panel - Welcome" 
      },
      { 
        src: "assets/images/projects/hrprojectworkflow/Admin Panel - Account Management.PNG", 
        caption: "Admin Panel - Account Management" 
      },
      { 
        src: "assets/images/projects/hrprojectworkflow/Admin Panel - Add User.PNG", 
        caption: "Admin Panel - Add User" 
      },
      { 
        src: "assets/images/projects/hrprojectworkflow/Admin Panel - Add Job Offer.PNG", 
        caption: "Admin Panel - Add Job Offer" 
      },
      { 
        src: "assets/images/projects/hrprojectworkflow/Admin Panel - View Job Offers.PNG", 
        caption: "Admin Panel - View Job Offers" 
      },
      { 
        src: "assets/images/projects/hrprojectworkflow/HR Panel - Welcome.PNG", 
        caption: "HR Panel - Welcome" 
      },
      { 
        src: "assets/images/projects/hrprojectworkflow/HR Panel - View Interviews With Calendar.PNG", 
        caption: "HR Panel - View Interviews With Calendar" 
      },
      { 
        src: "assets/images/projects/hrprojectworkflow/HR Panel - Show Profiles.PNG", 
        caption: "HR Panel - Show Profiles" 
      },
      { 
        src: "assets/images/projects/hrprojectworkflow/HR Panel - Candidate's Evaluation.PNG", 
        caption: "HR Panel - Candidate's Evaluation" 
      },
      
    ]
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


function showImage(index, images) {
  const img = images[index];
  carouselImage.src = img.src;
  carouselCaption.textContent = img.caption || '';
}

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

      // Carousel images
      const images = projectData[proj].images.map(i => 
        typeof i === "string" ? { src: i, caption: "" } : i
      );

      currentImageIndex = 0;
      showImage(currentImageIndex, images);

      // Prev/Next button handlers
      carouselPrev.onclick = () => {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        showImage(currentImageIndex, images);
      };

      carouselNext.onclick = () => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        showImage(currentImageIndex, images);
      };

      modalBackdrop.classList.add("show");
      modalBackdrop.setAttribute("aria-hidden", "false");
      document.body.classList.add('no-scroll');
    });
  });

  modalClose?.addEventListener("click", () => {
    modalBackdrop.classList.remove("show");
    modalBackdrop.setAttribute("aria-hidden", "true");
    document.body.classList.remove('no-scroll');
  });

  modalBackdrop.addEventListener("click", e => {
    if (e.target === modalBackdrop) {
      modalBackdrop.classList.remove("show");
      modalBackdrop.setAttribute("aria-hidden", "true");
      document.body.classList.remove('no-scroll');
    }
  });

  // ===== Close modal / lightbox with ESC key =====
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      // Check if a lightbox exists
      const lightbox = document.querySelector("body > div[style*='z-index: 3000']");
      if (lightbox) {
        lightbox.remove(); // Close lightbox first
      } else if (modalBackdrop.classList.contains("show")) {
        modalBackdrop.classList.remove("show"); // Close modal if no lightbox
        modalBackdrop.setAttribute("aria-hidden", "true");
      }
      document.body.classList.remove('no-scroll');
    }
  });
}


// ===== Certification Image Lightbox =====
const certImages = document.querySelectorAll(".cert-img");

certImages.forEach(img => {
  img.style.cursor = "pointer"; // indicate clickable
  img.addEventListener("click", () => {
    const lightbox = document.createElement("div");
    lightbox.style.position = "fixed";
    lightbox.style.top = 0;
    lightbox.style.left = 0;
    lightbox.style.width = "100%";
    lightbox.style.height = "100%";
    lightbox.style.background = "rgba(0,0,0,0.85)";
    lightbox.style.display = "flex";
    lightbox.style.alignItems = "center";
    lightbox.style.justifyContent = "center";
    lightbox.style.zIndex = 3000;

    const lbImg = document.createElement("img");
    lbImg.src = img.src;
    lbImg.alt = img.alt;
    lbImg.style.maxWidth = "90%";
    lbImg.style.maxHeight = "90%";
    lbImg.style.borderRadius = "12px";
    lbImg.style.boxShadow = "0 0 20px rgba(30,144,255,0.5)";

    lightbox.appendChild(lbImg);

    // Click anywhere to close
    lightbox.addEventListener("click", () => lightbox.remove());

    document.body.appendChild(lightbox);
  });
});



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


// ===== CV Download Link =====
const downloadBtn = document.getElementById("downloadCV");
const contactCVBtn = document.getElementById("contactCVBtn");

function updateCVLink(lang) {
  if (!downloadBtn) return;

  if (lang === "fr") {
    downloadBtn.href = "assets/resume-fr.pdf";
  } else {
    downloadBtn.href = "assets/resume-en.pdf";
  }
}


function updateCVLinkContact(lang) {
  if (!contactCVBtn) return;

  if (lang === "fr") {
    contactCVBtn.href = "assets/resume-fr.pdf";
  } else {
    contactCVBtn.href = "assets/resume-en.pdf";
  }
}




const langToggle = document.getElementById("langToggle");
const savedLang = localStorage.getItem("lang") || "en";
updateCVLink(savedLang);
updateCVLinkContact(savedLang);
loadTranslations(savedLang);

// Call after loading translations
populateSoftSkills(savedLang);

if (langToggle) {
  langToggle.addEventListener("click", () => {
    const currentLang = localStorage.getItem("lang") || "en";
    const newLang = currentLang === "en" ? "fr" : "en";
    loadTranslations(newLang);
    populateSoftSkills(newLang);
    updateCVLink(newLang);
    updateCVLinkContact(newLang);
  });
}


// ===== Back to Top Button =====
const backToTopBtn = document.getElementById("backToTop");

// Show button after scrolling down 300px
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

// Scroll smoothly to top when clicked
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});



// ===== Animation for sections 

document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.fade-in-section');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // animate only once
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(section => observer.observe(section));
});


// ===== LEAFLET MAP =====

// Initialize map
const map = L.map('map', {
  center: [36.901788, 10.185660], // ESPRIT, Ariana
  zoom: 18,
  zoomControl: true
});

// Tile layers
const darkTiles = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="https://carto.com/">CARTO</a> contributors',
  maxZoom: 20,  // allow zoom up to 20
  minZoom: 0
});

const lightTiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
  maxZoom: 20,  // allow zoom up to 20
  minZoom: 0
});

// Add initial dark tiles
darkTiles.addTo(map);

// Custom Glowing Marker
const glowingMarker = L.divIcon({ className: 'glow-marker' });

const marker = L.marker([36.901788, 10.185660], { icon: glowingMarker })
  .addTo(map)
  .bindPopup("Ariana Soghra, Tunisia 🌍")
  .openPopup();

// Responsive behavior
function recenterMap() {
  map.invalidateSize();
  map.setView([36.901788, 10.185660], window.innerWidth < 768 ? 12 : 13);
}
window.addEventListener('resize', recenterMap);
window.addEventListener('load', recenterMap);

// ===== Map Light/Dark Mode Toggle Button =====
let darkMode = true;

const MapModeControl = L.Control.extend({
  options: { position: 'topright' },
  onAdd: function(map) {
    const container = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom map-mode-btn');
    
    container.innerHTML = '🌞'; // initial icon: sun = light mode
    container.title = 'Switch to Light Mode';

    L.DomEvent.on(container, 'click', function(e) {
      L.DomEvent.stopPropagation(e);
      L.DomEvent.preventDefault(e);

      if(darkMode){
        map.removeLayer(darkTiles);
        lightTiles.addTo(map);
        container.innerHTML = '🌙'; // moon = dark mode
        container.title = 'Switch to Dark Mode';
        container.classList.add('glow'); // glow animation
      } else {
        map.removeLayer(lightTiles);
        darkTiles.addTo(map);
        container.innerHTML = '🌞'; // sun = light mode
        container.title = 'Switch to Light Mode';
        container.classList.remove('glow');
      }
      darkMode = !darkMode;
    });

    return container;
  }
});

map.addControl(new MapModeControl());

map.on('click', function(e) {
  L.popup()
    .setLatLng(e.latlng)
    .setContent("Lat: " + e.latlng.lat.toFixed(6) + "<br>Lng: " + e.latlng.lng.toFixed(6))
    .openOn(map);
});

// ===== END MAP =====