const resultPrice = document.getElementById("ResultPrice");
// función cálculo de precio con descuento
function calcularPrecioConDescuento (precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function obtenerPrecioConDescuento () {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
    console.log(
        {
            priceValue,
            discountValue,
            precioConDescuento
        }
    )
    resultPrice.innerText = precioConDescuento.toFixed(2);
}
