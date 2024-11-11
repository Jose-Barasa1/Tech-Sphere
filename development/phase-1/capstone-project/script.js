const menuData = [
    { id: 1, name: "Pizza", price: 9.99 },
    { id: 2, name: "Burger", price: 5.99 },
    { id: 3, name: "Pasta", price: 7.99 },
    { id: 4, name: "Sushi", price: 12.99 },
    { id: 5, name: "Salad", price: 4.99 },
    { id: 6, name: "Steak", price: 19.99 },
    { id: 7, name: "Tacos", price: 8.99 },
    { id: 8, name: "Ice Cream", price: 3.99 },
    { id: 9, name: "Sandwich", price: 6.49 },
    { id: 10, name: "Fried Rice", price: 7.49 },
    { id: 11, name: "BBQ Ribs", price: 15.99 },
    { id: 12, name: "Quiche", price: 9.49 }
];

let cart = [];

// Function to display the menu
function displayMenu() {
    const menuDiv = document.getElementById("menu");
    menuData.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.className = "menu-item";
        itemDiv.innerHTML = `
            ${item.name} - $${item.price.toFixed(2)}
            <input type="number" min="1" value="1" id="quantity-${item.id}" />
            <button onclick="addToCart(${item.id})">Add to Cart</button>
        `;
        menuDiv.appendChild(itemDiv);
    });
}

// Function to add an item to the cart
function addToCart(itemId) {
    const quantity = parseInt(document.getElementById(`quantity-${itemId}`).value);
    const item = menuData.find(i => i.id === itemId);
    
    if (item) {
        const cartItem = cart.find(i => i.item.id === itemId);
        
        if (cartItem) {
            cartItem.quantity += quantity; // Update quantity if item already in cart
        } else {
            cart.push({ item: item, quantity: quantity }); // Add new item to cart
        }
        
        displayCart();
    }
}

// Function to display the cart
function displayCart() {
    const cartList = document.getElementById("cart");
    const totalPriceElem = document.getElementById("totalPrice");
    cartList.innerHTML = "";
    let totalPrice = 0;

    cart.forEach(cartItem => {
        const orderItem = document.createElement("li");
        const itemTotal = cartItem.item.price * cartItem.quantity;
        totalPrice += itemTotal;
        
        orderItem.innerHTML = `
            ${cartItem.quantity} x ${cartItem.item.name} - $${itemTotal.toFixed(2)}
            <button onclick="removeFromCart(${cartItem.item.id})">Remove</button>
        `;
        cartList.appendChild(orderItem);
    });

    totalPriceElem.textContent = totalPrice.toFixed(2);
}

// Function to remove an item from the cart
function removeFromCart(itemId) {
    const cartItemIndex = cart.findIndex(i => i.item.id === itemId);
    
    if (cartItemIndex !== -1) {
        cart[cartItemIndex].quantity -= 1;
        
        if (cart[cartItemIndex].quantity === 0) {
            cart.splice(cartItemIndex, 1); // Remove item from cart if quantity is zero
        }
    }
    
    displayCart();
}

// Initial call to display the menu
displayMenu();