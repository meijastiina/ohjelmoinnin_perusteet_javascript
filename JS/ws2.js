/* Tehtävä 1. ensimmäinen muuttuja */
let x;
x = 5;
document.getElementById('age').innerHTML = x;

/* Tehtävä 2. koiran ikä */
let dogsAge = x*7;
document.getElementById('dogsAge').innerHTML = dogsAge;

/* Tehtävä 3. merkkijonojen yhdistelyä */
document.getElementById('fullname-input').value = document.getElementById('firstname-input').value + ' ' + document.getElementById('lastname-input').value;

/* Tehtävä 4. painikelaskuri */
let counter = 0;
document.getElementById('btnCounter').onclick = function(){ 
    counter++;
    document.getElementById('counter').value = counter;
};

/* Tehtävä 5. yksinkertaistettu laskin. Voit käyttää joko .onclick tai .addEventListener -komentoa */
let result = 0;
document.getElementById('addition').addEventListener("click", function(){ 
    result = Number(document.getElementById('operand1').value) + Number(document.getElementById('operand2').value);
    document.getElementById('result').value = result;
});
document.getElementById('deduction').addEventListener("click", function(){ 
    result = Number(document.getElementById('operand1').value) - Number(document.getElementById('operand2').value);
    document.getElementById('result').value = result;
});
document.getElementById('multiplication').addEventListener("click", function(){ 
    result = Number(document.getElementById('operand1').value) * Number(document.getElementById('operand2').value);
    document.getElementById('result').value = result;
});
document.getElementById('division').addEventListener("click", function(){ 
    result = Number(document.getElementById('operand1').value) / Number(document.getElementById('operand2').value);
    document.getElementById('result').value = result;
});

