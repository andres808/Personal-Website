document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling (existing code)
    const links = document.querySelectorAll('nav a');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Typing effect
    const heroText = "AI Enthusiast\nand Developer";
    const heroElement = document.getElementById('hero-text');
    let i = 0;

    function typeWriter() {
        if (i < heroText.length) {
            heroElement.innerHTML += heroText.charAt(i) === '\n' ? '<br>' : heroText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }

    typeWriter();

    // Fade-in effect
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = {
        threshold: 0.7,
        rootMargin: "0px 0px -100px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});