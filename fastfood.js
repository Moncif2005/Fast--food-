const humburugr = document.querySelector(".humburugr");
const navbar = document.querySelector(".navbar"); 

humburugr.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

window.addEventListener('scroll', () => {
    const scrollThreshold = 20;

    if (window.scrollY > scrollThreshold) {
        navbar.classList.remove('active');
    }
});


const script = document.createElement("script");
        script.src = "scrollreveal.min.js";
        script.onload = function () {
            const sr = ScrollReveal({
                origin: 'left',
                distance: '90px',
                duration: 2000,
                delay: 450,
                reset: false, 
            });

            sr.reveal('.test1', { delay: 400 });
            sr.reveal('.test2', { delay: 430, origin: 'right' });
            sr.reveal('.main-btn', { delay: 450 });

            sr.reveal('.menu-item', { delay: 450 });
            sr.reveal('.about-div', { delay: 450 });
            sr.reveal('.', { delay: 450 });
            sr.reveal('.', { delay: 450 });
            sr.reveal('.', { delay: 450 });
            sr.reveal('.', { delay: 450 });
        };

        document.head.appendChild(script);