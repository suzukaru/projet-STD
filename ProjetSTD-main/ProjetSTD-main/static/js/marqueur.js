// -------------------- COULEURS PAR ARME --------------------
const couleursArme = {
    'Infanterie': '#ffcc00d7',
    'Cavalerie': '#ffffffff',
    'Artillerie': '#FF4500',
    'Génie': '#808080',
    'Transmissions': '#00CED1',
    'Matériel': '#fa00edff',
    'Train': '#006305ff'
};

// -------------------- MARQUEURS --------------------
let markers = [];

function creerMarkerSVG(regiment) {
    const fillColor = couleursArme[regiment.arme] || '#000000';
    return L.divIcon({
        className: '',
        html: `<svg width="20" height="20">
                <circle cx="10" cy="10" r="8" fill="${fillColor}" stroke="#000" stroke-width="2" />
               </svg>`,
        iconSize: [60, 20],
        iconAnchor: [10, 10]
    });
}

function afficherRegiments(regs) {
    markers.forEach(m => map.removeLayer(m));
    markers = [];

    regs.forEach(r => {
        const popupText = `<b>${r.nom}</b><br>${r.ville}<br>${r.arme}`
                        + `${r.parachutiste ? ' - Parachutiste' : ''}`
                        + `${r.legion ? ' - Légion étrangère' : ''}`
                        + `${r.marine ? ' - Troupe de marine' : ''}`;

        const marker = L.marker([r.lat, r.lon], { icon: creerMarkerSVG(r) })
                        .addTo(map)
                        .bindPopup(popupText);
        markers.push(marker);
    });

    if (markers.length > 0) {
        const group = L.featureGroup(markers);
        map.fitBounds(group.getBounds().pad(0.2));
    }
}

// Affichage initial
afficherRegiments(regiments);