// script.js

let cart = [];

function addToCart(productId, productName, price) {
    cart.push({ productId, productName, price });
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Clear current items

    let total = 0;
    cart.forEach(item => {
        total += item.price;
        const itemElement = document.createElement('div');
        itemElement.innerText = `${item.productName} - $${item.price}`;
        cartItemsContainer.appendChild(itemElement);
    });

    document.getElementById('total-price').innerText = total.toFixed(2);
}

function checkout() {
    // Here you would add functionality to handle the checkout process
    alert('Checkout functionality not implemented yet.');
}
