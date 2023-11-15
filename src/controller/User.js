import { Console } from '@woowacourse/mission-utils';
import InputView from '../view/InputView.js';
import { checkDate } from '../view/validation.js';
import MyOrders from '../model/MyOrders.js';

class User {
  date;

  myOrders;

  async #validateDate(date) {
    try {
      checkDate(date);
    } catch (error) {
      Console.print(error);
      await this.getDate();
    }
  }

  async getDate() {
    this.date = await InputView.readDate();
    await this.#validateDate(this.date);
  }

  async #validateOrders(orderLine) {
    try {
      this.myOrders = new MyOrders(orderLine);
      // this.#myOrders = myOrders.list;
    } catch (error) {
      Console.print(error);
      await this.getOrders();
    }
  }

  async getOrders() {
    const orderLine = await InputView.readOrder();
    await this.#validateOrders(orderLine);
  }
}
export default User;
