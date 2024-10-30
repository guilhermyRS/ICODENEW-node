document.addEventListener('DOMContentLoaded', (event) => {
    const userButton = document.getElementById('userButton');
    const userDropdown = document.getElementById('userDropdown');
    const toggleSidebar = document.getElementById('toggleSidebar');
    const sidebarDropdown = document.getElementById('sidebarDropdown');
    const cartButton = document.getElementById('cartButton');
    const cartDropdown = document.getElementById('cartDropdown');
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const cartItemCount = document.getElementById('cartItemCount');

    function toggleDropdown(dropdown) {
        dropdown.classList.toggle('hidden');
        setTimeout(() => {
            dropdown.classList.toggle('opacity-0');
            dropdown.classList.toggle('-translate-y-2');
        }, 10);
    }

    userButton.addEventListener('click', () => {
        toggleDropdown(userDropdown);
        cartDropdown.classList.add('hidden', 'opacity-0', '-translate-y-2');
        sidebarDropdown.classList.add('hidden', 'opacity-0', '-translate-y-2');
        toggleSidebar.classList.remove('change');
    });

    toggleSidebar.addEventListener('click', () => {
        toggleDropdown(sidebarDropdown);
        userDropdown.classList.add('hidden', 'opacity-0', '-translate-y-2');
        cartDropdown.classList.add('hidden', 'opacity-0', '-translate-y-2');
        toggleSidebar.classList.toggle('change');
    });

    cartButton.addEventListener('click', () => {
        toggleDropdown(cartDropdown);
        userDropdown.classList.add('hidden', 'opacity-0', '-translate-y-2');
        sidebarDropdown.classList.add('hidden', 'opacity-0', '-translate-y-2');
        toggleSidebar.classList.remove('change');
    });

    searchButton.addEventListener('click', () => {
        performSearch();
    });

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    // Close dropdowns when clicking outside
    window.addEventListener('click', (e) => {
        if (!userButton.contains(e.target) && !userDropdown.contains(e.target)) {
            userDropdown.classList.add('hidden', 'opacity-0', '-translate-y-2');
        }
        if (!toggleSidebar.contains(e.target) && !sidebarDropdown.contains(e.target)) {
            sidebarDropdown.classList.add('hidden', 'opacity-0', '-translate-y-2');
            toggleSidebar.classList.remove('change');
        }
        if (!cartButton.contains(e.target) && !cartDropdown.contains(e.target)) {
            cartDropdown.classList.add('hidden', 'opacity-0', '-translate-y-2');
        }
    });

    function performSearch() {
        const searchTerm = searchInput.value;
        console.log('Searching for:', searchTerm);
        // Implement your search functionality here
    }
});

// Cart functionality
let cart = [];

function loadCartFromLocalStorage() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
        updateCartDisplay();
    }
}

function addToCart(item) {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...item,
            quantity: 1
        });
    }
    updateCartDisplay();
    saveCartToLocalStorage();
}

function removeFromCart(itemId) {
    const index = cart.findIndex(item => item.id === itemId);
    if (index !== -1) {
        if (cart[index].quantity > 1) {
            cart[index].quantity -= 1;
        } else {
            cart.splice(index, 1);
        }
        updateCartDisplay();
        saveCartToLocalStorage();
    }
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    const cartItemCount = document.getElementById('cartItemCount');

    cartItems.innerHTML = '';
    let total = 0;
    let itemCount = 0;

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('flex', 'items-center', 'mb-2', 'pb-2', 'border-b');
        itemElement.innerHTML = `
    <img src="${item.image}" alt="${item.name}" class="w-10 h-10 object-cover mr-2">
    <div class="flex-1">
        <div class="font-semibold">${item.name}</div>
        <div class="text-sm text-gray-600">$${item.price.toFixed(2)} x ${item.quantity}</div>
    </div>
    <div class="flex items-center">
        <div class="mr-2">$${(item.price * item.quantity).toFixed(2)}</div>
        <button onclick="removeFromCart(${item.id})" class="remove-item text-gray-500 hover:text-red-500">
            <i class="bi bi-trash"></i>
        </button>
    </div>
`;
        cartItems.appendChild(itemElement);
        total += item.price * item.quantity;
        itemCount += item.quantity;
    });

    cartTotal.textContent = '$' + total.toFixed(2);
    cartItemCount.textContent = itemCount;
    cartItemCount.classList.toggle('scale-0', itemCount === 0);
}

function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}
// You can call this function to add a product to the cart
// For example: addToCart({id: 1, name: 'Product 1', price: 19.99, image: 'path/to/image.jpg'});