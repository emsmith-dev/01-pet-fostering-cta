// script.js

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('newsletter-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const emailInput = document.getElementById('newsletter-email');
      if (emailInput && emailInput.value) {
        showCelebrationPopup(emailInput.value);
        emailInput.value = '';
      }
    });
  }

  function showCelebrationPopup(email) {
    // Create overlay
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.background = 'rgba(0,0,0,0.3)';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.zIndex = 9999;

    // Create popup box
    const popup = document.createElement('div');
    popup.style.background = '#fff';
    popup.style.borderRadius = '20px';
    popup.style.boxShadow = '0 4px 24px rgba(0,0,0,0.15)';
    popup.style.padding = '2em 2.5em';
    popup.style.textAlign = 'center';
    popup.style.position = 'relative';
    popup.style.minWidth = '300px';

    // Cute emoji confetti
    const confetti = document.createElement('div');
    confetti.style.fontSize = '2.2em';
    confetti.style.marginBottom = '0.5em';
    confetti.innerText = '🎉✨🐾🎊';
    popup.appendChild(confetti);

    // Message
    const msg = document.createElement('div');
    msg.style.fontSize = '1.2em';
    msg.style.marginBottom = '0.7em';
    msg.innerHTML = `Thank you for subscribing,<br><b>${email}</b>!`;
    popup.appendChild(msg);

    // Close button
    const closeBtn = document.createElement('button');
    closeBtn.innerText = 'Close';
    closeBtn.style.background = '#ffb347';
    closeBtn.style.color = '#fff';
    closeBtn.style.border = 'none';
    closeBtn.style.borderRadius = '10px';
    closeBtn.style.padding = '0.5em 1.5em';
    closeBtn.style.fontSize = '1em';
    closeBtn.style.cursor = 'pointer';
    closeBtn.style.marginTop = '0.5em';
    closeBtn.addEventListener('click', function () {
      document.body.removeChild(overlay);
    });
    popup.appendChild(closeBtn);

    overlay.appendChild(popup);
    document.body.appendChild(overlay);
  }
});
