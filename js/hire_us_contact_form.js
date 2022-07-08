(function () {
  const form = document.querySelector(".catering__request__form");
  const userName = document.querySelector(".username");
  const phoneNumber = document.querySelector(".phone__number");
  const email = document.querySelector(".email");

  function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form__control success";
    return true;
  }
  function showError(input) {
    const formControl = input.parentElement;
    formControl.className = "form__control error";
    return false;
  }
  function checkLength(input, min, max) {
    if (input.value.length < min) {
     return showError(input);
    } else if (input.value.length > max) {
      return showError(input);
    } else {
      return showSuccess(input);
    }
  }
  function checkEmail(input) {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
      return showSuccess(input);
    } else {
      return showError(input);
    }
  }
  function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
      if (input.value.trim() === "") {
       return showError(input);
      } else {
        return showSuccess(input);
      }
    });
  }
  function validationInitiation() {
   if (checkRequired([userName, phoneNumber, email]) &&
    checkLength(userName, 3, 15) &&
    checkLength(phoneNumber, 6, 10) &&
    checkEmail(email)) {
      return true
    } else {
      return false
    }
  }

   function comparingResults(event) {
     event.preventDefault();
     if (validationInitiation() === true) {
      form.submit();
     }; 
       
    /* if (checkRequired([userName, phoneNumber, email]) == false || checkLength(userName, 3, 15) == false || checkLength(phoneNumber, 6, 10) == false || checkEmail(email) == false)
       {return validationInitiation();}
    else if (checkRequired([userName, phoneNumber, email]) === true && checkLength(userName, 3, 15) === true && checkLength(phoneNumber, 6, 10) === true && checkEmail(email) === true) 
    form.submit();*/
        }
  
  form.addEventListener("submit", comparingResults);
  })();