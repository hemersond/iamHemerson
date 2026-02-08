window.onload = function() {
    const estrelas = document.getElementById('mockup-estrelas');
    const alice = document.getElementById('mockup-alice');
    const foto = document.getElementById('animar-foto');
    const texto = document.getElementById('animar-texto');

    setTimeout(() => {
        estrelas.classList.add('mostrar');
        alice.classList.add('mostrar');
        foto.classList.add('mostrar');
        texto.classList.add('mostrar');
    }, 150);
};