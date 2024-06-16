// script.js

// Collapsible Skill Sections
const skillSections = document.querySelectorAll('.skill-section');
skillSections.forEach(section => {
  const header = section.querySelector('.skill-section-header');
  const content = section.querySelector('.skill-section-content');
  const toggleIcon = header.querySelector('.toggle-icon');

  header.addEventListener('click', () => {
    content.classList.toggle('open');
    toggleIcon.textContent = content.classList.contains('open') ? '−' : '+';
  });
});

// Form Validation
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  if (nameInput.value.trim() === '') {
    alert('Please enter your name.');
    nameInput.focus();
    return;
  }

  if (emailInput.value.trim() === '') {
    alert('Please enter your email address.');
    emailInput.focus();
    return;
  }

  if (messageInput.value.trim() === '') {
    alert('Please enter your message.');
    messageInput.focus();
    return;
  }

  // Form is valid, you can submit the data here
  alert('Thank you for your message!');
  form.reset();
});