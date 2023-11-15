import Order from '../controller/Order.js';
import { checkMenu } from '../view/validation.js';

class MyOrders {
  #line;

  constructor(line) {
    this.list = {};
    this.#line = line.split(',');
    this.#addList();
  }

  #addMenu(line) {
    const order = new Order(line);
    const menu = order.getMenu();

    if (!this.list[menu.category]) this.list[menu.category] = {};

    checkMenu.isExist(this.list[menu.category], menu.name);

    this.list[menu.category][menu.name] = menu.property;
  }

  #addList() {
    this.#line.forEach((line) => this.#addMenu(line));

    checkMenu.isOnlyCategory(this.list);
  }
}

export default MyOrders;
