function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("show");
  }
  
  document.getElementById("menu-toggle-button").addEventListener("click", toggleMenu);
  