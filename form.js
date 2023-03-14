const regb = document.getElementById("register-button1");
const form = document.getElementById("form");
const wind = document.getElementById("wind");
const show = document.getElementById("showpass")
const pass = document.getElementById("userPassword1")
const inputemail = document.getElementById("userEmail");
const emailerror = document.getElementById("emerror");
const error = document.getElementById("error");





regb.addEventListener("click", openmodal);
function openmodal(event) {
    wind.style.display = "flex";
}

wind.addEventListener("click", closemodal);
function closemodal(event) {
    if (event.target == wind) {
        wind.style.display = "none";
    }
};

function showpass(event) {
    pass.setAttribute("type", "text");
}

function hidepass(event) {
    pass.setAttribute("type", "password");
}

show.addEventListener("pointerdown", showpass);
show.addEventListener("pointerup", hidepass);

form.addEventListener("submit", (event) => {
    const formData = new FormData(form);
    const email = formData.get("email");
    const password = formData.get("password");
    console.table({ email, password });
    event.preventDefault();
    wind.style.display = "none";
});


inputemail.addEventListener("blur", (event) => {
    if (inputemail.validity.typeMismatch) {
        emailerror.innerText = "Такой почты не существует";
        inputemail.setCustomValidity("это не почта");
        inputemail.style.backgroundColor = "#ff5545";
    } else {
        emailerror.innerText = "";
        inputemail.setCustomValidity("");
        inputemail.style.backgroundColor = "#ffffff";
    }
});


pass.addEventListener("blur", (event) => {
    //const password = document.getElementById("password").value;
    if (pass.validity.tooShort) {
        error.innerText = "Пароль слишком короткий";
        pass.setCustomValidity("нужно длиннее (минимум 8 символов");
        pass.style.backgroundColor = "#ff5545";
    } else {
        error.innerText = "";
        pass.setCustomValidity("");
        pass.style.backgroundColor = "#ffffff";
    }
});