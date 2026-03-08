function showAlert(text){
    alert(text + " page is under development.");
}

function scrollToTop(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
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