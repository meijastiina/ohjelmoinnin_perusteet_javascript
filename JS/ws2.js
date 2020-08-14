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
document.getElementById('btnCounter').addEventListener("click", function(){ 
    counter++;
    document.getElementById('counter').value = counter;
});

