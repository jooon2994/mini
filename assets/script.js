document.addEventListener('DOMContentLoaded', function () {
    const cartIcon = document.querySelector('.cart-icon');
    const cartModal = document.getElementById('cart-modal');
    const closeCartBtn = document.getElementById('close-cart');
    const cartCount = document.getElementById('cart-count');

    cartIcon.addEventListener('click', function () {
        cartModal.classList.toggle('hidden');
    });

    closeCartBtn.addEventListener('click', function () {
        cartModal.classList.add('hidden');
    });

    // Update the cart count when items are added
    function updateCartCount(count) {
        cartCount.textContent = count;
    }

    // Add logic for registration and account management
    const accountIcon = document.querySelector('.account-icon a');
    accountIcon.addEventListener('click', function () {
        window.location.href = '/register'; // Adjust according to your registration page
    });
});
