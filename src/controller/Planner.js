import { Console } from '@woowacourse/mission-utils';
import InputView from '../view/InputView.js';
import { checkDate } from '../view/validation.js';

class Planner {
  #date;

  #validate(date) {
    try {
      checkDate(date);
    } catch (error) {
      Console.print(error);
      this.getDate();
    }
  }

  async getDate() {
    this.#date = await InputView.readDate();
    this.#validate(this.#date);
  }
}

const planner = new Planner();
planner.getDate();
