        const menuIcon = document.getElementById('menu-icon');
        const navLinks = document.querySelector('.nav-links');

        menuIcon.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        const allNavLinks = document.querySelectorAll('header .nav-link-style, footer .nav-link-style');
        
        const sections = document.querySelectorAll('section');

        // Smooth scrolling for all internal links
        allNavLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                // Prevent the default anchor click behavior
                e.preventDefault();
                
                // Get the target element using the href attribute
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    // Use the scrollIntoView method with smooth behavior
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

        // IntersectionObserver to highlight the current section link and add fade-in
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const navLink = document.querySelector(`a[href="#${entry.target.id}"]`);
                if (navLink) {
                    if (entry.isIntersecting) {
                        // Add the 'active' class when the section is visible
                        navLink.classList.add('active');
                        entry.target.classList.add('active'); // Add active class to section for fade-in
                    } else {
                        // Remove the 'active' class when the section is not visible
                        navLink.classList.remove('active');
                    }
                }
            });
        }, {
            // Options to fine-tune the observer. `rootMargin` provides a buffer.
            rootMargin: '-50% 0px -50% 0px' 
        });

        // Observe each section
        sections.forEach(section => {
            observer.observe(section);
        });
