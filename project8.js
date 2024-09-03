document.querySelectorAll('.faq').forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('active');

        const answer = faq.querySelector('.answer');
        const icon = faq.querySelector('.icon');
        
        if (faq.classList.contains('active')) {
            answer.classList.add('show');
            icon.textContent = '-';
        } else {
            answer.classList.remove('show');
            icon.textContent = '+';
        }
    });
});
