
var carritoElemento = document.getElementById('carrito');

var productos = document.getElementsByClassName('producto');

var valorCarrito = 0;

for (var i = 0; i < productos.length; i++) {
    productos[i].addEventListener('click', function() {

        var precio = parseFloat(this.getAttribute('data-precio'));

        valorCarrito += precio;

        carritoElemento.textContent = 'Carrito: ' + valorCarrito.toFixed(2);
    });
}


