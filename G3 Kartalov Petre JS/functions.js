// sayHello(), zagradite znacat deka nesto primame. Nekoj input ili parametri. Mora nesto da prima funkcijata.
// Parametar e toa sto e vo imeto na funkcijata(vo definiranjeto). Argument e vrednosta sto se prakja na funkcijata.
// Parametar se odnesuva na varijablata.

// return in a function return your values so you can use them elsewhere. Otherwise the values stay there and can't
// be used.
function sayHello(name) {
  alert(`Hello ${name}`);
}

sayHello("Skadi");

function myFunction() {
  let myVar = x * y;
  console.log(myVar);
  return myVar;
}

let result = myFunction(4, 7);
myFunction(2, 6);

// Se so treba funkcijata da primi, se stava vo parametri. Nikogas ne se koristat vrednosti od nadvor vnatre vo
// scope-ot na funkcijata. Samo moze da se napravat novi varijabli vnatre i da se dodavaat parametri.
