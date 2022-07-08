(function () {
  const form = document.querySelector(".catering__request__form");
  const userName = document.querySelector(".username");
  const phoneNumber = document.querySelector(".phone__number");
  const email = document.querySelector(".email");

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
      return false;
    } else if (input.value.length > max) {
      showError(input);
      return false;
    } else {
      showSuccess(input);
      return true;
    }
  }
  function checkEmail(input) {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
      showSuccess(input);
      return true;
    } else {
      showError(input);
      return false;
    }
  }
  function checkRequired(inputArr) {
    let validationError = false;
    inputArr.forEach(function (input) {
      if (input.value.trim() === "") {
        showError(input);
        validationError = true;
      } else {
        showSuccess(input);
      }
    });
    if (validationError == true) {
      return false;
    } else {
      return true;
    }
  }
  function validationInitiation() {
    if (
      checkRequired([userName, phoneNumber, email]) &&
      checkLength(userName, 3, 15) &&
      checkLength(phoneNumber, 6, 10) &&
      checkEmail(email)
    ) {
      return true;
    } else {
      return false;
    }
  }

  function comparingResults(event) {
    event.preventDefault();
    if (validationInitiation() === true) {
      form.submit();
    } else {
      console.log("Something happened wrong");
    }
  }
  form.addEventListener("submit", comparingResults);
})();
