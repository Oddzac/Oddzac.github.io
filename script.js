document.addEventListener('DOMContentLoaded', function() {
    const cube = document.querySelector('.airwolf-header-cube');
    const orbiterGroups = document.querySelectorAll('.orbiter-group');
    const orbiters = document.querySelectorAll('.airwolf-header-orbiter');
    const cubeFaces = document.querySelectorAll('.airwolf-header-cube .face');

    const originalWidth = '146px';
    const originalHeight = '64px';
    const hoverSize = '146px';

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

    // New click listener for the cube
    cube.addEventListener('click', function() {
        const newColor = getRandomColor();
        changeElementColors(newColor);
    });

    // Function to change colors of cube and orbiters
    function changeElementColors(color) {
        // Change cube face colors
        cubeFaces.forEach(face => {
            face.style.boxShadow = `0 0 3px 1.5px ${color}44,
                                    0 0 6px 3px ${color}33,
                                    0 0 9px 4.5px ${color}22`;
        });

        // Change orbiter colors
        orbiters.forEach(orbiter => {
            if (orbiter.classList.contains('tail') && orbiter.classList.contains('zero')) {
                orbiter.style.boxShadow = `0 0 2px 1px ${color}E6,
                                           0 0 4px 2px ${color}B3,
                                           0 0 7px 3px ${color}80,
                                           0 0 10px 4px ${color}4D`;
            }
            orbiter.style.backgroundColor = color;
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
