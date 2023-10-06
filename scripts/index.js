/**
 * Autor: Adrian Iglesias Riño
 * github.com/https://github.com/Torremolinos/Form-Dwec-Dwic
 */
//que el campo no deba estar vacio (para le nombre)
//que la contraseña al menos sea 8 caracteres.
const validateNombre = nombre => {
    const nombre = document.getElementById("nombre").value
    if (nombre === "") {
        alert("El campo nombre no puede estar vacio");
        console.log("El campo nombre no puede estar vacio");
        return false;
    }
    return true;

}

const passwordSize = password => {
    const password = parseFloat(document.getElementById("password").value)
    if (password.length < 8) {
        alert("La contraseña debe tener al menos 8 caracteres");
        return false;
    }
    return true;
}

const validateForm = () => {
    const nombre = document.getElementById("nombre").value;
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;
    return validateNombre(nombre) && validatePassword(password) && validateEmail(email);

}
const emailValidate = email => {
    if (email === "" && email != "@" && email != ".com") {
        alert("El campo email no puede estar vacio");
        console.log("El campo email no puede estar vacio");
        return false;
    }
    return true;
}

document.getElementById("registerForm").onsubmit = () => {
    return validateForm();
};
const enviarFormulario = () => {
    if (validateForm()) {
        return true;
    }
    else {
        return false;
    }
}