// Product data array: Centralized product information for dynamic rendering
// TODO: Consider moving product data to a separate JSON file for easier management
// OPTIMIZE: Could implement lazy loading for product images to improve initial page load
const products = [
  {
    name: "Chocolate Cake",
    image: "https://t4.ftcdn.net/jpg/03/08/40/43/240_F_308404381_LqyMIXDPOR6Ut1TqE2cJRQdxomGsQegc.jpg",
    price: 12.99,
    category: "Cakes",
    description: "Rich chocolate cake with creamy frosting"
  },
  {
    name: "Banana Bread",
    image: "https://t4.ftcdn.net/jpg/03/05/27/25/240_F_305272587_nv5RrWvFWM5u1UhsLYXQ60lTdp8xbDAE.jpg",
    price: 8.49,
    category: "Breads",
    description: "Moist banana bread with walnuts"
  },
  {
    name: "Blueberry Muffins",
    image: "https://t4.ftcdn.net/jpg/11/66/81/47/240_F_1166814778_RDIDYCOPUbka7JbgOs3CHeQN5uOMtUkM.jpg",
    price: 6.75,
    category: "Muffins",
    description: "Fresh blueberry muffins (pack of 6)"
  },
  {
    name: "Chocolate Chip Cookies",
    image: "https://t4.ftcdn.net/jpg/00/96/25/47/240_F_96254713_5tNAaUXMLKRUwk5XpYzYKWSqWUFXUcfP.jpg",
    price: 3.00,
    category: "Cookies",
    description: "Classic chocolate chip cookies (pack of 12)"
  },
  {
    name: "Cake Pops",
    image: "https://t3.ftcdn.net/jpg/08/16/11/88/240_F_816118821_4ALuopEY8qzJZ1RyvcL7PSVVlmMVfAzZ.jpg",
    price: 3.50,
    category: "Treats",
    description: "Decorated cake pops (pack of 6)"
  },
  {
    name: "Sweet Tarts",
    image: "https://images.unsplash.com/photo-1542761923-d1909278b75d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3dlZXQlMjB0YXJ0c3xlbnwwfHwwfHx8MA%3D%3D",
    price: 3.00,
    category: "Pastries",
    description: "Mini fruit tarts with pastry cream"
  },
  {
    name: "Croissant",
    image: "https://images.unsplash.com/photo-1691480162735-9b91238080f6?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 2.50,
    category: "Pastries",
    description: "Buttery, flaky French croissant"
  },
  {
    name: "Garlic Bread",
    image: "https://vikalinka.com/wp-content/uploads/2021/03/Garlic-Butter-Dinner-Rolls-11-Edit.jpg",
    price: 4.00,
    category: "Breads",
    description: "Warm garlic butter bread rolls"
  },
  {
    name: "Strawberry Cheesecake",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=240&h=160&fit=crop",
    price: 15.99,
    category: "Cakes",
    description: "Creamy cheesecake with fresh strawberries"
  },
  {
    name: "Cinnamon Rolls",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=240&h=160&fit=crop",
    price: 7.50,
    category: "Pastries",
    description: "Warm cinnamon rolls with glaze (pack of 4)"
  },
  {
    name: "Apple Pie",
    image: "https://media.istockphoto.com/id/2181060962/photo/slice-of-apple-crumb-pie-topped-with-a-scopp-of-vanilla-ice-cream-surrounded-by-fresh-picked.webp?a=1&b=1&s=612x612&w=0&k=20&c=1wOS5yhQzSLehQnvvzf1MdxFIXib79FSVU1eJYZQvzA=",
    price: 14.99,
    category: "Pies",
    description: "Traditional apple pie with flaky crust"
  },
  {
    name: "Sourdough Loaf",
    image: "https://plus.unsplash.com/premium_photo-1700767186260-eb8e4a0e3056?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNvdXJkb3VnaCUyMGxvYWZ8ZW58MHx8MHx8fDA%3D",
    price: 5.99,
    category: "Breads",
    description: "Artisan sourdough bread loaf"
  },
 /* { //Adding new products soon
    name: "Sourdough Loaf",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=240&h=160&fit=crop",
    price: 5.99,
    category: "Breads",
    description: "Artisan sourdough bread loaf"
  },
  {
    name: "Sourdough Loaf",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=240&h=160&fit=crop",
    price: 5.99,
    category: "Breads",
    description: "Artisan sourdough bread loaf"
  },
  {
    name: "Sourdough Loaf",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=240&h=160&fit=crop",
    price: 5.99,
    category: "Breads",
    description: "Artisan sourdough bread loaf"
  },
  {
    name: "Sourdough Loaf",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=240&h=160&fit=crop",
    price: 5.99,
    category: "Breads",
    description: "Artisan sourdough bread loaf"
  }*/
];

// Array to store cart items with persistence
let cartItems = [];

// Load saved cart from localStorage when page loads
// OPTIMIZE: Consider adding error handling for JSON.parse in case of corrupted localStorage data
// TODO: Add localStorage quota check to prevent errors when storage is full
document.addEventListener('DOMContentLoaded', () => {
  const savedCart = localStorage.getItem('cart');
  if (savedCart) {
    cartItems = JSON.parse(savedCart);
    updateCartUI();
  }
});

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

// Product rendering: Dynamically creates product cards from data array
// OPTIMIZE: Use DocumentFragment to batch DOM updates and improve performance
// TODO: Implement virtual scrolling for better performance with large product lists
function renderProducts() {
  const container = document.getElementById('productList');
  container.innerHTML = '';
  products.forEach((p, i) => {
    container.innerHTML += `
      <div class="product" data-category="${p.category}">
        <img src="${p.image}" alt="${p.name}" />
        <h3>${p.name}</h3>
        <p class="product-description">${p.description}</p>
        <p class="product-price">$${p.price.toFixed(2)}</p>
        <button onclick="addToCart(${i})">Add to Cart</button>
      </div>
    `;
  });
}

// Real-time product filtering based on user input
// OPTIMIZE: Add debouncing (250-300ms) to reduce number of filter operations during typing
// TODO: Consider using data attributes instead of innerText for more efficient filtering
function filterProducts() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  document.querySelectorAll('.product').forEach(p => {
    const visible = p.innerText.toLowerCase().includes(input);
    p.style.display = visible ? 'block' : 'none';
  });
}

function filterByCategory(category) {
  // Update active button
  document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  
  // Filter products
  document.querySelectorAll('.product').forEach(p => {
    if (category === 'all' || p.dataset.category === category) {
      p.style.display = 'block';
    } else {
      p.style.display = 'none';
    }
  });
  
  // Clear search input
  document.getElementById('searchInput').value = '';
}

// Add to cart functions:
function addToCart(index) {
  const product = products[index];
  const existing = cartItems.find(item => item.name === product.name);
  if (existing) {
    existing.quantity += 1;  // Increments quantity if item is already in cart
  } else {
    cartItems.push({ name: product.name, price: product.price, quantity: 1 });
  }

  saveCart();     //Saves cart items locally.
  updateCartUI(); // Refreshes cart display when items are added to it.
  showToast(`${product.name} added to cart!`);
}

// Cart UI updates: Refreshes cart display with current items and totals
// OPTIMIZE: Cache DOM references (cartPanel, cartList) to avoid repeated queries
// TODO: Consider using event delegation for remove buttons instead of inline onclick
function updateCartUI() {
  const cartPanel = document.getElementById('cart-panel');
  const cartList = cartPanel.querySelector('ul');
  const cartCount = document.getElementById('cart-count');

  cartList.innerHTML = '';
  let totalItems = 0;
  let grandTotal = 0;

  // Each cart item is rendered as a list item with remove button and total price
  
   cartItems.forEach((item, index) => {
    totalItems += item.quantity;
    const itemTotal = item.price * item.quantity;
    grandTotal += itemTotal;

    const li = document.createElement('li');
    li.innerHTML = `
      <strong>${item.name}</strong><br>
      Qty: ${item.quantity} × $${item.price.toFixed(2)}<br>
      Total: $${itemTotal.toFixed(2)}
      <br>
      <button onclick="removeFromCart(${index})">Remove</button>
    `;
    cartList.appendChild(li);
  });

  // Add grand total display
  const totalLi = document.createElement('li');
  totalLi.innerHTML = `<hr><strong>Grand Total: $${grandTotal.toFixed(2)}</strong>`;
  cartList.appendChild(totalLi);

  cartCount.textContent = totalItems;  // Update cart badge
}

function removeFromCart(index) {
  cartItems.splice(index, 1);
  saveCart();
  updateCartUI();
}

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cartItems));
}

function toggleCart() {
  document.getElementById('cart-panel').classList.toggle('open');
}

// Removed conflicting click handler for cart that was causing issues
// The cart is now toggled via the cart button in navigation section, not by clicking the panel itself

// Checkout process: Once purchase is complete cart will be cleared
function checkout() {
  if (cartItems.length === 0) return alert("Cart is empty!");
  alert("Thank you for your purchase!");
  cartItems = [];    // Clears cart after purchase
  saveCart();
  updateCartUI();
  toggleCart();      // Closes cart panel
}

// Toast notifications: Creates temporary success messages with auto-removal. Also love that it's a toast notification on a bakery project 😆
// TODO: Add toast queue system to prevent overlapping notifications
// OPTIMIZE: Reuse toast elements instead of creating new ones each time
function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.getElementById('toastContainer').appendChild(toast);
  setTimeout(() => toast.remove(), 3000);  // Auto-remove after 3 seconds. Here long enough to read, but not long enough to be annoying.
}

// Page initialization: Renders products and initializes cart UI when page loads
window.onload = () => {
  renderProducts();
  updateCartUI();
};

// Review submission: Handles customer reviews
// TODO: Add client-side validation for review length and content
// TODO: Implement backend API integration for storing reviews
// OPTIMIZE: Add loading state while submitting to prevent double submissions
function submitReview(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.querySelector('input[type="text"]').value;
  const rating = form.querySelector('select').value;
  const comment = form.querySelector('textarea').value;
  
  // In a real application, this would send to a server
  showToast(`Thank you ${name} for your ${rating}-star review!`);
  form.reset();
}

// Event registration
function registerForEvent(eventType) {
  // If this were to be deployed, it would open a registration form or redirect to event page. not sure how I'm gonna do that yet.&
  const eventNames = {
    'bread-making': 'Beginner Bread Making',
    'cookie-decorating': 'Kids Cookie Decorating',
    'holiday-cakes': 'Holiday Cake Decorating'
  };
  
  const eventName = eventNames[eventType] || 'Unknown Event';
  showToast(`Registration for ${eventName} has been added to your cart!`);
}

// Loyalty program signup
function signupLoyalty(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.querySelector('input[type="text"]').value;
  
  showToast(`Welcome to Hugs & Honey Rewards, ${name}! Check your email for your member card.`);
  form.reset();
}

// Switches between different contact form types
function switchTab(tabType) {
  // Hide all forms
  document.querySelectorAll('.contact-form').forEach(form => {
    form.classList.add('hidden');
  });
  
  // Remove active class from all tabs
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  
  // Show selected form and activate tab
  document.getElementById(`${tabType}-form`).classList.remove('hidden');
  event.target.classList.add('active');
}

// Order status checker
function checkOrderStatus(event) {
  event.preventDefault();
  const form = event.target;
  const orderNumber = form.querySelector('input[type="text"]').value;
  
  // Simulate order status check
  const statuses = ['Preparing', 'Baking', 'Ready for Pickup', 'Completed'];
  const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
  
  showToast(`Order #${orderNumber} status: ${randomStatus}`);
  form.reset();
}

// Catering request form submission
function submitCateringRequest(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.querySelector('input[type="text"]').value;
  const eventDate = form.querySelector('input[type="date"]').value;
  
  showToast(`Thank you ${name}! We will contact you within 24 hours about your ${eventDate} event.`);
  form.reset();
}