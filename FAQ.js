// Get all question buttons
const questions = document.querySelectorAll('.faq-question');

questions.forEach(question => {
  question.addEventListener('click', () => {
    // Find the parent element (faq-item) and the icon
    const item = question.parentElement;
    const icon = question.querySelector('.faq-icon');
    
    // Check if the item is currently active
    const isActive = item.classList.contains('active');

    // Close all items first
    document.querySelectorAll('.faq-item').forEach(el => {
      el.classList.remove('active');
      el.querySelector('.faq-icon').textContent = '+';
    });

    // If the clicked item was not active, open it
    if (!isActive) {
      item.classList.add('active');
      icon.textContent = '−';
    }
  });
});