/* DECLARAMOS */
let btnPropina = document.getElementById("btnPropina")
let btnTotal = document.getElementById("btnTotal")
let btnDividir = document.getElementById("btnDividir")
let asignarTotal = document.getElementById("AsignarTotal")
let Input = document.getElementById("input")
let total = 0
let precioAsignado = 0
let porcentajePropina = 0

/* EVENTOS */
btnTotal.addEventListener("click", function() {
    if (precioAsignado === 0) {
        Swal.fire({
            icon: 'error',
            title: 'Precio no asignado',
            text: 'Por favor, asigna un precio antes de calcular la propina',
            showConfirmButton: false,
            timer: 2500
        })
    } else if (porcentajePropina === 0) {
        Swal.fire({
            icon: 'error',
            title: 'Porcentaje no asignado',
            text: 'Por favor, selecciona un porcentaje de propina antes de calcular',
            showConfirmButton: false,
            timer: 2500
        })
    } else {
        reciboTotal()
    }
})

btnPropina.addEventListener("click", function() {
    reciboPropina()
})

asignarTotal.addEventListener("click", function() {
    asignarTota()
})

btnDividir.addEventListener("click", function() {
    dividirCuenta()
})

Input.addEventListener("input", function() {
    precioAsignado = parseFloat(this.value)
})

/* BUCLE */
let porcentajesRadios = document.getElementsByName("porcentaje")
for (let i = 0; i < porcentajesRadios.length; i++) {
    porcentajesRadios[i].addEventListener("change", function() {
        porcentajePropina = parseFloat(this.value)
    })
}

/* ALERTS + FUCTIONS */
function reciboTotal() {
    let propina = (precioAsignado * porcentajePropina) / 100
    total = precioAsignado + propina
    
    Swal.fire({
        icon: 'info',
        title: 'Precio final',
        text: 'El precio final es $' + total,
        showConfirmButton: false,
        timer: 3500
    })
    
}
function reciboPropina() {
    let propina = (precioAsignado * porcentajePropina) / 100
    propina = propina
    Swal.fire({
        icon: 'info',
        title: 'Propina',
        text: 'La propina es $' + propina,
        showConfirmButton: false,
        timer: 3500
    })
}

function asignarTota() {
    Swal.fire({
        icon: 'success',
        title: 'Precio Asignado',
        text: 'El precio final asignado fue $' + precioAsignado,
        showConfirmButton: false,
        timer: 2500
    })
}

function dividirCuenta() {
    let propina = (precioAsignado * porcentajePropina) / 100
    
    Swal.fire({
        title: 'Numero de personas',
        input: 'text',
        showCancelButton: true,
    }).then((result) => {
        if (result.isConfirmed) {
            let numeroPersonas = parseInt(result.value)
            if (!isNaN(numeroPersonas)) {
                let total = (precioAsignado + propina) / numeroPersonas
                Swal.fire({
                    icon: 'success',
                    title: 'Precio por persona',
                    text: 'El total por persona es: ' + total + '$', 
                    timer: 3000
                })
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Hay un problema aqui',
                    text: 'Numero de personas no valido', 
                    timer: 3000
                })
            }
        }
    })
}

