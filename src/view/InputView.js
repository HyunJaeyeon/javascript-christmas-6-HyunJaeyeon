import { Console } from '@woowacourse/mission-utils';
import INPUT_MESSAGE from '../constants/inputMessage.js';

const InputView = {
  async readDate() {
    const date = await Console.readLineAsync(INPUT_MESSAGE.DATE);
    return Number(date);
  },

  async readOrder() {
    const order = await Console.readLineAsync(INPUT_MESSAGE.ORDER);
    return order;
  },
  // ...
};

export default InputView;
