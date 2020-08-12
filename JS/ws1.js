/* 1. document.write - Ensimmäinen tehtäväsi on klassinen Hello world, jonka ideana on saada kirjoitettua sivulle jotakin JavaScriptin avulla.*/
document.write("Tehtävä 1. Hello world!");

/* 2. alert - Kokeillaan seuraavaksi tervehtimistä vähän eri tavalla, viestiboksin kautta. */
alert('Tehtävä 2. Hello world!');

/* 3. document.getElementById - Viestin kirjoittaminen haluttuun elementtiin sivulla.*/
document.getElementById('write-here').innerHTML = 'Tehtävä 3. Hello world!';

/* 4. Lukeminen */
document.getElementById('fullname').value = 'Tehtävä 4.' + document.getElementById('firstname').value + ' ' + document.getElementById('lastname').value;