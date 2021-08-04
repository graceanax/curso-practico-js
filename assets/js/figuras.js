const resultTagCuadrado = document.getElementById("ResultCuadrado");
const resultTagCirculo = document.getElementById("ResultCirculo");
const resultTagTriangulo = document.getElementById("ResultTriangulo");
// perímetro cuadrado
function perimetroCuadrado(lado) {
  return lado * 4;
}
// área cuadrado
function areaCuadrado(lado) {
  return lado * lado;
}
// perímetro tríangulo
function perimetroTriangulo(lado1, lado2, base){
  return lado1 + lado2 + base;
}
// área tríangulo
function areaTriangulo (base, altura) {
  return (base*altura)/2;
}
// Diámetro círculo
function diametroCirculo (radio) {
  return radio*2
}
// Circúnferencia
function perimetroCirculo (radio) {
  const diametro = diametroCirculo(radio);
  return diametro * Math.PI;
}
// Área círculo
function areaCirculo (radio) {
 return (radio*radio) * Math.PI;
}

// Interactuando con HTML Cuadrado
function calcularPerimetroCuadrado () {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;
  const perimetro = perimetroCuadrado(value);
  resultTagCuadrado.innerHTML = perimetro;
}
function calcularAreaCuadrado () {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;
  const area = areaCuadrado(value);
  resultTagCuadrado.innerHTML = area;
}
// Interactuando con HTML Cuadrado
function calcularPerimetroCirculo() {
  const input = document.getElementById("InputCirculo");
  const value = input.value;
  const perimetro = perimetroCirculo(value);
  resultTagCirculo.innerHTML = perimetro.toFixed(2);
}
function calcularAreaCirculo() {
  const input = document.getElementById("InputCirculo");
  const value = input.value;
  const area = areaCirculo(value);
  resultTagCirculo.innerHTML = area.toFixed(2);
}
// Interactuando con HTML Tríangulo
function calcularPerimetroTriangulo() {
  const inputBase = document.getElementById("InputTrianguloBase");
  const inputLado1 = document.getElementById("InputTrianguloLado1");
  const inputLado2 = document.getElementById("InputTrianguloLado2");
  const valueBase = parseInt(inputBase.value);
  const valueLado1 = parseInt(inputLado1.value);
  const valueLado2 = parseInt(inputLado2.value);
  const perimetro = perimetroTriangulo(valueBase, valueLado1, valueLado2);
  resultTagTriangulo.innerHTML = perimetro;
}
function calcularAreaTriangulo() {
  const inputBase = document.getElementById("InputTrianguloBase");
  const inputAltura = document.getElementById("InputTrianguloAltura");
  const valueBase = inputBase.value;
  const valueAltura = inputAltura.value;
  const area = areaTriangulo(valueBase, valueAltura);
  resultTagTriangulo.innerText = area.toFixed(2);
}