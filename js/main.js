document.addEventListener('DOMContentLoaded', function() {
    const sectionTitles = document.querySelectorAll('.section-title');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    sectionTitles.forEach(title => {
        observer.observe(title);
    });
});
