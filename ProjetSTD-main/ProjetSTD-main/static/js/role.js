function validerRole() {
    const role = document.getElementById("role-select").value;

    if (!role) {
        alert("Veuillez sélectionner un rôle");
        return;
    }

    document.getElementById("role-overlay").style.display = "none";

    initialiserInterface(role);
}