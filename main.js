const form = document.querySelector('.contact-form');
const thankYou = document.getElementById('thankyou');

if (form && thankYou) {
  form.addEventListener('submit', function () {
    thankYou.textContent = "Thank you! Your message has been sent. I’ll connect with you soon.";
    thankYou.style.display = "block";
  });
}