document.addEventListener('DOMContentLoaded', function() {
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

    document.addEventListener('DOMContentLoaded', function() {
        const cube = document.querySelector('.airwolf-header-cube');
        const orbiterGroups = document.querySelectorAll('.orbiter-group');
        const orbiters = document.querySelectorAll('.airwolf-header-orbiter');
    
        const originalHeight = '64px';
        const hoverHeight = '146px';
        const originalAmplitude = '32px';
        const hoverAmplitude = '64px';
    
        function changeOrbiterProperties(height, amplitude, opacity) {
            orbiterGroups.forEach(group => {
                group.style.height = height;
                group.style.opacity = opacity;
                // Pause or resume the fadeInOut animation
                group.style.animationPlayState = opacity === '1' ? 'paused' : 'running';
            });
    
            orbiters.forEach(orbiter => {
                orbiter.style.setProperty('--y-amplitude', amplitude);
            });
        }
    
        cube.addEventListener('mouseenter', function() {
            changeOrbiterProperties(hoverHeight, hoverAmplitude, '1');
        });
    
        cube.addEventListener('mouseleave', function() {
            changeOrbiterProperties(originalHeight, originalAmplitude, '');
        });
    });
});