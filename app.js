
let listaAmigos = [];

// Función para agregar amigos a la lista
function agregarAmigo() {
    // 1. Obtener el elemento input
    const input = document.getElementById('amigo');
    
    // 2. Limpiar espacios en blanco y validar
    const nombre = input.value.trim();
    
    // 3. Validar que no esté vacío
    if (nombre === '') {
        alert('⚠️ Error: Debes escribir un nombre válido');
        return;
    }
    
    // 4. Agregar el nombre al array
    listaAmigos.push(nombre);
    
    // 5. Actualizar la lista visual
    const lista = document.getElementById('listaAmigos');
    const nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = nombre;
    lista.appendChild(nuevoElemento);
    
    // 6. Limpiar el campo de entrada
    input.value = '';
}


function sortearAmigo() {
    // 1. Validar que haya amigos registrados
    if (listaAmigos.length === 0) {
        alert('⚠️ Error: Primero agrega amigos a la lista');
        return;
    }
    
    // 2. Ocultar la lista de nombres
    const lista = document.getElementById('listaAmigos');
    lista.style.display = 'none';
    
    // 3. Seleccionar un nombre aleatorio
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[indiceAleatorio];
    
    // 4. Mostrar el resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li> El amigo secreto sorteado es: ${amigoSecreto}</li>`;
}
