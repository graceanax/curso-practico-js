function calcularMediaAritmetica (lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

function esPar (num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function calcularMediana (lista) {
    const listaOrdenada = lista.sort(function (a,b) {
        return a - b;
    });
    const mitadListaOrdenada = parseInt(listaOrdenada.length / 2);
    
    let mediana;

    if (esPar(listaOrdenada.length)) {
        const elemento1 = listaOrdenada[mitadListaOrdenada];
        const elemento2 = listaOrdenada[mitadListaOrdenada-1]; 
        const promedio = calcularMediaAritmetica([elemento1, elemento2]);
        mediana = promedio;
    } else {
        mediana = listaOrdenada[mitadListaOrdenada]
    }

    return mediana;

}

