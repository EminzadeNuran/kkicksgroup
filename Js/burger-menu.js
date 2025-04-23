document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".burger");
    const burgerMenu = document.querySelector(".burger-menu");
    const languageItem = document.querySelector(".burger-menu li:last-child");
  
    burger.addEventListener("click", function (e) {
      e.stopPropagation();
      burger.classList.toggle("active");
      burgerMenu.classList.toggle("open");
    });
  
    languageItem.addEventListener("click", function (e) {
      e.stopPropagation();
      languageItem.classList.toggle("show-submenu");
    });
  
    document.addEventListener("click", function () {
      burger.classList.remove("active");
      burgerMenu.classList.remove("open");
      languageItem.classList.remove("show-submenu");
    });
  });