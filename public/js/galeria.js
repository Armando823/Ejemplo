const miniatures = document.querySelectorAll('.contenedor-img img');
const modal = document.getElementById('modalImagen');
const imagenGrande = document.getElementById('imgModal');
const cerrar = document.getElementById('cerrarModal');

miniatures.forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "block";
        imagenGrande.src = img.src;
    });
});

cerrar.addEventListener("click", () => {
    modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});