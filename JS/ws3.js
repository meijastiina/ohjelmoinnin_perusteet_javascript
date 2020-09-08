// Tehtävä 1. ensimmäinen ehtolause 
// Luo muuttuja age ja anna sille arvoksi 5.
let age = 5;
// Kirjoita ehtolause, jossa testataan age-muuttujan arvon perusteella onko käyttäjä täysi-ikäinen.
if(age < 18 ) {
    // Tulosta alla olevaan laatikkoon "Olet alaikäinen", jos muuttujan arvo on pienempi kuin 18.
    document.getElementById('age').innerHTML = "Olet alaikäinen";
}

// Tehtävä 2. Ensimmäisen ehtolauseen tarkastus
// Muuta age-muuttujan arvoksi 20 ja varmista, että ehtolauseesi toimii.
let age2 = 18;
// Kirjoita ehtolause, jossa testataan age-muuttujan arvon perusteella onko käyttäjä täysi-ikäinen.
if(age2 < 18 ) {
    // Tulosta alla olevaan laatikkoon "Olet alaikäinen", jos muuttujan arvo on pienempi kuin 18.
    document.getElementById('age2').innerHTML = "Olet alaikäinen";
}

// 3. Ensimmäinen else-lause
// Kirjoita ehtolause, jossa testataan age-muuttujan arvon perusteella onko käyttäjä täysi-ikäinen.
if(age2 < 18 ) {
    // Tulosta alla olevaan laatikkoon "Olet alaikäinen", jos muuttujan arvo on pienempi kuin 18.
    document.getElementById('age3').innerHTML = "Olet alaikäinen";
} else {
    document.getElementById('age3').innerHTML = "Olet täysi-ikäinen";
}

// 4. Ensimmäinen else-if-lause
// Lisää ehtolauseeseesi elseif-haara, jolla tulostetaan "Olet juuri saavuttanut täysi-ikäisyyden", jos age-muuttujan perusteella käyttäjä on täysi-ikäinen.
if(age2 < 18 ) {
    // Tulosta alla olevaan laatikkoon "Olet alaikäinen", jos muuttujan arvo on pienempi kuin 18.
    document.getElementById('age4').innerHTML = "Olet alaikäinen";
} else if(age2 == 18 ) {
    // Tulosta alla olevaan laatikkoon "Olet juuri saavuttanut täysi-ikäisyyden", jos muuttujan arvo on pienempi kuin 18.
    document.getElementById('age4').innerHTML = "Olet juuri saavuttanut täysi-ikäisyyden";
} else {
    document.getElementById('age4').innerHTML = "Olet täysi-ikäinen";
}

// Tehtävä 5. Vuorokauden ajan mukainen tervehdys
// Kirjoita ehtolause, joka katsoo kellon ajan perusteella tulostetaanko "Huomenta", "Päivää", "Iltaa" vai "Hyvää yötä".
// Luodaan muuttuja kellonajalle
let currentHours = new Date().getHours();
// Haetaan HTML-elementti muuttujaan (ei pakollista)
let greetingElement = document.getElementById('greeting');

if(currentHours > 20 ) {
    greetingElement.innerHTML = "Hyvää yötä";
} else if (currentHours > 18 ) {
    greetingElement.innerHTML = "Iltaa";
} else if (currentHours > 12 ) {
    greetingElement.innerHTML = "Päivää"
} else {
    greetingElement.innerHTML = "Huomenta"
}

// Tehtävä 6. Lomakkeen tarkastus
/* Kirjoita alla olevalle lomakkeelle yksinkertainen tarkastus. Kun käyttäjä painaa Lähetä-painiketta, tarkista, että kaikissa kentissä on tietoa. Jos kaikissa kentissä on tietoa, näytä alert-box, jossa on viesti "Lomake lähetetty onnistuneesti", jos ei näytä viesti "Lomakkeella virhe! Täytä kaikki kentät" */
document.getElementById('userForm').onsubmit = function() {
    // Jos etunimi JA sukunimi JA ikä on syötetty
    if(document.getElementById('firstname').value.length > 0 && document.getElementById('lastname').value.length > 0 && document.getElementById('ageInput').value.length > 0) {
        alert('Lomake lähetetty onnistuneesti');
        return true; // Lomake ok -> voidaan lähettää (palautetaan true eli tosi)
    } else {
        alert('Lomakkeella virhe! Täytä kaikki kentät');
        return false; // Lomake ei ok -> Ei voida lähettää (palautetaan false eli epätosi)
    }
}