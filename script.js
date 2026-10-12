/* ===== DONNÉES : modifie uniquement ces deux tableaux ===== */

// Compétences techniques (icône FontAwesome, titre, détail)
const SKILLS = [
  ["fa-windows", "Windows 11 et Server", "Déploiement, BitLocker, Defender, administration"],
  ["fa-users-gear", "Active Directory", "Comptes, OU, groupes, GPO, synchronisation Entra ID"],
  ["fa-ticket", "Support et ITSM", "Freshdesk, GLPI, TeamViewer, gestion de parc"],
  ["fa-shield-halved", "Sécurité des postes", "Chiffrement TPM, mots de passe, sensibilisation"],
  ["fa-network-wired", "Réseaux", "TCP/IP, VLAN, routage, Packet Tracer, VPN"],
  ["fa-linux", "Linux", "Debian, services, pare-feu nftables"],
  ["fa-cubes", "Virtualisation", "Proxmox, VMware, machines virtuelles de test"],
  ["fa-magnifying-glass-chart", "Analyse réseau", "Wireshark, analyse de trames, diagnostic"]
];

// Projets : un objet par projet (liens # = placeholders à remplacer par tes captures / documents)
const PROJECTS = [
  {
    title: "Déploiement sécurisé de postes Windows 11",
    type: "Stage – Neuro Swiss AI",
    icon: "fa-laptop-code",
    period: "16 – 23 juin 2026",
    context: "Deux nouveaux salariés arrivent dans une entreprise d'IA d'environ 25 personnes. Chaque poste doit être prêt, conforme à la politique de sécurité et remis le jour de l'arrivée.",
    goals: "Installer, configurer et sécuriser chaque poste selon la procédure interne, avant remise à l'utilisateur.",
    steps: [
      "Contrôle du matériel : état du disque, RAM, état général.",
      "Installation propre de Windows 11, puis application de toutes les mises à jour (Windows Update).",
      "Création du compte utilisateur et rattachement à Microsoft Entra ID.",
      "Activation du chiffrement BitLocker pour protéger les données en cas de perte ou de vol.",
      "Installation des logiciels standards : Microsoft 365, navigateur, VPN d'entreprise, antivirus Microsoft Defender.",
      "Vérification finale puis remise du poste, avec présentation de l'environnement au salarié."
    ],
    tech: ["Windows 11", "BitLocker", "TPM", "Entra ID", "Defender", "Microsoft 365", "VPN"],
    issues: "Sur le premier poste, BitLocker refusait de s'activer : le module TPM était désactivé dans le BIOS. Diagnostic : l'assistant BitLocker signalait l'absence de TPM exploitable. Solution : activer le TPM dans le BIOS, redémarrer, puis relancer le chiffrement. Sur le second poste, j'ai vérifié le TPM avant l'installation et tout s'est passé sans blocage.",
    result: "Deux postes livrés, chiffrés et conformes. Le contrôle du TPM est désormais une étape de la procédure d'installation que j'ai rédigée.",
    cmds: [
      ["tpm.msc", "Vérifier la présence et l'état du module TPM"],
      ["manage-bde -status", "Contrôler l'état du chiffrement BitLocker"]
    ],
    learned: "Rôle du TPM dans la sécurisation du démarrage et importance du chiffrement des postes professionnels.",
    skills: ["Déployer et configurer un poste", "Chiffrer les données", "Gérer le patrimoine informatique", "Assurer la sécurité des équipements"],
    links: { doc: "rapport-de-stage.pdf", img: "#" }
  },
  {
    title: "Administration Active Directory et GPO",
    type: "Stage – Neuro Swiss AI",
    icon: "fa-users-gear",
    period: "3 – 10 juillet 2026",
    context: "L'annuaire Active Directory tourne sur Windows Server et est synchronisé avec Microsoft Entra ID. Il est organisé en unités d'organisation (OU) par pôle : R&D, Commercial, Support, Administratif.",
    goals: "Créer les comptes et groupes des deux nouveaux salariés, puis appliquer la GPO de verrouillage automatique de session après 10 minutes d'inactivité.",
    steps: [
      "Cartographie de l'arborescence et du rôle de chaque OU avec l'administrateur systèmes.",
      "Entraînement sur une machine virtuelle de test : création d'un compte, rattachement à une OU, ajout à un groupe de sécurité.",
      "En production, sous supervision : création des comptes définitifs, groupes de sécurité et de messagerie selon le service.",
      "Contrôle de la synchronisation des comptes vers Microsoft Entra ID (Azure AD Connect).",
      "Application de la GPO de verrouillage sur l'OU du pôle Support depuis la console GPMC.",
      "Diagnostic et correction du conflit de stratégies, puis vérification sur un poste."
    ],
    tech: ["Active Directory", "ADUC", "GPMC", "GPO", "Windows Server", "Entra ID", "Azure AD Connect"],
    issues: "La GPO ne produisait pas l'effet attendu : une autre stratégie, appliquée à un niveau supérieur de l'arborescence, avait la priorité et neutralisait le paramètre. Méthode : analyse de l'ordre d'application (liens, héritage entre OU, priorité), identification de la GPO concurrente, puis correction du conflit et contrôle de l'application effective sur le poste.",
    result: "Comptes opérationnels et synchronisés, verrouillage de session effectif sur le pôle Support. Réinitialisations de mots de passe et déverrouillages de comptes traités en parallèle.",
    cmds: [
      ["gpupdate /force", "Forcer l'application des stratégies sur le poste"],
      ["gpresult /r", "Voir quelles GPO s'appliquent réellement à l'utilisateur et à l'ordinateur"]
    ],
    learned: "Logique d'application des GPO (ordre de traitement, héritage entre OU, blocage d'héritage) et rôle central de l'annuaire dans la gestion des identités et des droits.",
    skills: ["Administrer un annuaire", "Gérer identités et droits d'accès", "Appliquer une politique de sécurité", "Diagnostiquer un dysfonctionnement"],
    links: { doc: "rapport-de-stage.pdf", img: "#" }
  },
  {
    title: "Support utilisateur de niveau 1 (Freshdesk)",
    type: "Stage – Neuro Swiss AI",
    icon: "fa-headset",
    period: "Tout au long du stage",
    context: "Le service IT (trois personnes) gère les demandes de tous les salariés via Freshdesk. J'ai d'abord observé le cycle de vie d'un ticket, puis traité moi-même les demandes de niveau 1.",
    goals: "Apporter une réponse rapide et adaptée, escalader quand c'est nécessaire, et documenter chaque résolution.",
    steps: [
      "Réception et qualification du ticket (catégorie, priorité).",
      "Prise de contact avec l'utilisateur, sur place ou à distance avec TeamViewer.",
      "Diagnostic par questions ciblées, puis résolution.",
      "Escalade vers un collègue si le problème dépasse le niveau 1.",
      "Clôture du ticket avec un compte-rendu."
    ],
    tech: ["Freshdesk", "TeamViewer", "Microsoft 365", "Pilotes", "Windows 11"],
    issues: "Des utilisateurs décrivaient leur problème de façon imprécise. Solution : une série de questions de diagnostic (quand, depuis quand, message d'erreur, ce qui a changé) pour remonter vite à la vraie cause.",
    result: "Résolutions autonomes : connexion à la messagerie, imprimantes, souris, casque non reconnus, pilotes défectueux, réinitialisations de mots de passe. Mise à jour d'une fiche de suivi des incidents récurrents.",
    cmds: [],
    learned: "Écoute, diagnostic méthodique et communication avec des non-techniciens.",
    skills: ["Répondre aux incidents et demandes", "Communiquer avec des non-techniciens", "Travailler en équipe"],
    links: { doc: "rapport-de-stage.pdf", img: "#" }
  },
  {
    title: "Inventaire et gestion du parc informatique",
    type: "Stage – Neuro Swiss AI",
    icon: "fa-boxes-stacked",
    period: "19 – 26 juin 2026",
    context: "L'inventaire du parc n'était pas totalement à jour, ce qui complique le suivi des garanties et le renouvellement du matériel.",
    goals: "Disposer d'un inventaire fiable de tout le matériel : postes fixes et portables, écrans, imprimantes.",
    steps: [
      "Recensement physique du matériel dans les locaux.",
      "Relevé des numéros de série et des dates d'acquisition.",
      "Comparaison avec le tableau existant, correction des erreurs, ajout des équipements manquants.",
      "Mise à jour du fichier Excel : utilisateur affecté, état, garantie.",
      "Étiquetage du matériel non identifié et vérification croisée avec le technicien support."
    ],
    tech: ["Excel", "Étiquetage", "Numéros de série", "Suivi de garantie"],
    issues: "Certains équipements avaient changé d'utilisateur sans que le service IT soit prévenu. Solution : vérifications auprès des salariés concernés avant de valider chaque ligne.",
    result: "Inventaire complet et fiabilisé, base pour anticiper le renouvellement et sécuriser le parc.",
    cmds: [],
    learned: "Un inventaire à jour est un prérequis de la sécurité : on ne protège pas ce qu'on ne connaît pas.",
    skills: ["Gérer le patrimoine informatique", "Mettre à jour une base d'inventaire", "Travailler avec rigueur"],
    links: { doc: "rapport-de-stage.pdf", img: "#" }
  },
  {
    title: "Sensibilisation sécurité et documentation",
    type: "Stage – Neuro Swiss AI",
    icon: "fa-shield-halved",
    period: "29 juin – 14 juillet 2026",
    context: "Démarche interne de renforcement de la sécurité, et besoin de transmettre la procédure d'installation aux futurs stagiaires.",
    goals: "Animer une session sur les mots de passe et l'hameçonnage, et rédiger la procédure d'installation d'un poste.",
    steps: [
      "Recherche d'exemples concrets d'hameçonnage et construction du support avec le tuteur.",
      "Animation de la session auprès d'un groupe de salariés, suivie d'un temps de questions-réponses.",
      "Distribution d'une fiche récapitulative des bonnes pratiques.",
      "Rédaction de la procédure d'installation de poste avec captures d'écran commentées.",
      "Relecture par le tuteur, corrections puis validation."
    ],
    tech: ["PowerPoint", "Word", "Microsoft 365", "Hameçonnage", "Mots de passe"],
    issues: "Adapter le discours à un public non technique. Solution : exemples concrets, vocabulaire simple, fiche récapitulative et relecture par le tuteur.",
    result: "Session animée et procédure validée, réutilisable par l'équipe IT.",
    cmds: [],
    learned: "Prise de parole et vulgarisation de notions de sécurité.",
    skills: ["Sensibiliser aux risques", "Rédiger une documentation technique", "Travailler en mode projet"],
    links: { doc: "rapport-de-stage.pdf", img: "#" }
  },
  {
    title: "Infrastructure web à trois machines",
    type: "Projet scolaire – à compléter",
    icon: "fa-server",
    period: "BTS SIO – Lycée Carriat",
    context: "Architecture avec serveur frontal, serveur d'application et base de données sur des machines Debian virtualisées.",
    goals: "Isoler les services et n'exposer que le strict nécessaire.",
    steps: [
      "À compléter : plan d'adressage et schéma réseau.",
      "À compléter : configuration des trois serveurs.",
      "À compléter : règles de filtrage nftables et accès SSH."
    ],
    tech: ["Debian", "nftables", "SSH", "VMware", "Proxmox"],
    issues: "À compléter : décris ici un blocage réel (routage, NAT, règles de filtrage) et ta solution.",
    result: "À compléter.",
    cmds: [["nft list ruleset", "Afficher les règles de filtrage en vigueur"]],
    learned: "À compléter.",
    skills: ["Déployer un service", "Filtrer les flux", "Superviser"],
    links: { doc: "#", img: "#" }
  }
];

/* ===== RENDU (pas besoin de modifier en dessous) ===== */
const $ = (s) => document.querySelector(s);
const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const tags = (a) => `<div class="tags">${a.map((t) => `<span>${esc(t)}</span>`).join("")}</div>`;

$("#tech").innerHTML = SKILLS.map(([i, t, d]) =>
  `<div class="card"><i class="fa-solid ${i}"></i><h4>${esc(t)}</h4><p>${esc(d)}</p></div>`).join("");

$("#projects").innerHTML = PROJECTS.map((p, n) =>
  `<button class="card" data-n="${n}"><i class="fa-solid ${p.icon}"></i><h4>${esc(p.title)}</h4>
   <p>${esc(p.type)}</p>${tags(p.tech.slice(0, 3))}</button>`).join("");

const modal = $("#modal");
$("#projects").addEventListener("click", (e) => {
  const b = e.target.closest("[data-n]");
  if (!b) return;
  const p = PROJECTS[b.dataset.n];
  const link = (l, label) => (l && l !== "#" ? `<a href="${l}" target="_blank" rel="noopener">${label}</a>` : `<span>${label} (à venir)</span>`);
  $("#modal-body").innerHTML = `
    <h3>${esc(p.title)}</h3>
    <p class="ph">${esc(p.type)} · ${esc(p.period)}</p>
    <h4>Contexte</h4><p>${esc(p.context)}</p>
    <h4>Objectifs</h4><p>${esc(p.goals)}</p>
    <h4>Étapes de réalisation</h4><ol>${p.steps.map((s) => `<li>${esc(s)}</li>`).join("")}</ol>
    <h4>Technologies</h4>${tags(p.tech)}
    ${p.cmds.length ? `<h4>Commandes de vérification</h4><ul class="cmds">${p.cmds.map(([c, d]) => `<li><code>${esc(c)}</code> ${esc(d)}</li>`).join("")}</ul>` : ""}
    <h4>Difficultés et solutions</h4><p>${esc(p.issues)}</p>
    <h4>Résultat</h4><p>${esc(p.result)}</p>
    <h4>Ce que j'ai appris</h4><p>${esc(p.learned)}</p>
    <h4>Compétences développées</h4><ul>${p.skills.map((s) => `<li>${esc(s)}</li>`).join("")}</ul>
    <p class="ph">${link(p.links.doc, "Rapport de stage")} · ${link(p.links.img, "Captures d'écran")}</p>`;
  modal.showModal();
});
modal.addEventListener("click", (e) => { if (e.target === modal || e.target.closest(".close")) modal.close(); });

const burger = document.querySelector(".burger"), menu = $("#menu");
burger.addEventListener("click", () => burger.setAttribute("aria-expanded", menu.classList.toggle("open")));
menu.addEventListener("click", () => { menu.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); });
