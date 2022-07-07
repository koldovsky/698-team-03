(function () {
  const form = document.querySelector(".catering__request__form");
  const userName = document.querySelector(".username");
  const phoneNumber = document.querySelector(".phone__number");
  const email = document.querySelector(".email");
  const success = document.querySelector(".form__control.success input")

  function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form__control success";
  }
  function showError(input) {
    const formControl = input.parentElement;
    formControl.className = "form__control error";
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
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
      showSuccess(input);
    } else {
      showError(input);
    }
  }
  function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
      if (input.value.trim() === "") {
        showError(input);
      } else {
        showSuccess(input);
      }
    });
  }
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    checkRequired([userName, phoneNumber, email]);
    checkLength(userName, 3, 15);
    checkLength(phoneNumber, 6, 10);
    checkEmail(email);
});
  function formSubmit() {
    if (userName === success) 
    return form.submit();}
})();