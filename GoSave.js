// Dette er vores Javascript
// Denne funktion åbner en ny side i samme vindue ved tryk på button. en mulig løsning til vores buttons
function openPage() {
    var myWindow = window.open("", "_self");
    myWindow.document.write("<p>I replaced the current window.</p>");
}

