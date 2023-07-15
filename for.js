//a
var palabras = ['hola','amigo','mio','como','vas'];
for (let i = 0; i < palabras.length; i++) {
  // alert(palabras[i]);
};

//b
for (let i = 0; i < palabras.length; i++) {
  var palabra = palabras[i].substring(0,1).toUpperCase();
  // console.log(palabra + palabras[i].substring(1));
}

//c
var sentence = ''; 
for (let i = 0; i < palabras.length; i++) {
  sentence += palabras[i] + ' ';
}
// alert(sentence);

//d
for (let i = 0; i < 10; i++) {
  arregloLlenar.push(i)
}
// console.log(arregloLlenar)