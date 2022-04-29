document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault();

    const email = e.target.email.value;

    const emailInput = document.querySelector("input[name=email]");
    const feedbackNode = document.querySelector(".feedback");

    const resetError = () => {
        emailInput.classList.remove("error");
        feedbackNode.innerHTML = "";
        feedbackNode.style.display = "none";
    };

    const resetForm = () => {
        emailInput.value = "";
    }

    if (!email) {
        emailInput.classList.add("error");
        feedbackNode.style.display = "block";
        feedbackNode.innerHTML = "Whoops! It looks like you forgot to add your email";
    }
    else if (!isValidEmail(email)) {
        emailInput.classList.add("error");
        feedbackNode.style.display = "block";
        feedbackNode.innerHTML = "Please provide a valid email address";
    }
    else {
        console.log("Form submited");
        alert(`Form Submited! \nEmail: ${email}`);
        resetForm();
    }

    // Reset on focus
    emailInput.addEventListener("focus", resetError);
});

const isValidEmail = (email) => {
    // https://stackoverflow.com/a/9204568
    const regExp = /\S+@\S+\.\S+/;
    return regExp.test(email);
};
