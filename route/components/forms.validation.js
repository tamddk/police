export function forms_validation() {
  const forms = document.querySelector(".forms-validation");
  const inputs = forms.querySelectorAll("input");
  const inputEmail = document.querySelector(".input-email");

  function validateEmail(email) {
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  if (forms) {
    for (let i = 0; i < forms.length; i++) {
      forms[i].addEventListener("submit", (e) => {
        e.preventDefault();
        for (let it = 0; it < inputs.length; it++) {
          if (!inputs[it].value) {
            inputs[it].parentElement.classList.add("error-showing-sodik");
          } else {
            inputs[it].parentElement.classList.remove("error-showing-sodik");
          }
        }
        if (inputEmail) {
          if (validateEmail(inputEmail.value)) {
            inputEmail.parentElement.classList.remove("error-showing-sodik");
          } else {
            inputEmail.parentElement.classList.add("error-showing-sodik");
          }
        }
      });
      forms[i].addEventListener("click", (e) => {
        e.preventDefault();
        for (let it = 0; it < inputs.length; it++) {
          if (!inputs[it].value) {
            inputs[it].parentElement.classList.add("error-showing-sodik");
          } else {
            inputs[it].parentElement.classList.remove("error-showing-sodik");
          }
        }
        if (inputEmail) {
          if (validateEmail(inputEmail.value)) {
            inputEmail.parentElement.classList.remove("error-showing-sodik");
          } else {
            inputEmail.parentElement.classList.add("error-showing-sodik");
          }
        }
      });
    }
  }
}
