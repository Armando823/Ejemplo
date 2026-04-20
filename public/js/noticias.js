document.getElementById("btnCargar").addEventListener("click",()=>{
    fetch("/api/articulos")
    .then(res => res.json())
    .then(data => {
        const contenedor = document.getElementById("contenedorNoticias");
        data.array.forEach(articulo => {
            const div= document.createElement("div");
            div.className = "col-md-4 mb-4";

            div.innerHTML = `
            <div class = "card shadow h-100">
            <div class = "card-body">
            <h5 class = "card-title">${articulo.titulo}</h5>
            <p class = "card-text">${articulo.contenido}</p>
            </div>
            </div>
            `;
            contenedor.appendChild(div);
        });
    });
});