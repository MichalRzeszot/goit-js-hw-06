const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(loginForm);
  const formObject = {};

  formData.forEach((value, key) => {
    formObject[key] = value;
  });

  if (formObject.email && formObject.password) {
    console.log(formObject);

    loginForm.reset();
  } else {
    alert("Wszystkie pola powinny być wypełnione");
  }
});
