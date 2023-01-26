const butonCancel = document.querySelector('.buton-cancel')
const buton2 = document.querySelectorAll('.buton')[1];
const date = document.querySelector('#date')

document.addEventListener("DOMContentLoaded", function() {

    const paragraph = document.createElement('p');
    const text = document.createTextNode('Hola mundo!');

    paragraph.appendChild(text);

    butonCancel.appendChild(paragraph);

    butonCancel.classList.add('buton');

    date.addEventListener('change', function(e) {
        console.log(e.target.value);
    });

    buton2.addEventListener("click", function(e) {
        console.log(e)
        console.log('boton 2');
    })

});

function alertJS(message) {
    alert(message);
}
