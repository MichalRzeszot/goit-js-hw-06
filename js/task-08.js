const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const formElements = loginForm.elements;
  const formData = {};

  for (let i = 0; i < formElements.length; i++) {
    const element = formElements[i];
    if (element.type !== "submit") {
      formData[element.name] = element.value;
    }
  }

  if (formData.email && formData.password) {
    console.log(formData);

    loginForm.reset();
  } else {
    alert("Wszystkie pola powinny być wypełnione");
  }
});
