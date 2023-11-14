// 메뉴 확인
import getMenuInformation from '../utils/MenuInformation.js';

class Order {
  #menu = {};

  #information;

  constructor(line) {
    [this.#menu.name, this.#menu.quantity] = line.split('-');
    this.#information = { ...getMenuInformation(this.#menu.name) };
  }

  // 속성에 수량을 추가
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
