const submitButton = document.querySelector(".submit");
const dismissButton = document.querySelector(".submit-btn");
const emailHolder = document.querySelector(".email-holder");
const email = document.querySelector("#email");
const mainContainer = document.querySelector(".main-container");


submitButton.addEventListener("click",function(e) {
      e.preventDefault();
      emailHolder.innerHTML = email.value;
      mainContainer.classList.add("showMessage");
      mainContainer.classList.remove("showForm");
});

dismissButton.addEventListener("click", function(){
      mainContainer.classList.remove("showMessage");
      mainContainer.classList.add("showForm");
      email.value = "";
})