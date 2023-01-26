const input_nombre = document.querySelector('#nombre');
const button_submit = document.querySelector('#add');
const content = document.querySelector('.content');

document.addEventListener("DOMContentLoaded", function() {

    const nombres = JSON.parse(localStorage.getItem('nombres'));

    // null = false !false = true
    if (!nombres) {
        const p = document.createElement('p');
        const text = document.createTextNode('No hay elementos')
        p.appendChild(text)
        content.appendChild(p)
    } else {
        if (nombres.length > 0) {
            for ( let i = 0; i < nombres.length; i++ ) {
                const p = document.createElement('p');
                const text = document.createTextNode(nombres[i])
                p.appendChild(text)
                content.appendChild(p)
            }
        } else {
            const p = document.createElement('p');
            const text = document.createTextNode('No hay elementos')
            p.appendChild(text)
            content.appendChild(p)
        }
    }

    button_submit.addEventListener('click', function() {
        const nombres = JSON.parse(localStorage.getItem('nombres')) || [];
        const nuevoNombre = input_nombre.value;
        nombres.push(nuevoNombre);
        localStorage.setItem('nombres', JSON.stringify(nombres));

        content.innerHTML = '';

        for ( let i = 0; i < nombres.length; i++ ) {
            const p = document.createElement('p');
            const text = document.createTextNode(nombres[i])
            p.appendChild(text)
            content.appendChild(p)
        }
    })
   
});
