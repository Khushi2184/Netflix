// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let openBtn = document.getElementById("openModalBtn");

// Get the <span> element that closes the modal
let closeBtn = document.getElementsByClassName("close")[0];

// Get the close button in the modal
let closeModalBtn = document.getElementById("closeModalBtn");

// When the user clicks the button, open the modal 
openBtn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks the close button inside the modal, close it
closeModalBtn.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
