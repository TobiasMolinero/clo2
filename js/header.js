const header = document.getElementById("header");


document.addEventListener("DOMContentLoaded", () => {
    
    window.addEventListener("scroll", function() {
      // Obtener la posición actual del scroll
      var scrollPosition = window.scrollY || document.documentElement.scrollTop;
      
      // Agregar o quitar las clases según la posición del scroll
      if (scrollPosition > 0) {
        header.classList.remove("header");
        header.classList.add("header_sticked");
      } else {
        header.classList.remove("header_sticked");
        header.classList.add("header");
      }
    });
  });