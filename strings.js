// a.
var convertirAMayuscula = 'hola';
convertirAMayuscula = convertirAMayuscula.toUpperCase(); 

// b.
var ejerciciob = 'caramelosdedurazno';
var resultado;
resultado = ejerciciob.substring(0,5);

// c.
var ejercicioc = 'caramelosdedurazno';
var resultadoc;
resultadoc = ejercicioc.substring(ejercicioc.length - 3);


// d. 
var ejerciciod = 'caramelosdedurazno';
var mayuscula = ejerciciod.substring(0,1).toUpperCase();
var minuscula = ejerciciod.substring(1).toLocaleLowerCase();
var resultadoD = mayuscula + minuscula;

// e.
var ejercicioe = 'hola amigo mio';
var resultadoe = ejercicioe.indexOf(' ');

// f. 
var ejerciciof = 'hola amigo';
var palabra1 = ejerciciof.substring(0,ejerciciof.indexOf(' ')); 
var palabra2 = ejerciciof.substring(ejerciciof.indexOf(' ') + 1); 
var primer_mayuscula = palabra1.substring(0,1).toUpperCase(); 
var segunda_mayuscula = palabra2.substring(0,1).toUpperCase(); 
var resultado;
resultado = primer_mayuscula + palabra1.substring(1).toLowerCase() + ' ' + segunda_mayuscula + palabra2.substring(1).toLowerCase()