// -------------------- Fonction pour afficher une liste de promotion --------------------
function afficherListePromotion(promo) {
    console.log("afficherListePromotion appelé pour :", promo);

    const modal = document.getElementById("modal-liste");
    const title = document.getElementById("modal-title");
    const body = document.getElementById("modal-body");

    title.textContent = `Liste – ${promo}`;
    body.innerHTML = "";

    const liste = personnes[promo];

    if (!liste) {
        body.innerHTML = "<p>Aucune donnée disponible.</p>";
        modal.style.display = "flex";
        return;
    }

    const table = document.createElement("table");
    table.innerHTML = `
        <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Statut</th>
        </tr>
    `;

    liste.forEach(p => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${p.nom}</td>
            <td>${p.prenom}</td>
            <td>${p.statut}</td>
        `;
        table.appendChild(tr);
    });

    body.appendChild(table);
    modal.style.display = "flex";
}

// Exposer globalement pour que les boutons dynamiques puissent l’utiliser
window.afficherListePromotion = afficherListePromotion;

// -------------------- Fonction générique pour créer un bouton --------------------
function creerBouton(texte, callback) {
    const btn = document.createElement("button");
    btn.textContent = texte;

    if (callback) {
        btn.addEventListener("click", callback);
    } else {
        btn.addEventListener("click", () => {
            console.log("Bouton cliqué :", texte);
        });
    }

    document.getElementById("top-buttons").appendChild(btn);
}

// -------------------- Fonction pour demander la promotion d'un élève --------------------
function demanderPromotionEleve() {
    console.log("demanderPromotionEleve appelé");

    const promos = Object.keys(personnes);

    // Création de la modale temporaire
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>Choisissez votre promotion</h2>
            <div id="modal-body">
                ${promos.map(p => `<button class="promo-btn" data-promo="${p}">${p}</button>`).join("<br>")}
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    modal.style.display = "flex";

    // Gestion fermeture modale
    modal.querySelector(".close").addEventListener("click", () => {
        modal.remove();
    });

    // Clic sur une promotion
    modal.querySelectorAll(".promo-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const promo = btn.dataset.promo;
            console.log("Promotion sélectionnée :", promo);
            afficherListePromotion(promo);
            modal.remove();
        });
    });
}

// -------------------- Initialisation de l'interface --------------------
function initialiserInterface(role) {
    const userInfo = document.getElementById("user-info");
    const topButtons = document.getElementById("top-buttons");

    // Réinitialiser les boutons
    topButtons.innerHTML = "";

    if (role === "eleve") {
        userInfo.textContent = "Dolo Bibelot";

        // Bouton "Ma promotion" uniquement pour les élèves
        creerBouton("Ma promotion", () => {
            demanderPromotionEleve();
        });

        creerBouton("Choix arme");
        creerBouton("Stat");
    }

    if (role === "cadre") {
        userInfo.textContent = "Vorace Rat";

        creerMenuAMSCC();     // menu déroulant AMSCC
        creerMenuPromotion(); // menu déroulant "La promotion"
        creerBouton("Stat");
        creerBouton("Ticket");
    }
}

// -------------------- Fermeture du modal liste --------------------
document.addEventListener("click", (e) => {
    if (e.target.id === "modal-close") {
        document.getElementById("modal-liste").style.display = "none";
    }
});