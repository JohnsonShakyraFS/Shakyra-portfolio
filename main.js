(function () {
  emailjs.init({
    publicKey: "IwtdaN8tg2UKpXjyT"
  });

  const form = document.getElementById("contact-form");
  const formContainer = document.getElementById("form-container");
  const thankYouMessage = document.getElementById("thankyou");

  if (!form) {
    console.log("Form not found");
    return;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const serviceID = "service_rr8mndw";
    const templateToMe = "template_ty8om78";
    const templateConfirmation = "template_1f7t1ko";

    emailjs.sendForm(serviceID, templateToMe, form)
      .then(function (response) {
        console.log("Email to you sent:", response);

        return new Promise(function (resolve) {
          setTimeout(resolve, 1200);
        });
      })
      .then(function () {
        return emailjs.sendForm(serviceID, templateConfirmation, form);
      })
      .then(function (response) {
        console.log("Confirmation email sent:", response);

        if (formContainer) {
          formContainer.style.display = "none";
        }

        if (thankYouMessage) {
          thankYouMessage.hidden = false;
          thankYouMessage.textContent =
            "Thanks for reaching out! Your message has been sent, and a confirmation email is on its way.";
        }

        form.reset();
      })
      .catch(function (error) {
        console.error("EmailJS error:", error);

        if (thankYouMessage) {
          thankYouMessage.hidden = false;
          thankYouMessage.textContent =
            "Something went wrong while sending your message. Please try again.";
        }
      });
  });
})();

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({
        behavior: "smooth"
      });
  });
});


document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.style.transform = "scale(0.97)";
    setTimeout(() => {
      btn.style.transform = "scale(1)";
    }, 100);
  });
});