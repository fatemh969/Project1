const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");
form.addEventListener('submit', (event) => {
    event.preventDefault(event)
    checkInputs()
})
const checkInputs = () => {

    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const password2Value = password2.value.trim()
    if (usernameValue === '') {
        setError(username, "نام کاربری را وارد کنید");
    } else {
        setSuccess(username);
    }
    if (emailValue === '') {
        setError(email, " ایمیل را وارد کنید");
    } else {
        setSuccess(email);
    }
    if (passwordValue === '') {
        setError(password, "پسورد را وارد کنید");
    } else {
        setSuccess(password);
    }
    if (password2Value === '') {
        setError(password2, "پسورد را تکرار کنید و وارد کنید");

    } else if (passwordValue !== password2Value) {
        setError(password2, "پسورد اشتباه است")
    } else {
        setSuccess(password2);
    }
}

const setError = (input, message) => {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error ';
    small.innerText = message;

}

const setSuccess = (input) => {
    const formControl = input.parentElement;
    formControl.className = 'form-control success ';

}