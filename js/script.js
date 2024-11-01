
    // سكريبت لتوسيع وطي الإجابات عند النقر على السؤال
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('open');
        });
    });
//تصميم القائمة الرئيسية
const hamburger= document.getElementById('hamburger');
const action= document.getElementById('actions');
hamburger.addEventListener("click",()=>{
handlHamburger();
});
function handlHamburger(){
hamburger.classList.toggle("is-active");
action.classList.toggle("is-active");
}
