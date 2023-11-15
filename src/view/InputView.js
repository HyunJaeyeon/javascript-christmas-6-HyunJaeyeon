import { Console } from '@woowacourse/mission-utils';
import { DATE, ORDER } from '../constants/view.js';

const InputView = {
  readDate: async () => {
    const date = await Console.readLineAsync(DATE.INPUT_MESSAGE);
    return Number(date);
  },

  readOrder: async () => {
    const order = await Console.readLineAsync(ORDER.INPUT_MESSAGE);
    return order;
  },
  // ...
};

export default InputView;
