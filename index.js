// Modal
let modal = document.getElementById("modalContainer");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("closeBtn")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Sidebar
function openNav() {
  document.getElementById("sidebarContainer").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("sidebarContainer").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
