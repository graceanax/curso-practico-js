const resultTagCuadrado = document.getElementById("ResultCuadrado");
const resultTagCirculo = document.getElementById("ResultCirculo");
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