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

document.addEventListener("DOMContentLoaded", function() {
    // หาเมนูที่มี Dropdown ทั้งหมด
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function(e) {
            // ปิดเมนูอื่นๆ ที่ไม่ได้กด (ถ้ามีอันอื่นเปิดอยู่)
            dropdowns.forEach(other => {
                if (other !== dropdown) {
                    other.classList.remove('active');
                }
            });
            
            // สลับสถานะ เปิด/ปิด สำหรับเมนูที่กด
            this.classList.toggle('active');
        });
    });

    // ทริคเพิ่มเติม: ถ้าใช้นิ้วจิ้มที่อื่นบนหน้าจอ ให้ปิด Dropdown อัตโนมัติ
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown')) {
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
});