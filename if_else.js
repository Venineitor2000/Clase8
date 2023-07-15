// a.
var aleatorio = Math.random();
/* if (aleatorio > 0.5) {
  alert('Greater than 0,5');
}else{
  alert('Lower than 0,5'); 
} */

//b.
var Age = parseInt(Math.random() * (100 - 0) + 0);
if (Age < 2) {
  alert('Bebe');
};

if (Age >= 2 && Age <= 12) {
  alert('Niño');
}

if (Age >= 13 && Age <= 19) {
  alert('Adolescente');
}

if (Age >= 20 && Age <= 30) {
  alert('Joven');
}

if (Age >= 31 && Age <= 60) {
  alert('Adulto');
}

if (Age >= 61 && Age <= 75) {
  alert('Adulto mayor');
}

if (Age > 75) {
  alert('Anciano');
}