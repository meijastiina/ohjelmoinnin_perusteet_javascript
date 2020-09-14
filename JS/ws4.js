/*1. Ensimmäinen toistolause

    Alla olevalle lomakkeelle käyttäjä syöttää toistettavan lauseen ja lukumäärän montako kertaa lausetta halutaan syöttää. Sen jälkeen painiketta painamalla allaolevaan laatikkoon generoidaan syötteiden perusteella teksti.
*/
let button = document.getElementById('generate');
let generatedText = document.getElementById('generatedText');
button.onclick = function() {
    let sentence = document.getElementById('sentence').value;
    let times = Number(document.getElementById('times').value);
    for (let i = 0; i < times; i++) {
        generatedText.innerHTML += " " + sentence;
    }
    return false;
}
// Tehtävä 2. Lomakkeen tarkastus
/* Kirjoita alla olevalle lomakkeelle yksinkertainen tarkastus. Kun käyttäjä painaa Lähetä-painiketta, tarkista, että kaikissa kentissä on tietoa. Jos kaikissa kentissä on tietoa, näytä alert-box, jossa on viesti "Lomake lähetetty onnistuneesti", jos ei näytä viesti "Lomakkeella virhe! Täytä kaikki kentät". Käytä syötekenttien läpikäymiseen silmukkaa ja merkitse ne kentät punaisilla reunuksilla, joista puuttuu arvo. */
document.getElementById('userForm').onsubmit = function() {
    // Haetaan kaikki input-tyyppiset elementit. Muista että tämä palauttaa kaikki input-elementit.
    let inputs = document.getElementsByTagName("input");
    // Tarvitaan muuttuja, jossa pidetään kirjaa siitä onko lomake virheetön vai ei. Alustetaan se trueksi
    let formOK = true;
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value.length > 0) {
            //Syötekentässä tietoa, kenttä ok
            // -> poistetaan varalta punareunus jos se on aiemmin lisätty
            inputs[i].classList.remove("red-border");
        } else {
            // Syötekentässä ei ole tietoa 
            // -> päivitetään muuttujan arvoksi false
            formOK = false;
            // -> merkataan kenttä punaisilla reunuksilla
            inputs[i].classList.add("red-border");
        }
    }
    if(formOK) {
        alert('Lomake lähetetty onnistuneesti');
        return true; // Lomake ok -> voidaan lähettää (palautetaan true eli tosi)
    } else {
        alert('Lomakkeella virhe! Täytä kaikki kentät');
        return false; // Lomake ei ok -> Ei voida lähettää (palautetaan false eli epätosi)
    }
}

/* 3. Tehtävälistan tulostus
Tulostaa allaolevaan laatikkoon listana tämän sivun tehtävät. */
// Haetaan kaikki main-elementin sisällä olevat h2-elementit
let tasks = document.querySelectorAll('main h2');
// Luodaan uusi ul-elementti. Huom. tämä ei vielä lisää sitä DOMiin.
let list = document.createElement("ul");
// Loopataan läpi kaikki main-elementin sisällä olevat h2-elementit.
for (let i = 0; i < tasks.length; i++) {
    // Luodaan uusi li-elementti. Huom. tämä ei vielä lisää sitä DOMiin.
    let item = document.createElement("li");
    // Asetetaan li-elementille h2-elementiltä teksti
    item.innerHTML = tasks[i].innerHTML;
    // Lisätään li-elementti ul-listaan.
    list.appendChild(item);
}
// Lisätään lista taskList-elementille. 
document.getElementById('taskList').appendChild(list);

/*
4. Syyskuu 2020 tulostus
Tulosta allaolevaan laatikkoon syyskuun 2020 kalenterinäkymä.
*/
// Luodaan table-elementti kalenteria varten
let calendar = document.createElement("table");
// Luodaan muuttuja, jossa syyskuun päivien lukumäärä
let daysInMonth = 30;
// Luodaan muuttuja, jossa tieto mikä viikonpäivä on kuukauden ensimmäinen
let firstDay = new Date('2020/09/01');
let firstWeekday = firstDay.getDay();
// Luodaan muuttuja, jossa pidetään kirjaa siitä minkä päivän kohdalla ollaan menossa ja alustetaan se kuukauden ensimmäiseksi päiväksi.
let currentDay = firstDay.getDate();
// Luodaan taulukkoon solut niin että rivejä tulee viisi 
for (let rowNumber = 0; rowNumber < 5; rowNumber++) {
    // Luodaan tr-elementti jokaiselle riville
    let row = document.createElement('tr');
    // Luodaan taulukkoon solut niin, että jokaisella rivillä on seitsemän solua
    for (let col = 0; col < 7; col++) {
        // Luodaan td-elementit
        let cell = document.createElement('td');
        // Jos ollaan ensimmäisellä rivillä ja sarakkeella joka on pienempi kuin kuukauden ensimmäinen päivä (eli viikon päivät jotka ovat edellisen kuukauden puolella) jätetään solu tyhjäksi
        if ( !(rowNumber == 0 && col < firstWeekday)) {
            // Ja kunhan käsiteltävä päivä on pienempi kuin kuukauden päivien lukumäärä
            if (currentDay <= daysInMonth) {
                // Tulostetaan soluun päivä
                cell.innerHTML = currentDay;
                currentDay++;
            }
        } 
        // Lisätään solut riville
        row.appendChild(cell);
    }
    // Lisätään rivi kalenteriin (table-elementtiin).
    calendar.appendChild(row);
}
// Lisätään kalenteri sille annettuun paikkaan.
document.getElementById('september2020').appendChild(calendar);

/*
5. Salasana
Pyydä käyttäjältä salasanaa ja päästä käyttäjä sivulle vasta kun salasana on oikein.
*/
// Kovakoodataan oikea salasana tähän (näin ei siis oikeasti tietenkään tehtäisi)
let password = "JavaScriptIsFun!"
// Luodaan muuttuja salasanaa varten
let givenPassword;
do {
    // Pyydetään käyttäjältä salasana
    givenPassword = prompt("Anna salasanasi");
} while( password != givenPassword); // Pyydetään salasanaa niin kauan kunnes se on oikein.