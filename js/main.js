document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav");
  const abrir = document.querySelector(".abrir-menu");
  const cerrar = document.querySelector(".cerrar-menu");

  abrir.addEventListener("click", () => {
    nav.classList.add("visible");
    abrir.style.display = "none";
    cerrar.style.display = "block"; 
  });

  cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
    abrir.style.display = "block";
    cerrar.style.display = "none"; 
  });
});