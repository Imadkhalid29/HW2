/*
Name: Imad Khalid
Date created: February 8, 2025
Date last edited: February 8, 2025
Version: 1.0
Description: Homework 1 JS Patient Form
*/

//dynamic date js code
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;

//name slider js code
let slider = document.getElementById("range");
    let output = document.getElementById("range-slider");
    output.innerHTML = slider.value;

    slider.oninput = function () {output.innerHTML = this.value;};