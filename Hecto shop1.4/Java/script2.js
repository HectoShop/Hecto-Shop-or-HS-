 

 
 var foo = "nume si prenume"
console.info(foo)
console.error(foo)
console.log(foo)
console.warn(foo)


var string = 32;
var price = 123
var price = 124;

console.log(price + price2);

var booleanTrue = true;
var booleanFalse = false;

if(booleanTrue == booleanFalse)  {

}
var isnull = null;

var total = price + price2;
function calculTotal(a, b) {
    var total = a + b;
    return total;
}

var total = calculTotal(5, 10);
console.log(total);

// Creati doua variabile nume si prenume let
// Apoi creati o functie care accepta doi parametri si care returneaza un string format din Nume + ' ' + Prenume
// Afisati acest string in consola

let nume = "Amugea";
let prenume = "Alexandru";

function returnFullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}

const FULL_NAME = returnFullName(nume, prenume);
console.log(FULL_NAME);

// Conditionale

const suma = 10;

// Comparatii

5 > 1; // returna true
5 < 1; // returna false
1 >= 1; // return true
2 < 1; // returna false
1 <= 1; // returna true;

1 == 1; // returna true
1 === 1; // returna true 
1 === '1'; // return false 
// && e folosit cand toate conditiile trebuie indeplinite
//  sau daca indeplineste una dintre conditii

if(suma > 5 , suma < 10) {
    alert('Suma este mai mare de 10');
} else if(suma < 5) {
    alert('Suma e mai mica decat 5');
} else {
    alert('Suma e corect');
}

// Conditionale tip switch case

let a = 5;

switch(a) {
    case(6):
        console.log('Variabile este 6');
        break;
    case(5):
        console.log('Variabile este 5');
        break;
    default:
        console.log('Variabile este' + a);
        break;
}

function calculateSum(a, b) {
    return Number(a) + Number(b);
}

let resultButton = document.getElementById('resultButton');
resultButton.addEventListener('click', function(ev){

    let firstNumber = Number(document.getElementById('firstNumber').value);
    let secondNumber = Number(document.getElementById('secondNumber').value);
    const total = calculateSum(firstNumber, secondNumber);

    console.log(typeof firstNumber);

    if(firstNumber >= 0 && secondNumber >= 0) {
        // Daca numerele sunt completate afisati rezultatul
        document.getElementById('result').innerHTML = total;
        document.getElementById('warning-message').innerHTML = "";
    } else {
        // Altfel afisam o eroare 
        document.getElementById('warning-message').innerHTML = "Trebuie completate ambele numere";
    }
    // Adaugati conditionale sa faceti verificarea ca userul a completat
    // Ambele numere
    // Daca nu a completat afisati un mesaj de eroare cu rosu sub rezultat
    // Care sa zica Trebuie completate ambele numere



    // Nu mai trebuie rulata bucata aceasta de cod daca nu sunt completate
    // ambele numere
})
var f = 's';
f.includes