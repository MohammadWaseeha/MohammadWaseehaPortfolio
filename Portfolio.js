document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.querySelector('input[placeholder="Your Name"]').value;
    const email = document.querySelector('input[placeholder="Your Email"]').value;
    const message = document.querySelector('textarea[placeholder="Your Message"]').value;

    if (name && email && message) {
        alert('Thank you '+ name +'! Your message has been sent successfully.');
    } else {
        alert('Please fill out all fields before submitting.');
    }
});

(function() {
  function startTyping() {
    const hero = document.getElementById('hero');
    if (!hero) return;
    const typingSpan = hero.querySelector('#hero-typing');
    if (!typingSpan) return;
    const text = "Hi, I'm Mohammad Waseeha!";
    let i = 0;
    typingSpan.textContent = "";
    function type() {
      if (i < text.length) {
        typingSpan.textContent += text.charAt(i);
        i++;
        setTimeout(type, 80);
      }
    }
    type();
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startTyping);
  } else {
    startTyping();
  }
})();