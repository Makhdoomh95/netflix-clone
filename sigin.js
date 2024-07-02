document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const emailOrPhoneInput = form.querySelector("input[type='text']");
    const passwordInput = form.querySelector("input[type='password']");
    const rememberMeCheckbox = form.querySelector("#remember-me");
    
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let isValid = true;

        clearErrors();

        const emailOrPhoneValue = emailOrPhoneInput.value.trim();
        if (!emailOrPhoneValue) {
            showError(emailOrPhoneInput, "Email or phone number is required.");
            isValid = false;
        } else if (!isValidEmail(emailOrPhoneValue) && !isValidPhoneNumber(emailOrPhoneValue)) {
            showError(emailOrPhoneInput, "Please enter a valid email or phone number.");
            isValid = false;
        }

       
        const passwordValue = passwordInput.value.trim();
        if (!passwordValue) {
            showError(passwordInput, "Password is required.");
            isValid = false;
        }

        if (isValid) {
            alert("Form submitted successfully!");
            form.submit();
        }
    });

    function clearErrors() {
        const errorMessages = form.querySelectorAll(".error-message");
        errorMessages.forEach(errorMessage => errorMessage.remove());
    }

    function showError(input, message) {
        const errorElement = document.createElement("div");
        errorElement.classList.add("error-message");
        errorElement.innerText = message;
        input.parentElement.appendChild(errorElement);
    }

    function isValidEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    function isValidPhoneNumber(phone) {
        const phonePattern = /^\d{10}$/;
        return phonePattern.test(phone);
    }
});
