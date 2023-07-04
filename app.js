import products from "./product.js";
import { addToCart, clearCart, getCartItems } from './cart.js';

document.addEventListener('DOMContentLoaded', () => {
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const clearCartButton = document.querySelector('.clear-cart');
  const cartItemsContainer = document.querySelector('.cart-items');

  addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCartHandler);
  });

  function addToCartHandler(event) {
    const button = event.target;
    const productID = parseInt(button.dataset.productId);
    const product = products.find(p => p.id === productID);
  
    if (product) {
      addToCart(product, 1);
      displayCartItems();
    } else {
      console.log('Product not found.');
    }
  }
  

  clearCartButton.addEventListener('click', clearCartHandler);

  function clearCartHandler() {
    clearCart();
    displayCartItems();
  }

  function displayCartItems() {
    cartItemsContainer.innerHTML = '';
    let items = getCartItems();
    
    let totalAmount = 0;

    items.forEach(item => {
      const product = item.product;
      const quantity = item.quantity;
      const itemTotal = product.price * quantity;
      totalAmount += itemTotal;
      const itemElement = document.createElement('div');
      itemElement.innerHTML += `
        <p >Product Name: ${product.name}</p>
        <p>Quantity: ${quantity}</p>
        <p>Price per Item: $${product.price}</p>
        <p>Item Total: $${itemTotal}</p>
        <p>----------------------</p>
      `;
      cartItemsContainer.appendChild(itemElement);
    });

    const totalAmountElement = document.createElement('p');
    totalAmountElement.textContent = `Total Amount: $${totalAmount}`;
    cartItemsContainer.appendChild(totalAmountElement);
  }

  displayCartItems();
});
