console.log("menus.js chargé");

function creerMenuAMSCC() {
    const dropdown = document.createElement("div");
    dropdown.className = "dropdown";

    dropdown.innerHTML = `
        <button class="dropbtn" id="btn-amscc">Liste AMSCC</button>

        <div class="dropdown-content" id="menu-amscc">
            <div class="submenu">EMIA
                <div class="submenu-content">
                    <div data-choix="EMIA 1">EMIA 1</div>
                    <div data-choix="EMIA 2">EMIA 2</div>
                </div>
            </div>

            <div class="submenu">ESM
                <div class="submenu-content">
                    <div data-choix="ESM 1">ESM 1</div>
                    <div data-choix="ESM 2">ESM 2</div>
                    <div data-choix="ESM 3">ESM 3</div>
                </div>
            </div>

            <div class="submenu">EMAC</div>
        </div>
    `;

    document.getElementById("top-buttons").appendChild(dropdown);

    // --- logique clic bouton ---
    const btn = dropdown.querySelector("#btn-amscc");
    const menu = dropdown.querySelector("#menu-amscc");

    btn.addEventListener("click", (e) => {
        e.stopPropagation();
        menu.classList.toggle("open");
    });

    // --- fermer si clic ailleurs ---
    document.addEventListener("click", () => {
        menu.classList.remove("open");
    });

    // --- clic EMIA / ESM ---
    dropdown.querySelectorAll("[data-choix]").forEach(item => {
        item.addEventListener("click", (e) => {
            e.stopPropagation();
            afficherListePromotion(item.dataset.choix);
            menu.classList.remove("open");
        });
    });

    // --- clic EMAC ---
    const emacItem = dropdown.querySelector(".submenu:last-child");
    emacItem.addEventListener("click", (e) => {
        e.stopPropagation();
        afficherListePromotion("EMAC");
        menu.classList.remove("open");
    });
}

function creerMenuPromotion() {
    const dropdown = document.createElement("div");
    dropdown.className = "dropdown";

    dropdown.innerHTML = `
        <button class="dropbtn" id="btn-promotion">La promotion</button>

        <div class="dropdown-content" id="menu-promotion">
            <div class="submenu" data-action="voir">Voir la liste</div>
            <div class="submenu" data-action="gerer">Gérer les choix</div>
            <div class="submenu" data-action="classement">Mettre à jour classement</div>
        </div>
    `;

    document.getElementById("top-buttons").appendChild(dropdown);

    const btn = dropdown.querySelector("#btn-promotion");
    const menu = dropdown.querySelector("#menu-promotion");

    btn.addEventListener("click", (e) => {
        e.stopPropagation();
        menu.classList.toggle("open");
    });

    document.addEventListener("click", () => {
        menu.classList.remove("open");
    });

    menu.querySelectorAll(".submenu").forEach(item => {
        item.addEventListener("click", (e) => {
            e.stopPropagation();
            console.log("Action promotion :", item.dataset.action);
            menu.classList.remove("open");
        });
    });
}

// rendre les fonctions accessibles globalement
window.creerMenuAMSCC = creerMenuAMSCC;
window.creerMenuPromotion = creerMenuPromotion;