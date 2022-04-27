class Cart {
  constructor() {
    this.items = [];
  }

  addToCart(item) {
    this.items.push(item);
  }

  removeFromCart(item) {
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }
}

module.exports = Cart;