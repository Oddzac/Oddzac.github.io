document.addEventListener('DOMContentLoaded', function() {
    const cube = document.querySelector('.airwolf-header-cube');
    const orbiterGroups = document.querySelectorAll('.orbiter-group');
    const orbiters = document.querySelectorAll('.airwolf-header-orbiter');
    const cubeFaces = document.querySelectorAll('.airwolf-header-cube .face');
    const cubeContainer = document.querySelector('.orbiter-cube-container');

    // New click listener for the cube
    cubeContainer.addEventListener('click', function() {
        const newColor = getRandomColor();
        changeElementColors(newColor);
    });

    // Function to change colors of cube and orbiters
    function changeElementColors(color) {
        // Convert hex to RGB
        const rgb = hexToRgb(color);
    
        // Change cube face colors
        cubeFaces.forEach(face => {
            face.style.borderColor = color;
            face.style.boxShadow = `0 0 3px 1.5px ${color}66,
                                    0 0 6px 3px ${color}4D,
                                    0 0 9px 4.5px ${color}33`;
        });
    
        // Change orbiter colors
        orbiters.forEach(orbiter => {
            // experimenting with constant as "always on"
            //orbiter.style.setProperty('--bg-color', color);
            if (orbiter.classList.contains('tail') && orbiter.classList.contains('zero')) {
                orbiter.style.boxShadow = `0 0 2px 1px ${color}E6,
                                           0 0 4px 2px ${color}B3,
                                           0 0 7px 3px ${color}80,
                                           0 0 10px 4px ${color}4D`;
            }
        });
    
        // Update CSS variables for glow animation
        document.documentElement.style.setProperty('--glow-color-r', rgb.r);
        document.documentElement.style.setProperty('--glow-color-g', rgb.g);
        document.documentElement.style.setProperty('--glow-color-b', rgb.b);
    }
    
    // Helper function to convert hex to RGB
    function hexToRgb(hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
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





});
