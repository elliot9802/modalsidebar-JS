// Modal
let modal = document.getElementById("modalContainer");
let btn = document.getElementById("myBtn");
let close = document.getElementsByClassName("closeBtn")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

close.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};

// Sidebar
// let sidebar = document.getElementById("sidebarContainer");
// let sidebarBtn = document.getElementsByClassName("openbtn");

// window.onclick = function (e) {
//   if (e.target !== sidebar || sidebarBtn) {
//     closeNav();
//   }
// };

function openNav() {
  document.getElementById("sidebarContainer").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("sidebarContainer").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
