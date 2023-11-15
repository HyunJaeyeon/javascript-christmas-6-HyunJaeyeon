import getMenuInformation from '../utils/menuInformation.js';
import { checkMenu } from '../view/validation.js';

class Order {
  #menu = {};

  #information;

  constructor(line) {
    [this.#menu.name, this.#menu.quantity] = line.split('-');

    checkMenu.quantity(this.#menu.quantity);

    this.#information = { ...getMenuInformation(this.#menu.name) };
  }

  #addQuantity() {
    const quantity = { quantity: Number(this.#menu.quantity) };
    return { ...this.#information.property, ...quantity };
  }

  getMenu() {
    const { name } = this.#menu;
    const { category } = this.#information;
    const property = this.#addQuantity();

    return { name, category, property };
  }
}

export default Order;
