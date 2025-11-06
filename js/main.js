document.addEventListener("DOMContentLoaded", () => {

  const boton = document.getElementById("btnComenzar");

  if (boton) {
    boton.addEventListener("click", () => {
      // Redirige al top de iglesias
      window.location.href = "iglesias.html";
    });
  }

});