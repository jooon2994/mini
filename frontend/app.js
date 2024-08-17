// app.js

// Sample product data (this would come from your bot or backend in a real app)
const products = [
    { id: 1, name: 'AirPods', price: '1000 Br', description: 'Wireless Bluetooth Earbuds', image: 'assets/images/product1.png' },
    { id: 2, name: 'Smart Watch', price: '1500 Br', description: 'Waterproof Fitness Tracker', image: 'assets/images/product2.png' },
    { id: 3, name: 'Laptop', price: '45000 Br', description: 'High-performance laptop', image: 'assets/images/product3.png' },
];

// Load products into the page
function loadProducts() {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" width="100%" height="150px" style="border-radius: 8px;">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p><strong>Price: ${product.price}</strong></p>
            <button class="btn" onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productCard);
    });
}

let cart = [];

// Function to handle adding a product to the cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCartCount();
        alert(`Added ${product.name} to cart.`);
    }
}

// Function to update the cart count
function updateCartCount() {
    document.getElementById('cart-count').textContent = cart.length;
}

// Function to show the cart modal
function showCart() {
    const cartModal = document.getElementById('cart-modal');
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Clear previous items

    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `
            <p>${item.name} - ${item.price}</p>
        `;
        cartItemsContainer.appendChild(itemDiv);
    });

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    }

    cartModal.classList.remove('hidden');
}

// Function to show the registration modal
function showAccount() {
    const registrationModal = document.getElementById('registration-modal');
    registrationModal.classList.remove('hidden');
}

// Function to close a modal
function closeModal(modalId) {
    document.getElementById(modalId).classList.add('hidden');
}

// Function to proceed to checkout (check registration status first)
function proceedToCheckout() {
    if (isUserRegistered()) {
        alert('Proceeding to checkout...');
        // Handle the checkout process here
    } else {
        alert('Please register first.');
        showAccount(); // Show the registration modal if not registered
    }
}

// Simulated function to check if a user is registered
function isUserRegistered() {
    // Replace this with actual registration check
    return false; // For testing, this is always false
}

// Initialize the app
window.onload = function() {
    loadProducts();
};
