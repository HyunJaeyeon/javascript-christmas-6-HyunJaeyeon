import Order from '../controller/Order.js';
import { checkMenu } from '../view/validation.js';

class MyOrders {
  #line;

  constructor(line) {
    this.list = {};
    this.#line = line.split(',');
    this.#addList();
    this.#getTotalPrice();
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

  #getCategoryTotal(category) {
    const categoryTotal = Object.values(this.list[category]).reduce(
      (acc, menu) => acc + menu.price * menu.quantity,
      0,
    );
    return categoryTotal;
  }

  #getTotalPrice() {
    this.totalPrice = Object.keys(this.list).reduce(
      (acc, category) => acc + this.#getCategoryTotal(category),
      0,
    );
  }

  getGift() {
    if (this.totalPrice > 120000) this.gift = ['샴페인', 25000];
  }
}

export default MyOrders;
