let cartItems = [];

function addToCart(product, ...quantities) {
    quantities.forEach(quantity => {
      const existingItem = cartItems.find(item => item.product.id === product.id);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        cartItems.push({ product: product, quantity: quantity });
      }
    });
  }
  

function clearCart() {
  cartItems = [];
}

function getCartItems() {
  return cartItems;
}

export { addToCart, clearCart, getCartItems };

