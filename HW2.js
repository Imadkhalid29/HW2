/*
Name: Imad Khalid
Date created: February 8, 2025
Date last edited: February 8, 2025
Version: 1.0
Description: Homework 2 JS Patient Form
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

//dob validation
function validateDob() {
    dob = document.getElementById("dob");
    let date = new Date(dob.value);
    let maxDate = new Date().setFullYear(new Date().getFullYear() - 120);

    if (date > new Date()) {
        document.getElementById("dob-error").innerHTML = 
        "Date can't be in the future";
        dob.value = "";
        return false;
    } else if (date < new Date(maxDate)) {
        document.getElementById("dob-error").innerHTML = 
        "Date can't be more than 120 years ago";
        dob.value = "";
        return false;
    } else {
        document.getElementById("dob-error").innerHTML = "";
        return true;
    }
}
//ssn validation
function validateSsn() {
    const ssn = document.getElementById("ssn").value;
    const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

    if (!ssnR.test(ssn)) {
        document.getElementById("ssn-error").innerHTML = 
        "Please enter a valid SSN";
        return false;
    } else {
        document.getElementById("ssn-error").innerHTML = "";
        return true;
    }
}
//zipcode validation
function validateZcode() {
    const zipInput = document.getElementById("zcode");
    let zip = zipInput.value.replace(/[^\d-]/g, "");

    if (!zip) {
        document.getElementById("zcode-error").innerHTML = 
        "Zip code can't be blank";
        return false;
    }

    if (zip.length > 5) {
        zip = zip.slice(0, 5) + "-" + zip.slice(5, 9);
    } else {
        zip = zip.slice(0, 5);
    }

    zipInput.value = zip;
    document.getElementById("zcode-error").innerHTML = "";
    return true;
}
//email validation
function validateEmail(email) {
    if (!email.trim()) {
        console.log("Email cannot be blank.");
        return false;
    }
//email pattern
    var emailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!emailR.test(email)) {
        console.log("Please enter a valid email address.");
        return false;
    }

    console.log("Email is valid.");
    return true;
}
//phone validation
function validatePhone(phone) {
    // Remove all non-numeric characters
    let cleanedPhone = phone.replace(/\D/g, '');

    // Check if input is blank
    if (!cleanedPhone.trim()) {
        console.log("Phone number cannot be blank.");
        return false;
    }

    // Ensure it has exactly 10 digits
    if (cleanedPhone.length !== 10) {
        console.log("Please enter a valid 10-digit phone number.");
        return false;
    }

    // Format phone number as 000-000-0000
    let formattedPhone = cleanedPhone.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");

    console.log("Formatted Phone Number:", formattedPhone);
    return formattedPhone;
}
//user id validation
if (userId.value.trim() === "") {
    document.getElementById("uid-error").innerHTML = "User ID can't be blank";
    errors.push("User ID can't be blank");
} else {
    document.getElementById("uid-error").innerHTML = "";
}

//password validation
let errorMessage = [];
    if (!password.value.match(/[a-z]/)) errorMessage.push("Enter at least one lowercase letter");
    if (!password.value.match(/[A-Z]/)) errorMessage.push("Enter at least one uppercase letter");
    if (!password.value.match(/[0-9]/)) errorMessage.push("Enter at least one number");
    if (!password.value.match(/[!\@#\$%&*\-_\\.+\(\)]/)) errorMessage.push("Enter at least one special character");
    if (password.value.includes(userId.value)) errorMessage.push("Password can't contain user ID");

    if (errorMessage.length > 0) {
        document.getElementById("pword-error").innerHTML = errorMessage.join("<br>");
        errors.push(...errorMessage);
    } else {
        document.getElementById("pword-error").innerHTML = "";
    }

//confirmed password validation
if (password.value !== confirmPassword.value) {
    document.getElementById("pword2-error").innerHTML = "Passwords don't match";
    errors.push("Passwords don't match");
} else {
    document.getElementById("pword2-error").innerHTML = "";
}

if (errors.length > 0) {
    event.preventDefault(); // Prevent form from submitting
}

//review button js code
function reviewInput() {
    var formcontent = document.getElementById("signup");
    var formoutput = `<table class='review-table'>
                        <tr><th colspan='2'>Review Your Information:</th></tr>`;

    for (let i = 0; i < formcontent.elements.length; i++) {
        let input = formcontent.elements[i];

        if (input.type === "button" || input.type === "submit" || input.type === "reset") {
            continue; // Ignore buttons
        }

        if (input.type === "checkbox" || input.type === "radio") {
            if (input.checked) {
                formoutput += `<tr><td>${input.name}</td><td>${input.value}</td></tr>`;
            }
        } else if (input.value.trim() !== "") {
            formoutput += `<tr><td>${input.name}</td><td>${input.value}</td></tr>`;
        }
    }

    formoutput += "</table>";

    // Display the output inside the review box
    document.getElementById("showInput").innerHTML = formoutput;
}

//remove review data js code
function removeReview() {
    document.getElementById("showInput").innerHTML = "";
}