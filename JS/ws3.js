/* 1. Selaimen tiedot
Tulosta allaolevaan laatikkoon mitä selainta käyttäjä käyttää ja millä sivulla hän on. */
document.getElementById("browserInfo").innerHTML = "You're using " + navigator.appName + ". The page you're in is " + location;

/* 2. Ohjauspainikkeet
Toteuta allaoleville painikkeille toiminnallisuus, niin että vasemman puoleinen palaa edelliselle sivulle */
document.getElementById("back").onclick = function() {
    history.back();
}
/* ja oikeanpuolimmainen siirtyy Iltalehden sivuille.*/
document.getElementById("next").onclick = function() {
    location.href = "http://www.iltalehti.fi";
}

/* 3. Löydä elementti
Harjoittele DOM:n käyttöä etsimällä seuraavat elementit seuraavilla metodeilla:

Etsi elementti, jonka id on eka ja muuta sen sisällöksi "Minut löydettiin ID:n perusteella." */
document.getElementById("eka").innerHTML = "Minut löydettiin ID:n perusteella.";

/* Etsi elementti, jonka id on eka ja muuta sen luokaksi bordered. */
document.getElementById("eka").className = "bordered";

/* Etsi h1-elementti ja muuta sen sisällöksi: "Minä olen h1-elementti." */
document.getElementsByTagName("h1")[0].innerHTML = "Minä olen h1-elementti.";

/* Etsi kaikki elementit, joilla on luokka bordered ja lisää niistä ensimmäiselle luokaksi red-border." */
document.getElementsByClassName("bordered")[0].classList.add("red-border");

/* 4. Lisää elementti
Lisää allaolevaan laatikkoon uusi span-elementti, jolla on punaiset kehykset ja sisältönä "Sain lisättyä tämän elementin tähän". */
let newElement = document.createElement("span");
newElement.className = "red-border";
newElement.innerHTML = "Sain lisättyä tämän elementin tähän.";
document.getElementById("addElementHere").appendChild(newElement);