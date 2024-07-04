function asignarTexto(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto; 
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); 
    document.getElementById('reiniciar').removeAttribute('disabled')
    intentos++; 

    if (numeroDeUsuario === numeroSecreto) {
        asignarTexto('p', `Acertaste el número correcto en ${intentos} ${intentos === 1 ? 'vez' : 'veces'}`);
    } else {
        if (numeroDeUsuario < numeroSecreto) {
            asignarTexto('p', 'Ups. El número secreto es mayor');
        } else {
            asignarTexto('p', 'Ups. El número secreto es menor');
        }
    }
    limpiar();
} 

function limpiar() {
    document.getElementById('valorUsuario').value = '';
}

function reiniciarJuego() {
    limpiar();
    intentos = 0; // Reiniciar el contador de intentos
    numeroSecreto = generarNumeroSecreto(); // Generar un nuevo número secreto
    asignarTexto('p', 'Indica un número del 1 al 10');
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(numeroGenerado)
    console.log(listaDeNumerosSolteados)

    if (listaDeNumerosSolteados.length == numeroMaximo) {
        asignarTexto('p', 'OH NO. Ya se soltearon todos numeros posibles')
        
    } else {
        
    
    // Si el número ya ha sido sorteado, generar otro número
    if (listaDeNumerosSolteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else {
        listaDeNumerosSolteados.push(numeroGenerado);
        return numeroGenerado;
    }
}
}
let numeroMaximo = 10;
let listaDeNumerosSolteados = []; // Inicializar la lista de números sorteados
let numeroSecreto = generarNumeroSecreto();
let intentos = 0; // Inicializar el contador de intentos
console.log("El número secreto es:", numeroSecreto);

asignarTexto('h1', 'Juego del número secreto');
asignarTexto('p', 'Indica un número del 1 al 10');
