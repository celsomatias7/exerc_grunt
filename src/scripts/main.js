document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('num-qualquer').addEventListener('submit' , function(evento) {
        evento.preventDefault();
        let numeroMaximo = document.getElementById('numero-maximo').value;
        numeroMaximo = parseInt(numeroMaximo);

        let numeroAleatorio = Math.floor(numeroMaximo);
                
        document.getElementById('resultado-valor').innerText = numeroAleatorio
        document.querySelector('.resultado').style.display = 'block'; //para mostrar o resultado apenas após clicar em sortear numero
    })
})