const userName = document.querySelector(".username");
const phoneNumber = document.querySelector(".phone__number");
const email = document.querySelector(".email");


function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form__input__field success';
}
function showError(input) {
    const formControl = input.parentElement;
    formControl.className = 'form__input__field error';
}
function checkLength(input, min, max) {
    if (input.value.length < min) {
      showError(input);
    } else if (input.value.length > max) {
      showError(input);
    } else {
      showSuccess(input);
    }
  }
  function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
      showSuccess(input);
    } else {
      showError(input);
    }
  }
  function checkRequired(inputArr) {
    let isRequired = false;
    inputArr.forEach(function(input) {
      if (input.value.trim() === '') {
        showError(input);
        isRequired = true;
      } else {
        showSuccess(input);
      }
    });
    return isRequired;
  }
form.addEventListener('submit', function(e) {
    e.preventDefault();
     if (checkRequired([userName, phoneNumber, email])) {
      checkLength(userName, 3, 15);
      checkLength(phoneNumber, 6, 10);
      checkEmail(email);
    }
});