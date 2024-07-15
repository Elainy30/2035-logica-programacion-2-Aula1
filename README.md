# Juego del Número Secreto :space_invader:

Este proyecto es un sencillo juego del número secreto implementado en JavaScript. El objetivo del juego es adivinar un número secreto generado aleatoriamente entre 1 y 10. El jugador ingresa un número, y el juego le indica si el número secreto es mayor o menor. El juego sigue hasta que el jugador adivine el número correcto, momento en el que se muestra la cantidad de intentos necesarios para adivinar el número.

## Funcionalidades :game_die:

- **Generación de Número Secreto**: Un número aleatorio es generado y el jugador debe adivinarlo.
- **Verificación de Intentos**: Cada intento es verificado para indicar si el número ingresado es correcto, mayor o menor que el número secreto.
- **Reinicio del Juego**: Permite reiniciar el juego y generar un nuevo número secreto.
- **Evitar Repetición de Números**: Garantiza que los números generados no se repitan hasta que todos los números posibles hayan sido sorteados.

## Estructura del Código :game_die:

1. **Función `asignarTexto(elemento, texto)`**:
    - Asigna el texto a un elemento HTML específico.
  
    ```javascript
    function asignarTexto(elemento, texto) {
        let elementoHTML = document.querySelector(elemento);
        elementoHTML.innerHTML = texto; 
    }
    ```

2. **Función `verificarIntento()`**:
    - Verifica el número ingresado por el usuario.
    - Incrementa el contador de intentos.
    - Indica si el número ingresado es correcto, mayor o menor.
    - Habilita el botón de reinicio.

    ```javascript
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
    ```

3. **Función `limpiar()`**:
    - Limpia el campo de entrada del usuario.

    ```javascript
    function limpiar() {
        document.getElementById('valorUsuario').value = '';
    }
    ```

4. **Función `reiniciarJuego()`**:
    - Reinicia el juego, limpia el campo de entrada y genera un nuevo número secreto.

    ```javascript
    function reiniciarJuego() {
        limpiar();
        intentos = 0;
        numeroSecreto = generarNumeroSecreto();
        asignarTexto('p', 'Indica un número del 1 al 10');
    }
    ```

5. **Función `generarNumeroSecreto()`**:
    - Genera un número secreto aleatorio entre 1 y 10.
    - Asegura que el número no se repita hasta que todos los números posibles hayan sido sorteados.

    ```javascript
    function generarNumeroSecreto() {
        let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
        console.log(numeroGenerado)
        console.log(listaDeNumerosSolteados)

        if (listaDeNumerosSolteados.length == numeroMaximo) {
            asignarTexto('p', 'OH NO. Ya se soltearon todos numeros posibles')
            
        } else {
        
        if (listaDeNumerosSolteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaDeNumerosSolteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    }
    ```

6. **Variables Globales**:
    - `numeroMaximo`: El número máximo posible.
    - `listaDeNumerosSolteados`: Lista de números ya sorteados.
    - `numeroSecreto`: El número secreto actual.
    - `intentos`: El contador de intentos.

    ```javascript
    let numeroMaximo = 10;
    let listaDeNumerosSolteados = []; 
    let numeroSecreto = generarNumeroSecreto();
    let intentos = 0; 
    console.log("El número secreto es:", numeroSecreto);
    ```

7. **Inicialización del Juego**:
    - Asigna los textos iniciales a los elementos HTML correspondientes.

    ```javascript
    asignarTexto('h1', 'Juego del número secreto');
    asignarTexto('p', 'Indica un número del 1 al 10');
    ```

## Instrucciones para Ejecutar el Proyecto :game_die:

1. **HTML**:
    - Crea un archivo HTML que incluya los elementos necesarios (input, botones, etc.) y enlace el archivo JavaScript.

    ```html
    <!DOCTYPE html>
    <html lang="pt-br">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@700&family=Inter:wght@400;700&display=swap"
            rel="stylesheet">
        <link rel="stylesheet" href="style.css">
        <title>JS Game</title>
    </head>

    <body>

        <div class="container">
            <div class="container__contenido">
                <div class="container__informaciones">
                    <div class="container__texto">
                        <h1></h1>
                        <p class="texto__parrafo"></p>
                    </div>
                    <input type="number" id="valorUsuario" min="1" max="10" class="container__input">
                    <div class="chute container__botones">
                        <button onclick="verificarIntento()" class="container__boton">Intentar</button>
                        <button onclick="reiniciarJuego()" class="container__boton" id="reiniciar" disabled>Nuevo juego</button>
                    </div>
                </div>
                <img src="./img/ia.png" alt="Una persona mirando a la izquierda" class="container__imagen-persona" />
            </div>
        </div>

        <script src="ruta/al/archivo.js"></script>
    </body>

    </html>
    ```

