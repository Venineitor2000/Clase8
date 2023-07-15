//a
function suma(a,b) {
    return a + b;
  }
  var resultado = suma(10,20)
  // console.log(resultado)
  
  var suma1 = function (n1,n2) {
    return n1 + n2;
  }
  var r1 = suma1(2,8);
  var r2 = suma(-1,-6);
  var r3 = suma('2',2);
  var r4 = suma(1,true);
  // console.log(r1,r2,r3,r4);
  
  //b
  function dosValores(a,b) {
    if (typeof a !== Number || typeof b !== Number ) {
      // alert('Los valores deben ser numericos');
      return NaN
    }
    return a + b;
  }
  var resultado2 = dosValores('a',20)
  // console.log(resultado2)
  
  //c
  function validateInteger(num) {
    if (Number.isInteger(num)) {
      return true;
    };
    return false
  };
  // console.log(validateInteger(0.5));
  
  //d
  function ejercicio6(a,b) {
    if (isNaN(a) || isNaN(b) ) {
      alert('Los valores deben ser numericos');
      return NaN
    }else{
      validacion(a,b);
    }
  }
  
  function validacion(num1,num2) {
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
      alert('Hay decimales');
      var resultado = 'Numeros convertidos: ' + parseInt(num1) + ' - ' + parseInt(num2);
      console.log(resultado)
      return resultado;
    }
  }
  
  var mostrarValidacion = ejercicio6(10.1,20);