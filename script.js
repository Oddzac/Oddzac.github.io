document.addEventListener('DOMContentLoaded', function() {

    const cube = document.querySelector('.airwolf-header-cube');
    const orbiterGroups = document.querySelectorAll('.orbiter-group');
    const orbiters = document.querySelectorAll('.airwolf-header-orbiter');

    const originalWidth = '146px';
    const originalHeight = '64px';
    const hoverSize = '146px';
    const originalXAmplitude = '72px';
    const originalYAmplitude = '32px';
    const hoverAmplitude = '73px';
    const transitionDuration = '0.5s';



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


    // Add transition properties to orbiter groups
    orbiterGroups.forEach(group => {
        group.style.transition = `width ${transitionDuration} ease, height ${transitionDuration} ease, opacity ${transitionDuration} ease`;
    });

    function changeOrbiterProperties(width, height, xAmplitude, yAmplitude, opacity) {
        orbiterGroups.forEach(group => {
            group.style.width = width;
            group.style.height = height;
            group.style.opacity = opacity;
            group.classList.toggle('hover-state', opacity === '1');
        });
    
        orbiters.forEach(orbiter => {
            orbiter.style.setProperty('--x-amplitude', xAmplitude);
            orbiter.style.setProperty('--y-amplitude', yAmplitude);
        });
    }

    cube.addEventListener('mouseenter', function() {
        changeOrbiterProperties(hoverSize, hoverSize, hoverAmplitude, hoverAmplitude, '1');
    });

    cube.addEventListener('mouseleave', function() {
        changeOrbiterProperties(originalWidth, originalHeight, originalXAmplitude, originalYAmplitude, '0');
    });
});
