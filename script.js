// script.js
function openModal() {
    document.getElementById("footballModal").style.display = "block";
}

function closeModal() {
    document.getElementById("footballModal").style.display = "none";
}

// Close the modal when the user clicks anywhere outside of the modal
window.onclick = function(event) {
    var modal = document.getElementById("footballModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}