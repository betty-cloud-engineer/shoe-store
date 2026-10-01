let cart = [];

function toggleCart() {
    const sidebar = document.getElementById('cart-sidebar');
    if (sidebar) {
        sidebar.classList.toggle('open');
    }
}

function interactiveAddToCart(name, price, imgUrl) {
    const shoeItem = {
        id: Date.now(),
        name: name,
        price: price,
        img: imgUrl
    };
    
    cart.push(shoeItem);
    updateCartUI();
    
    const sidebar = document.getElementById('cart-sidebar');
    if (sidebar && !sidebar.classList.contains('open')) {
        sidebar.classList.add('open');
    }
}

function removeCartItem(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    updateCartUI();
}

function updateCartUI() {
    const container = document.getElementById('cart-items-container');
    const badgeCount = document.getElementById('cart-count');
    const displayTotal = document.getElementById('cart-total-price');
    
    if (!container || !badgeCount || !displayTotal) return;

    badgeCount.innerText = cart.length;
    container.innerHTML = "";
    
    if (cart.length === 0) {
        container.innerHTML = '<p class="empty-message" style="text-align: center; color: #888; margin-top: 40px;">Your cart is empty.</p>';
        displayTotal.innerText = "\$0.00";
        return;
    }
    
    let currentSum = 0;
    
    cart.forEach(item => {
        currentSum += item.price;
        
        const markupItem = `
            <div class="cart-item" style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px; padding-bottom: 15px; border-bottom: 1px solid #333;">
                <img src="${item.img}" class="cart-item-thumb" style="width: 50px; height: 50px; object-fit: cover; border-radius: 5px;" alt="${item.name}">
                <div class="cart-item-details" style="flex: 1;">
                    <h4 style="font-size: 14px; margin-bottom: 5px; color: white;">${item.name}</h4>
                    <p style="color: #ff4e00; font-weight: bold; font-size: 14px;">$${item.price.toFixed(2)}</p>
                </div>
                <button class="remove-btn" style="background: none; border: none; color: #ff3333; cursor: pointer; font-size: 13px;" onclick="removeCartItem(${item.id})">Remove</button>
            </div>
        `;
        
        container.innerHTML += markupItem;
    });
    
    displayTotal.innerText = `$${currentSum.toFixed(2)}`;
}

// 5. Complete Simulated Checkout Action (Asks for Name, Card, Expiry, and CVV)
function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty! Add some shoes before checking out.");
        return;
    }
    
    // Prompt 1: Cardholder Name
    const cardName = prompt("Enter Cardholder Name:");
    if (!cardName) {
        alert("Checkout cancelled.");
        return;
    }
    
    // Prompt 2: Card Number
    const cardNumber = prompt("Enter 16-digit Card Number:");
    if (!cardNumber) {
        alert("Checkout cancelled.");
        return;
    }
    
    // Prompt 3: Expiry Date (NEW)
    const expiryDate = prompt("Enter Expiry Date (MM/YY):");
    if (!expiryDate) {
        alert("Checkout cancelled.");
        return;
    }

    // Prompt 4: CVV (NEW)
    const cvv = prompt("Enter 3-digit CVV:");
    if (!cvv) {
        alert("Checkout cancelled.");
        return;
    }
    
    // Success Loop Confirmation
    alert("🎉 Order Success!\n\nThank you " + cardName + " for shopping at Betty's World!\nYour order totaling " + document.getElementById('cart-total-price').innerText + " has been successfully processed.");
    
    // Wipes out arrays and resets the sidebar display
    cart = [];
    updateCartUI();
    toggleCart();
}
