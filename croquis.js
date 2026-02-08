const fotos = document.querySelectorAll('.foto-croqui');

fotos.forEach(item => {
    item.addEventListener('click', function() {
        this.style.backgroundColor = '#3498db';
    });
});