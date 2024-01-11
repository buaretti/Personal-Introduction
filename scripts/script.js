function toggleMenu() {
    var menuIcon = document.querySelector(".menu-icon");
    var menuItems = document.getElementsByClassName("menuitens");
  
    for (var i = 0; i < menuItems.length; i++) {
      menuItems[i].classList.toggle("show");
    }
  
    menuIcon.classList.toggle("open");
  }
  