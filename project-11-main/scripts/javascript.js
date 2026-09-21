/*
    Author: Elden Pope
    Course: CIS133DA
    Section: 11424
*/

// Displays the date the document was last modified.
document.getElementById("lastModified").innerHTML = document.lastModified;

// Displays a message when the form is submitted.
function formSubmit() {
    alert("Your form has been submitted.");
}

// Shows the reset message when the form is reset.
function formReset() {
    document.getElementById("resetMessage").style.visibility = "visible";
}