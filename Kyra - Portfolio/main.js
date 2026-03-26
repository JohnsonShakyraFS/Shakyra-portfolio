const form = document.querySelector('.contact-form');
const thankYou = document.getElementById('thankyou');

if (form) {
  form.addEventListener('submit', function () {
    
    // show thank you message
    thankYou.textContent = "Thank you! Your message has been sent. I’ll connect with you soon ✨";
    thankYou.style.display = "block";

    // optional: clear form after a moment
    setTimeout(() => {
      form.reset();
    }, 500);
  });
}