// ============================= LANDING PAGE

document.addEventListener('DOMContentLoaded', () => {
            const faqButtons = document.querySelectorAll('.faq-button');
            faqButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const answer = button.nextElementSibling;
                    const icon = button.querySelector('.faq-icon');

                    if (answer.classList.contains('active')) {
                        answer.classList.remove('active');
                        answer.style.maxHeight = '0';
                        icon.style.transform = 'rotate(0deg)';
                    } else {
                        document.querySelectorAll('.faq-answer.active').forEach(openAnswer => {
                            openAnswer.style.maxHeight = '0';
                            openAnswer.classList.remove('active');
                            openAnswer.previousElementSibling.querySelector('.faq-icon').style.transform = 'rotate(0deg)';
                        });
                        
                        answer.classList.add('active');
                        answer.style.maxHeight = answer.scrollHeight + 'px';
                        icon.style.transform = 'rotate(45deg)';
                    }
                });
            });

            const scrollContainer = document.getElementById('scroll-container');
            const scrollLeftBtn = document.getElementById('scroll-left-btn');
            const scrollRightBtn = document.getElementById('scroll-right-btn');
            const scrollAmount = 300; // Adjust this value to change scroll distance

            if (scrollLeftBtn && scrollRightBtn && scrollContainer) {
                scrollLeftBtn.addEventListener('click', () => {
                    scrollContainer.scrollBy({
                        left: -scrollAmount,
                        behavior: 'smooth'
                    });
                });

                scrollRightBtn.addEventListener('click', () => {
                    scrollContainer.scrollBy({
                        left: scrollAmount,
                        behavior: 'smooth'
                    });
                });
            }
        });


// ======================================== HOME PAGE

// Smooth scrolling for horizontal movie rows
const scrollContainers = document.querySelectorAll('.scroll-container');
scrollContainers.forEach(container => {
    let isDown = false;
    let startX;
    let scrollLeft;

    container.addEventListener('mousedown', (e) => {
        isDown = true;
        container.classList.add('active');
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
    });
    container.addEventListener('mouseleave', () => {
        isDown = false;
        container.classList.remove('active');
    });
    container.addEventListener('mouseup', () => {
        isDown = false;
        container.classList.remove('active');
    });
    container.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 2; // The scroll speed
        container.scrollLeft = scrollLeft - walk;
    });
});

