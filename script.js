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

// Sample product data
const products = [
    {
        id: 1,
        category: 'formal',
        image: 'images/dress1.png',
        brand: 'PRADA',
        name: 'Crossback Halter Gown',
        description: 'A shapely halter gown designed with elegant crossback straps and a leg-baring slit, perfect for formal galas and black-tie events.',
        price: 2400.00
    },
    {
        id: 2,
        category: 'cocktail',
        image: 'images/dress2.png',
        brand: 'VALENTINO',
        name: 'V Logo Wool & Silk Dress',
        description: 'Sophisticated cocktail dress crafted from luxurious wool and silk blend, featuring the iconic V logo detail.',
        price: 2650.00
    },
    {
        id: 3,
        category: 'seasonal',
        image: 'images/dress3.png',
        brand: 'GUCCI',
        name: 'Floral Summer Midi Dress',
        description: 'Light and breezy midi dress with vibrant floral prints, perfect for summer garden parties and outdoor events.',
        price: 1950.00
    },
    {
        id: 4,
        category: 'occasional',
        image: 'images/dress4.png',
        brand: 'ALEXANDER MCQUEEN',
        name: 'Structured Evening Dress',
        description: 'Architectural evening dress with structured shoulders and a fitted silhouette, ideal for special occasions.',
        price: 3200.00
    },
    {
        id: 5,
        category: 'formal',
        image: 'images/dress5.png',
        brand: 'OSCAR DE LA RENTA',
        name: 'Beaded Ball Gown',
        description: 'Stunning ball gown with intricate beading and a sweeping train, perfect for formal ceremonies and galas.',
        price: 4500.00
    },
    {
        id: 6,
        category: 'cocktail',
        image: 'images/dress6.png',
        brand: 'SAINT LAURENT',
        name: 'Little Black Dress',
        description: 'Classic little black dress with modern details and a fitted cut, versatile for various cocktail events.',
        price: 1850.00
    },
    {
        id: 7,
        category: 'seasonal',
        image: 'images/dress7.png',
        brand: 'ZIMMERMANN',
        name: 'Resort Collection Dress',
        description: 'Lightweight linen dress with delicate embroidery, perfect for resort wear and summer events.',
        price: 895.00
    },
    {
        id: 8,
        category: 'occasional',
        image: 'images/dress8.png',
        brand: 'MARCHESA',
        name: 'Ruffled Party Dress',
        description: 'Playful party dress with cascading ruffles and metallic thread details, ideal for celebrations.',
        price: 2750.00
    },
    {
        id: 9,
        category: 'formal',
        image: 'images/dress9.png',
        brand: 'ELIE SAAB',
        name: 'Embellished Evening Gown',
        description: 'Luxurious evening gown with crystal embellishments and cape detail, perfect for red carpet events.',
        price: 5200.00
    },
    {
        id: 10,
        category: 'cocktail',
        image: 'images/dress10.png',
        brand: 'BALMAIN',
        name: 'Structured Mini Dress',
        description: 'Bold mini dress with signature structured shoulders and metallic button details.',
        price: 2100.00
    },
    {
        id: 11,
        category: 'seasonal',
        image: 'images/dress11.png',
        brand: 'JOHANNA ORTIZ',
        name: 'Tropical Print Maxi',
        description: 'Flowing maxi dress with tropical prints and dramatic sleeves, perfect for summer soirées.',
        price: 1650.00
    },
    {
        id: 12,
        category: 'occasional',
        image: 'images/dress12.png',
        brand: 'CAROLINA HERRERA',
        name: 'Floral Tea Dress',
        description: 'Classic tea dress with vibrant floral prints and a full skirt, ideal for garden parties.',
        price: 2300.00
    },
    {
        id: 13,
        category: 'formal',
        image: 'images/dress13.png',
        brand: 'ZUHAIR MURAD',
        name: 'Sequined Mermaid Gown',
        description: 'Glamorous mermaid gown covered in sequins with a dramatic train, perfect for formal events.',
        price: 4800.00
    },
    {
        id: 14,
        category: 'cocktail',
        image: 'images/dress14.png',
        brand: 'VERSACE',
        name: 'Medusa Button Dress',
        description: 'Statement cocktail dress with iconic Medusa buttons and a daring side slit.',
        price: 2400.00
    },
    {
        id: 15,
        category: 'seasonal',
        image: 'images/dress15.png',
        brand: 'RETROFÊTE',
        name: 'Metallic Summer Dress',
        description: 'Lightweight metallic dress with wrap detail, perfect for summer nights and parties.',
        price: 795.00
    },
    {
        id: 16,
        category: 'occasional',
        image: 'images/dress16.png',
        brand: 'SELF-PORTRAIT',
        name: 'Lace Midi Dress',
        description: 'Elegant midi dress with signature lace details and pleated skirt, perfect for special occasions.',
        price: 850.00
    },
    {
        id: 17,
        category: 'formal',
        image: 'images/dress17.png',
        brand: 'JENNY PACKHAM',
        name: 'Beaded Column Gown',
        description: 'Sophisticated column gown with delicate beading throughout, ideal for formal events.',
        price: 3900.00
    },
    {
        id: 18,
        category: 'cocktail',
        image: 'images/dress18.png',
        brand: 'ROBERTO CAVALLI',
        name: 'Animal Print Dress',
        description: 'Bold cocktail dress featuring signature animal prints and gold hardware details.',
        price: 1950.00
    },
    {
        id: 19,
        category: 'seasonal',
        image: 'images/dress19.png',
        brand: 'CULT GAIA',
        name: 'Cut-Out Beach Dress',
        description: 'Contemporary beach dress with artistic cut-outs and natural fabric, perfect for summer events.',
        price: 580.00
    },
    {
        id: 20,
        category: 'occasional',
        image: 'images/dress20.png',
        brand: 'ALICE + OLIVIA',
        name: 'Embroidered Party Dress',
        description: 'Playful party dress with colorful embroidery and a flattering A-line silhouette.',
        price: 995.00
    }
];

document.addEventListener('DOMContentLoaded', function() {
    // Get necessary DOM elements
    const productsGrid = document.getElementById('productsGrid');
    const filterButtons = document.querySelectorAll('.filter-button');
    const cartNotification = document.getElementById('cartNotification');
    let cart = [];

    // Function to display products
    function displayProducts(category = 'all') {
        if (!productsGrid) return;
        
        // Clear the current products
        productsGrid.innerHTML = '';
        
        // Filter products based on category
        const filteredProducts = category === 'all' 
            ? products 
            : products.filter(product => product.category === category);

        // Create and append product cards
        filteredProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-brand">${product.brand}</div>
                <div class="product-name">${product.name}</div>
                <div class="product-description">${product.description}</div>
                <div class="product-price">$${product.price.toLocaleString()}</div>
                <button class="add-to-cart" data-product-id="${product.id}">Add to Cart</button>
            `;
            productsGrid.appendChild(productCard);
        });

        // Add event listeners to new Add to Cart buttons
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', handleAddToCart);
        });
    }

    // Handle category filter clicks
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            // Display products for selected category
            displayProducts(button.dataset.category);
        });
    });

    // Handle adding items to cart
    function handleAddToCart(event) {
        const productId = parseInt(event.target.dataset.productId);
        const product = products.find(p => p.id === productId);
        
        if (product) {
            cart.push(product);
            updateCartCount();
            showCartNotification();
        }
    }

    // Update cart count in the UI
    function updateCartCount() {
        const cartCount = document.getElementById('cartCount');
        if (cartCount) {
            cartCount.textContent = cart.length;
        }
    }

    // Show notification when item is added to cart
    function showCartNotification() {
        if (!cartNotification) return;
        
        cartNotification.classList.add('show');
        
        setTimeout(() => {
            cartNotification.classList.remove('show');
        }, 2000);
    }

    // Initialize the page with all products
    displayProducts();
});