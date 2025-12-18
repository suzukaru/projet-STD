/// -------------------- Prénoms et noms --------------------

const prenoms = [
    "Lucas","Emma","Gabriel","Chloé","Léo","Camille","Arthur","Manon",
    "Hugo","Julie","Nathan","Léa","Enzo","Clara","Maxime","Sarah",
    "Antoine","Paul","Marine","Julien","Thomas","Amandine"
];

const noms = [
    "Martin","Bernard","Dubois","Thomas","Robert","Richard","Petit",
    "Durand","Moreau","Simon","Laurent","Leroy","Roux","David",
    "Bertrand","Faure","Girard","Andre","Lefebvre","Mercier"
];

/// -------------------- Génération d'une promo --------------------

function generatePromo(promo, estESM = false) {
    const liste = [];

    // Cadres fixes
    liste.push({ nom: "Martin", prenom: "Jean", statut: "COMBRIG" });
    liste.push({ nom: "Durand", prenom: "Pierre", statut: "OAI" });
    liste.push({ nom: "Leroy", prenom: "Alain", statut: "ADU" });

    // CDS (+ SOA pour ESM)
    for (let i = 1; i <= 4; i++) {
        liste.push({
            nom: noms[i],
            prenom: prenoms[i],
            statut: `CDS ${i}`
        });

        if (estESM) {
            liste.push({
                nom: noms[i + 5],
                prenom: prenoms[i + 5],
                statut: `SOA ${i}`
            });
        }
    }

    // Élèves jusqu'à 50
    while (liste.length < 50) {
        const nom = noms[Math.floor(Math.random() * noms.length)];
        const prenom = prenoms[Math.floor(Math.random() * prenoms.length)];

        liste.push({ nom, prenom, statut: "Élève" });
    }

    return liste;
}

/// -------------------- Liste des personnes --------------------

const personnes = {
    "EMIA 1": generatePromo("EMIA 1"),
    "EMIA 2": generatePromo("EMIA 2"),
    "ESM 1": generatePromo("ESM 1", true),
    "ESM 2": generatePromo("ESM 2", true),
    "ESM 3": generatePromo("ESM 3", true),
    "EMAC": generatePromo("EMAC")
};
