const item = {
  name: 'Foo',
  description: 'Fusce consequat dui est, semper.',
  price: 50,
  quantity: 100,
  discount(percent) {
    const discount = this.price * percent / 100;
    // we are mutating the object with each invocation 
    this.price -= discount;
    return this.price;
  },
};

/*
discount(percent) {
    const discount = this.price * percent / 100;
    return this.price - discount;
  },
*/