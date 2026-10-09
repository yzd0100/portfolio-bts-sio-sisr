/* ===== DONNÉES : modifie uniquement ces deux tableaux ===== */

// Compétences techniques (icône FontAwesome, titre, détail)
const SKILLS = [
  ["fa-cubes", "Virtualisation", "Proxmox, VMware, machines virtuelles"],
  ["fa-user-secret", "Sécurité offensive", "Kali Linux, tests d'intrusion en laboratoire"],
  ["fa-magnifying-glass-chart", "Analyse réseau", "Wireshark, analyse de trames, diagnostic"],
  ["fa-network-wired", "Réseaux", "TCP/IP, VLAN, routage, Packet Tracer"],
  ["fa-users-gear", "Active Directory", "Comptes, groupes, OU, GPO, Entra ID"],
  ["fa-windows", "Windows 11 et Server", "Déploiement, BitLocker, administration"],
  ["fa-linux", "Linux", "Debian, services, pare-feu nftables"],
  ["fa-ticket", "Support", "Freshdesk, TeamViewer, gestion de parc"]
];

// Projets : un objet par projet (liens # = placeholders à remplacer)
const PROJECTS = [
  {
    title: "Déploiement sécurisé de postes Windows 11",
    type: "Stage – Neuro Swiss AI",
    icon: "fa-laptop-code",
    context: "Deux nouveaux salariés à équiper dans une entreprise d'IA de 20 à 25 personnes.",
    goals: "Installer, configurer et sécuriser les postes selon la procédure interne avant remise.",
    tech: ["Windows 11", "BitLocker", "Entra ID", "Defender", "Microsoft 365"],
    issues: "BitLocker échouait car le module TPM était désactivé. Solution : l'activer dans le BIOS, puis relancer le chiffrement. Sur le second poste, l'installation s'est faite sans blocage.",
    skills: ["Déployer et configurer un poste", "Chiffrer les données", "Gérer le patrimoine informatique"],
    links: { code: "#", doc: "#", img: "#" }
  },
  {
    title: "Administration Active Directory et GPO",
    type: "Stage – Neuro Swiss AI",
    icon: "fa-users-gear",
    context: "Annuaire organisé en unités d'organisation par pôle et synchronisé avec Microsoft Entra ID.",
    goals: "Créer les comptes et groupes des nouveaux salariés et appliquer une GPO de verrouillage de session.",
    tech: ["Active Directory", "ADUC", "GPMC", "PowerShell", "Entra ID"],
    issues: "La GPO ne s'appliquait pas : une stratégie de niveau supérieur était prioritaire. Solution : analyser l'ordre d'application et l'héritage, puis corriger le conflit et vérifier l'effet sur le poste.",
    skills: ["Administrer un annuaire", "Gérer identités et droits", "Appliquer une politique de sécurité"],
    links: { code: "#", doc: "#", img: "#" }
  },
  {
    title: "Support utilisateur et gestion du parc",
    type: "Stage – Neuro Swiss AI",
    icon: "fa-headset",
    context: "Demandes quotidiennes des salariés et inventaire du parc non à jour.",
    goals: "Traiter les tickets de niveau 1 et fiabiliser l'inventaire (matériel, série, garantie, utilisateur).",
    tech: ["Freshdesk", "TeamViewer", "Excel"],
    issues: "Des demandes mal décrites et du matériel changé d'utilisateur sans information. Solution : questions de diagnostic ciblées et vérifications croisées auprès des salariés.",
    skills: ["Répondre aux incidents", "Gérer le patrimoine", "Communiquer avec des non-techniciens"],
    links: { code: "#", doc: "#", img: "#" }
  },
  {
    title: "Sensibilisation à la sécurité et documentation",
    type: "Stage – Neuro Swiss AI",
    icon: "fa-shield-halved",
    context: "Démarche interne de renforcement de la sécurité et besoin de transmission pour les futurs stagiaires.",
    goals: "Animer une session sur les mots de passe et l'hameçonnage, et rédiger la procédure d'installation d'un poste.",
    tech: ["PowerPoint", "Word", "Microsoft 365"],
    issues: "Adapter le discours à un public non technique et trouver le bon niveau de détail. Solution : exemples concrets, fiche récapitulative et relecture par le tuteur.",
    skills: ["Sensibiliser aux risques", "Rédiger une documentation technique"],
    links: { code: "#", doc: "#", img: "#" }
  },
  {
    title: "Infrastructure web à trois machines",
    type: "Projet scolaire (à compléter)",
    icon: "fa-server",
    context: "Architecture avec serveur frontal, application et base de données sur des machines Debian virtualisées.",
    goals: "Isoler les services et ne rendre accessible que le strict nécessaire.",
    tech: ["Debian", "nftables", "SSH", "VMware", "Proxmox"],
    issues: "Lorem ipsum : décris ici un blocage réel (routage, NAT, règles de filtrage) et ta solution.",
    skills: ["Déployer un service", "Filtrer les flux", "Superviser"],
    links: { code: "#", doc: "#", img: "#" }
  }
];

/* ===== RENDU (pas besoin de modifier en dessous) ===== */
const $ = (s) => document.querySelector(s);
const esc = (t) => t.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

$("#tech").innerHTML = SKILLS.map(([i, t, d]) =>
  `<div class="card"><i class="fa-solid ${i}"></i><h4>${t}</h4><p>${d}</p></div>`).join("");

$("#projects").innerHTML = PROJECTS.map((p, n) =>
  `<button class="card" data-n="${n}"><i class="fa-solid ${p.icon}"></i><h4>${esc(p.title)}</h4>
   <p>${esc(p.type)}</p><div class="tags">${p.tech.slice(0, 3).map((t) => `<span>${esc(t)}</span>`).join("")}</div></button>`).join("");

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
    <p class="ph"><a href="${p.links.code}">Code source</a> · <a href="${p.links.doc}">Documentation</a> · <a href="${p.links.img}">Captures d'écran</a></p>`;
  modal.showModal();
});
modal.addEventListener("click", (e) => { if (e.target === modal || e.target.closest(".close")) modal.close(); });

const burger = document.querySelector(".burger"), menu = $("#menu");
burger.addEventListener("click", () => burger.setAttribute("aria-expanded", menu.classList.toggle("open")));
menu.addEventListener("click", () => { menu.classList.remove("open"); burger.setAttribute("aria-expanded", "false"
