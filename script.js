document.addEventListener('DOMContentLoaded', function() {

    const cube = document.querySelector('.airwolf-header-cube');
    const orbiterGroups = document.querySelectorAll('.orbiter-group');

    const originalWidth = '146px';
    const originalHeight = '64px';
    const hoverSize = '146px';
    const originalXAmplitude = '72px';
    const originalYAmplitude = '32px';
    const hoverAmplitude = '73px';

    function changeOrbiterProperties(isHovered) {
        orbiterGroups.forEach(group => {
            if (isHovered) {
                group.style.width = hoverSize;
                group.style.height = hoverSize;
                group.style.opacity = '1';
                group.classList.add('hover-state');
            } else {
                group.style.width = originalWidth;
                group.style.height = originalHeight;
                group.style.opacity = '0';
                group.classList.remove('hover-state');
            }
        });
    }

    cube.addEventListener('mouseenter', function() {
        changeOrbiterProperties(true);
    });

    cube.addEventListener('mouseleave', function() {
        changeOrbiterProperties(false);
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Simple form validation (you can add a form in the HTML and uncomment this)
    /*
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add your form validation logic here
            console.log('Form submitted');
        });
    }
    */

    // Add a simple interactive element
    const heading = document.querySelector('h1');
    if (heading) {
        heading.addEventListener('click', function() {
            this.style.color = getRandomColor();
        });
    }

    // Helper function to generate random colors
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }



});
