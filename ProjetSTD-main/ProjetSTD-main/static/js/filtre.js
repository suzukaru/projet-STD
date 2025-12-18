
// -------------------- BOUTONS "SELECTIONNER TOUT" --------------------
function toggleCheckboxes(buttonId, name) {
    const btn = document.getElementById(buttonId);
    btn.addEventListener('click', () => {
        const checkboxes = document.querySelectorAll(`input[name="${name}"]`);
        const allChecked = Array.from(checkboxes).every(c => c.checked);
        checkboxes.forEach(c => c.checked = !allChecked);
    });
}

toggleCheckboxes('toggle-tout', 'arme');
toggleCheckboxes('select-all-special', 'special');

// -------------------- FILTRAGE --------------------
document.getElementById("filtrer-btn").addEventListener("click", () => {
    const armesCochees = Array.from(document.querySelectorAll('input[name="arme"]:checked')).map(c => c.value);
    const specialsCoches = Array.from(document.querySelectorAll('input[name="special"]:checked')).map(c => c.value);

    const filtres = regiments.filter(r => {
        const armeOk = armesCochees.includes(r.arme);
        const specialOk = (
            (specialsCoches.includes('parachutiste') && r.parachutiste) ||
            (specialsCoches.includes('legion') && r.legion) ||
            (specialsCoches.includes('marine') && r.marine)
        );
        const anySpecialChecked = specialsCoches.length > 0;
        return armeOk && (anySpecialChecked ? specialOk : true);
    });

    afficherRegiments(filtres);
});
