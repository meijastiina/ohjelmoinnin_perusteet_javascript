
// Show message when input value changes
document.getElementById('inputMessage').onchange = function() {
    // If at least 3 characters entered, show message
    if (document.getElementById('inputMessage').value.length >= 3) {
        document.getElementById('messageSpan').innerHTML = document.getElementById('inputMessage').value;
    } else {
        // else clear text
        document.getElementById('messageSpan').innerHTML = "";
    }
}
// Show message when button is clicked
document.getElementById('showMessage').onclick = function() {
    // If at least 3 characters entered, show message
    if (document.getElementById('inputMessage').value.length >= 3) {
        document.getElementById('messageSpan').innerHTML = document.getElementById('inputMessage').value;
    } else {
        // else clear text
        document.getElementById('messageSpan').innerHTML = "";
    }
}
// Clear message when button is clicked
document.getElementById('clearMessage').onclick = function() {
    document.getElementById('messageSpan').innerHTML = "";
}