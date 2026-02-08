window.addEventListener('load', () => {
    const elementos = [
        document.getElementById('fundo-trabalhos'),
        document.getElementById('animar-texto'),
        document.getElementById('animar-foto')
    ];

    elementos.forEach(el => {
        if (el) el.classList.add('mostrar');
    });
});