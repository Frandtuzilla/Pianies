document.addEventListener('DOMContentLoaded', function() {
    // Duplicate ticker content for smooth infinite scroll
    const ticker = document.querySelector('.ticker-content');
    ticker.innerHTML = ticker.innerHTML + ticker.innerHTML;

    // Handle mobile menu toggle if needed
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            // Add your navigation logic here
            console.log('Navigating to:', e.target.textContent);
        });
    });

    // Smooth scroll for CTA button
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('click', () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const tickerSlide = document.querySelector('.ticker-slide');
    const copy = tickerSlide.cloneNode(true);
    document.querySelector('.ticker').appendChild(copy);
});

document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.category-tab');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Get the category of the clicked tab
            const category = this.dataset.category;
            console.log(`Selected category: ${category}`);
            
            // In the future, you can add filtering logic here
            // For example:
            // filterProducts(category);
        });
    });
});

// Reviews Slider
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.review-slide');
    const dots = document.querySelectorAll('.review-dot');
    const prevButton = document.querySelector('.prev-review');
    const nextButton = document.querySelector('.next-review');
    let currentSlide = 0;

    // Show initial slide
    slides[0].classList.add('active');

    // Function to show slide
    function showSlide(index) {
        // Remove active class from all slides and dots
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        // Add active class to current slide and dot
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        currentSlide = index;
    }

    // Next slide
    nextButton.addEventListener('click', () => {
        let nextIndex = (currentSlide + 1) % slides.length;
        showSlide(nextIndex);
    });

    // Previous slide
    prevButton.addEventListener('click', () => {
        let prevIndex = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(prevIndex);
    });

    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });
});