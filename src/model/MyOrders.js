import Order from '../controller/Order.js';

class MyOrders {
  #line;

  constructor(line) {
    this.list = {};
    this.#line = line.split(',');
  }

  #addMenu(line) {
    const order = new Order(line);
    const menu = order.getMenu();

    if (!this.list[menu.category]) this.list[menu.category] = {};

    this.list[menu.category][menu.name] = menu.property;
  }

  addList() {
    this.#line.forEach((line) => this.#addMenu(line));
  }
}

export default MyOrders;
