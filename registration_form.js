const inputs = document.querySelectorAll('.input-box input:not([type="date"])');

inputs.forEach(input => {
    const label = input.nextElementSibling;
    input.addEventListener('mouseover', () => {
        label.classList.add('active');
        input.focus();
    });

    input.addEventListener('mouseout', () => {
        if (input.value === '') {
            label.classList.remove('active');

        }
        input.blur();
    })
});

const datePickerIcon = document.querySelector('.date-picker-icon');
const dob = document.querySelector(".DOB");
const doblabel = dob.nextElementSibling;
const dob_cont = document.querySelector(".dob-date");
datePickerIcon.addEventListener('click', function() {
    // Set the value of the input field to the date
    const datePicker = document.createElement('input');
    datePicker.type = 'date';
    datePicker.addEventListener('input', function() {
        dob.value = datePicker.value;
        doblabel.classList.add('active');
        // Remove the date picker element from the DOM
        datePicker.remove();
    });
    datePicker.classList.add("dob-date-picker");
    if (!dob_cont.contains(datePicker)) {
        dob_cont.appendChild(datePicker);
    }
    if (dob.value !== '') {
        doblabel.classList.add(".active");
    } else {
        doblabel.classList.remove('.active')
    }
});



const acceptTermsCheckbox = document.querySelector('.accept-terms');
const submit = document.querySelector(".submit");


// get the form element
const form = document.querySelector('#myForm');

// add submit event listener to the form
form.addEventListener('submit', (event) => {
    // prevent default form submission behavior
    acceptTermsCheckbox.addEventListener('click', () => {
        if (!acceptTermsCheckbox.checked) {
            alert('Please accept the terms and conditions.');
        }
    });
    event.preventDefault();

    // get the username value from the input element
    const username = document.querySelector('#username').value;

    // construct the URL string with the username query parameter
    dob.value = '';
    const url = "congratulations.html?username=" + username;

    // redirect to the target HTML page with the constructed URL string
    window.location.href = url;
});


//Error msgs and Animations

const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");

const err_un = document.querySelector(".error-msg-un");
const err_mail = document.querySelector(".error-msg-email");
const err_pd = document.querySelector(".error-msg-pd");
const err_dob = document.querySelector(".error-msg-dob");

const br_un = document.querySelector(".border-un");
const br_mail = document.querySelector(".border-mail");
const br_pd = document.querySelector(".border-pd");
const br_dob = document.querySelector(".border-dob");



function validateInput(inputElement, errorMessage, borderElement, regexPattern) {
    if (!regexPattern.test(inputElement.value)) {
        errorMessage.style.display = "block";
        borderElement.classList.add("border-err");
    } else {
        errorMessage.style.display = "none";
        borderElement.classList.remove("border-err")
    }
}

password.addEventListener("blur", () => {
    validateInput(password, err_pd, br_pd, /^.{6,}$/);
});

username.addEventListener("blur", () => {
    validateInput(username, err_un, br_un, /^.{5,}$/);
});

email.addEventListener("blur", () => {
    validateInput(email, err_mail, br_mail, /^[a-zA-Z0-9._%+-]+@gmail\.com$/);
});
dob.addEventListener("blur", () => {
        validateInput(dob, err_dob, br_dob, /^(199[1-9]|[2-9]\d{3})\-(0[1-9]|1[012])\-(0[1-9]|[12]\d|3[01])$/);
    })
    // Similarly, add event listeners to other input elements