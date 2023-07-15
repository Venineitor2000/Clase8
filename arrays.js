//a
var arregloA = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
// console.log('Mes 5: ' + arregloA[4] + ' - Mes 11: ' + arregloA[10]);

//b
var arregloB = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(arregloB.sort( function (a,b) {
  return a.localeCompare(b);
}));

//c
var arregloC = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
arregloC.unshift('primero');
arregloC.push('ultimo');
// console.log(arregloC)

//d
var arregloD = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
arregloD.shift();
arregloD.pop();
// console.log(arregloD)

//e
var arregloE = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
arregloE.reverse();
// console.log(arregloE);

//f
var arregloF = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
// console.log(arregloF.join('-'));

//g
var arregloG = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
arregloG = arregloG.slice(4,11);
// console.log(arregloG);