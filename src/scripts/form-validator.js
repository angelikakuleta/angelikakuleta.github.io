(function(){

    const nameField = document.getElementById("name-form");
    const emailField = document.getElementById("email-form");
    const messageField = document.getElementById("message-form");
    const submitInput = document.getElementById("send-form");

    let validateName = () => {
        const name = nameField.value;
        let isValid =  name.length > 3 && /^[a-zA-Z]+$/.test(name);
        nameField.style.color = isValid ? "var(--font-color)" : "var(--hover-color)";
        return isValid;
    }

    let validateEmail = () => {
        const email = emailField.value;
        let isValid =  email.length > 5 && /\S+@\S+\.\S+/.test(email);
        emailField.style.color = isValid ? "var(--font-color)" : "var(--hover-color)";
        return isValid;
    }

    let validateMessage = () => {
        const message = messageField.value;
        let isValid = message.length > 3;
        messageField.style.color = isValid ? "var(--font-color)" : "var(--hover-color)";
        return isValid;
    }

    let validateForm = () => {
        if (validateName() && validateEmail() && validateMessage()) {
            submitInput.disabled = false;
            submitInput.classList.add("valid");
        }
        else {
            submitInput.disabled = true;
            submitInput.classList.remove("valid");
        }
    }

    [nameField, emailField, messageField].forEach(x => { 
        x.addEventListener("keypress", validateForm);
    });

    submitInput.addEventListener("click", e => {
        e.preventDefault();
    }); 

    document.getElementById("clear-form").addEventListener("click", () => {
        nameField.value = "";
        emailField.value = "";
        messageField.value = "";
    }) ;

})();