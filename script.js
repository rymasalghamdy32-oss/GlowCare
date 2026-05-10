function showoffer(){

    alert("20% OFF on all skincare treatments today!");
}
/* CONTACT PAGE */
contactForm.addEventListener("submit", function(e) {
  e.preventDefault();

  if (!contactForm.checkValidity()) {
    alert("Please fill all fields correctly.");
    return;
  }

  confirmMessage.style.display = "block";
  setTimeout(() => { confirmMessage.style.opacity = "1"; }, 100);
  contactForm.reset();

  setTimeout(() => {
    confirmMessage.style.opacity = "0";
    setTimeout(() => { confirmMessage.style.display = "none"; }, 300);
  }, 3000);

  const button = contactForm.querySelector("button");
  button.textContent = "Sending...";
  button.disabled = true;
  setTimeout(() => {
    button.textContent = "Send Message";
    button.disabled = false;
  }, 1500);
});
// Booking Page
function selectService(el) {
    document.querySelectorAll('.service-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    el.classList.add('selected');
}

function confirmBooking() {
    const msg = document.getElementById('confirmMsg');
    msg.style.display = 'block';
    setTimeout(() => {
        msg.style.opacity = '1';
    }, 10);
}
