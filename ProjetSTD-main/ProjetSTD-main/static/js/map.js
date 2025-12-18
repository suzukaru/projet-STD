// -------------------- INITIALISATION DE LA CARTE --------------------
const map = L.map('map').setView([46.7, 2.5], 6);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap'
}).addTo(map);

