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