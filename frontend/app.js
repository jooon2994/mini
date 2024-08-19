// Initialize the Telegram WebApp
window.Telegram.WebApp.ready();

// Fetch Telegram user data
const user = window.Telegram.WebApp.initDataUnsafe?.user;

// Display user data in the account section
if (user) {
    document.getElementById('user-name').textContent = user.first_name;
    document.getElementById('user-phone').textContent = user.phone_number || 'N/A';
}

// Toggle between different sections
function showSection(sectionId) {
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

// Sample Products
const products = [
    { id: 1, name: 'AirPods', price: '1000 Br', description: 'Wireless Bluetooth Earbuds', image: '../assets/images/product1.png' },
    { id: 2, name: 'Smart Watch', price: '1500 Br', description: 'Fitness Tracker', image: '../assets/images/product2.png' },
    { id: 3, name: 'Headphones', price: '2000 Br', description: 'Noise Cancelling Headphones', image: '../assets/images/product3.png' },
    { id: 4, name: 'Laptop', price: '25000 Br', description: 'Gaming Laptop', image: '../assets/images/product4.png' }
];

// Load Products Dynamically
function loadProducts() {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p><strong>${product.price}</strong></p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(card);
    });
}

loadProducts();

// Cart Logic
let cart = [];

// Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        renderCartItems();
    }
}

// Render Cart Items
function renderCartItems() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = ''; // Clear previous items
    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <p>${item.name} - ${item.price}</p>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItems.appendChild(cartItem);
    });

    // Update cart icon with the number of items
    document.getElementById('cart-count').textContent = cart.length;
}

// Remove from Cart
function removeFromCart(index) {
    cart.splice(index, 1);
    renderCartItems();
}

// Checkout Logic (can be linked to your bot's payment system)
document.getElementById('checkout-button').onclick = function () {
    Telegram.WebApp.showPopup({
        title: "Checkout",
        message: "Proceed to payment?",
        buttons: [
            { text: "Yes", id: "confirm" },
            { text: "No", id: "cancel" }
        ]
    });
};

// Handle pop-up response
Telegram.WebApp.onEvent('popupClosed', function (data) {
    if (data.button_id === 'confirm') {
        // Logic for payment confirmation
        console.log('Payment confirmed');
    }
});
