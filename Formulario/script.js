document.addEventListener('DOMContentLoaded', function() {
    const botonModoOscuro = document.getElementById('modoOscuroBtn');
    const body = document.body;

    botonModoOscuro.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
    });
});
