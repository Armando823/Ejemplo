document.getElementById("formulario").addEventListener("submit", function(e){
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("correo").value;
    const password = document.getElementById("contrasena").value;

    fetch("/api/registro", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ nombre, email, password })
    })
    .then(res => res.json())
    .then(data => {
        const contenedor = document.getElementById("resultado");
        const item = document.createElement("div");
        item.className = "list-group-item";

        item.innerHTML = `
        <strong>${data.nombre}</strong><br>
        <small>${data.email}</small>
        `;
        contenedor.appendChild(item);
        document.getElementById("formulario").reset();
    })
    .catch(err => console.error("Error:", err));
});