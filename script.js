/* ===== DONNÉES : modifie uniquement ces deux tableaux pour mettre à jour le site ===== */

// Compétences techniques (icône FontAwesome, titre, détail)
const SKILLS = [
  ["fa-network-wired", "Réseaux", "VLAN, routage RIP/OSPF, NAT, DHCP, DNS"],
  ["fa-server", "Systèmes", "Windows Server, Active Directory, Debian"],
  ["fa-database", "Bases de données", "MariaDB, MySQL, requêtes SQL"],
  ["fa-shield-halved", "Cybersécurité", "Pare-feu, port-security, SSH, durcissement"],
  ["fa-screwdriver-wrench", "Outils", "Packet Tracer, VMware, GLPI, Git, PowerShell"]
];

// Projets : un objet par projet (les liens # sont des placeholders à remplacer)
const PROJECTS = [
  {
    title: "Sécurisation d'un commutateur Cisco",
    type: "Atelier de professionnalisation",
    icon: "fa-network-wired",
    context: "Lorem ipsum : une entreprise souhaite sécuriser l'accès à son infrastructure réseau.",
    goals: "Restreindre les accès administratifs et limiter les connexions non autorisées.",
    tech: ["Cisco IOS", "SSH", "Port-security", "RADIUS"],
    issues: "Les clés SSH n'étaient pas acceptées après la configuration. Solution : générer une clé RSA 2048 bits et définir un nom de domaine.",
    skills: ["Administrer un réseau", "Sécuriser les accès", "Documenter une procédure"],
    links: { code: "#", doc: "#", img: "#" }
  },
  {
    title: "Infrastructure web à trois machines",
    type: "Projet scolaire",
    icon: "fa-server",
    context: "Lorem ipsum : mise en place d'une architecture web avec serveur frontal, application et base de données.",
    goals: "Isoler les services et exposer uniquement le strict nécessaire.",
    tech: ["Debian", "nftables", "Apache", "MariaDB", "VMware"],
    issues: "Les règles de NAT bloquaient le trafic retour. Solution : ajouter les règles de suivi de connexion et tester avec tcpdump.",
    skills: ["Déployer un service", "Filtrer les flux", "Superviser"],
    links: { code: "#", doc: "#", img: "#" }
  },
  {
    title: "Annuaire Active Directory et GPO",
    type: "Stage (à adapter)",
    icon: "fa-users-gear",
    context: "Lorem ipsum : gestion centralisée des comptes et des postes d'une petite structure.",
    goals: "Automatiser la création des utilisateurs et appliquer des stratégies de sécurité.",
    tech: ["Windows Server", "PowerShell", "GPO", "DNS"],
    issues: "Une GPO ne s'appliquait pas au poste client. Solution : vérifier la portée et forcer la mise à jour avec gpupdate /force.",
    skills: ["Gérer les identités", "Scripter", "Appliquer une politique de sécurité"],
    links: { code: "#", doc: "#", img: "#" }
  }
];

/* ===== RENDU (pas besoin de modifier en dessous) ===== */
const $ = (s) => document.querySelector(s);
const esc = (t) => t.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

// Grille des compétences techniques
$("#tech").innerHTML = SKILLS.map(([i, t, d]) =>
  `<div class="card"><i class="fa-solid ${i}"></i><h4>${t}</h4><p>${d}</p></div>`).join("");

// Cartes projets
$("#projects").innerHTML = PROJECTS.map((p, n) =>
  `<button class="card" data-n="${n}"><i class="fa-solid ${p.icon}"></i><h4>${esc(p.title)}</h4>
   <p>${esc(p.type)}</p><div class="tags">${p.tech.slice(0, 3).map((t) => `<span>${esc(t)}</span>`).join("")}</div></button>`).join("");

// Modale de détail
const modal = $("#modal");
$("#projects").addEventListener("click", (e) => {
  const b = e.target.closest("[data-n]");
  if (!b) return;
  const p = PROJECTS[b.dataset.n];
  $("#modal-body").innerHTML = `
    <h3>${esc(p.title)}</h3>
    <h4>Contexte</h4><p>${esc(p.context)}</p>
    <h4>Objectifs</h4><p>${esc(p.goals)}</p>
    <h4>Technologies</h4><div class="tags">${p.tech.map((t) => `<span>${esc(t)}</span>`).join("")}</div>
    <h4>Difficultés et solutions</h4><p>${esc(p.issues)}</p>
    <h4>Compétences développées</h4><ul>${p.skills.map((s) => `<li>${esc(s)}</li>`).join("")}</ul>
    <p class="ph"><a href="${p.links.code}">Code source GitHub</a> · <a href="${p.links.doc}">Documentation</a> · <a href="${p.links.img}">Captures d'écran</a></p>`;
  modal.showModal();
});
modal.addEventListener("click", (e) => { if (e.target === modal || e.target.closest(".close")) modal.close(); });

// Menu mobile
const burger = document.querySelector(".burger"), menu = $("#menu");
burger.addEventListener("click", () => burger.setAttribute("aria-expanded", menu.classList.toggle("open")));
menu.addEventListener("click", () => { menu.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); });
