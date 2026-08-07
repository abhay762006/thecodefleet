document.addEventListener('DOMContentLoaded', () => {

  const hero = document.querySelector('.hero');
  const mainContent = document.querySelector('main');
  const backButton = document.getElementById('backButton');
  const actionButtons = document.querySelectorAll('.hero-actions .btn');

  // HERO BUTTONS

  actionButtons.forEach((button) => {

    button.addEventListener('click', () => {

      if(hero){
        hero.classList.remove('start-view');
      }

      if(mainContent){
        mainContent.classList.remove('hidden');
      }

      if(backButton){
        backButton.classList.remove('hidden');
      }

    });

  });

  // BACK BUTTON

  if(backButton){

    backButton.addEventListener('click', () => {

      if(hero){
        hero.classList.add('start-view');
      }

      if(mainContent){
        mainContent.classList.add('hidden');
      }

      backButton.classList.add('hidden');

    });

  }

  // EMAILJS

  emailjs.init("a5w8a3u6T8cSB189d");

  const form = document.getElementById("registration-form");

  if(form){

    form.addEventListener("submit", function(event){

      event.preventDefault();

      const button = form.querySelector("button");

      button.innerText = "Sending...";
      button.disabled = true;

      emailjs.sendForm(
        "service_6quh9wn",
        "template_gdmykp6",
        this
      )

      .then(() => {

        button.innerText = "Registered ✅";

        form.reset();

        setTimeout(() => {

          button.innerText = "Register";
          button.disabled = false;

        }, 3000);

      })

      .catch((error) => {

        button.innerText = "Register";
        button.disabled = false;

        alert("Failed to send");

        console.log(error);

      });

    });

  }

});