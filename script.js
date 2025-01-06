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
