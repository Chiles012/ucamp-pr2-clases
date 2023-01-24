const buttonAddH1 = document.getElementById('add-h1');
const buttonAddP = document.querySelector('.add-p');
const body = document.querySelector('body');

document.addEventListener("DOMContentLoaded", () => {

    /*var calificacion = prompt("Ingrese una calificacion");

    alert(obtenerCalificacion(Number(calificacion)));*/

    buttonAddH1.addEventListener("click", (e) => {
        console.log(e);
        body.innerHTML += '<h1>Encabezado</h1>'
    });

    console.log(buttonAddP)

    buttonAddP.addEventListener("click", (e) => {
        console.log(e);
        body.innerHTML += '<p>Parrafo</p>'
    })

});

function buttonAlert() {
    alert('Hola mundo!')
}

const fibonacci = (n /* indice */) => {
    // [0,1,1,2,3,5,8,13, ....];
    let serie_fibonacci = [0,1] // posicion 0 = 0 y posicion 1 = 1; [0,1,1]
    n = Number(n); // NaN

    if (n === 0 || n === 1) {
        return serie_fibonacci[n]
    } 

    for (let i = 0; i <= n; i++) {
        if (i === 0 || i === 1) {
            continue;
        } else {
            const n1 = serie_fibonacci[i - 1];
            const n2 = serie_fibonacci[i - 2];
            serie_fibonacci.push(n1 + n2);
            //serie_fibonacci[i] = n1 + n2;
        }
    }

    console.log(serie_fibonacci);
    return serie_fibonacci[n]
}

const obtenerCalificacion = (n) => { // 0 - 10 , A B C, 0-100
    /*
        Rangos 
        Mala = 0 - 5
        Regular = 6 - 7
        Buena = 8 - 10
    */
    if (n >= 0 && n <= 5) {
        return 'Tu calificacion es mala :(';
    } else if (n >= 6 && n <= 7) {
        return 'Tu calificacion es regular.';
    } else if (n >= 8 && n <= 10) {
        return 'Tu calificacion es buena :)';
    } else {
        return 'Tu calificacion no corresponde a los rangos, vuenva a intentar';
    }
}
