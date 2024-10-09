
// Função para mostrar ou esconder o menu
function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
  }
  
  document.getElementById("menu-button").addEventListener("click", toggleMenu);
  
  // Função para mostrar ou esconder as seções
  function showSection(sectionId) {
    var sections = document.querySelectorAll(".section");
    sections.forEach(function(section) {
      section.style.display = "none";
    });
    document.getElementById(sectionId).style.display = "block";
  }

  document.querySelectorAll("#menu li a").forEach(function(link) {
    link.addEventListener("click", function(event) {
      event.preventDefault();
      showSection(link.getAttribute("href").replace("#", ""));
    });
  });
