document.addEventListener("DOMContentLoaded", () => {
    fetch("/api/armes")
        .then(response => response.json())
        .then(armes => {
            const armesContainer = document.getElementById("armes-filtres");
            armes.forEach(arme => {
                const checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.id = arme.name.toLowerCase();
                checkbox.name = "arme";
                checkbox.value = arme.name;
                checkbox.checked = true;

                const label = document.createElement("label");
                label.htmlFor = arme.name.toLowerCase();
                label.innerHTML = `${arme.name} <span style="display:inline-block;width:12px;height:12px;background:${arme.color};margin-left:5px;border:1px solid #000;"></span>`;

                armesContainer.appendChild(checkbox);
                armesContainer.appendChild(label);
                armesContainer.appendChild(document.createElement("br"));
            });
        })
        .catch(err => console.error(err));
});