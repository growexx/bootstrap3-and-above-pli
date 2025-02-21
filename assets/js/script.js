function showAlert() {
    document.getElementById("dynamicAlert").classList.remove("d-none");
}

function showAutoDismissAlert() {
    let alertBox = document.getElementById("autoDismissAlert");
    alertBox.classList.remove("d-none");
    setTimeout(() => {
        alertBox.classList.add("d-none");
    }, 3000);
}

function changeCardText() {
    document.getElementById("cardText").innerText = "The card text has been changed!";
}

function updateModal() {
    document.getElementById("modalContent").innerText = "Modal content updated!";
    new bootstrap.Modal(document.getElementById("dynamicModal")).show();
}