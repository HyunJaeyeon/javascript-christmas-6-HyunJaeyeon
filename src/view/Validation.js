import { DATE, ORDER } from '../constants/view.js';
import { CheckNumber, isKeyExist } from '../utils/utils.js';

const checkDate = (input) => {
  if (
    CheckNumber.isNotValid(input) ||
    CheckNumber.isNotInRange(input, DATE.MAX_NUMBER)
  )
    throw new Error(DATE.ERROR_MESSAGE);
};

const checkMenu = {
  quantity(input) {
    const numberInput = Number(input);
    if (
      CheckNumber.isNotValid(numberInput) ||
      CheckNumber.isNotInRange(numberInput, ORDER.MAX_NUMBER)
    )
      throw new Error(ORDER.ERROR_MESSAGE);
  },

  isExist(category, name) {
    if (isKeyExist(category, name)) throw new Error(ORDER.ERROR_MESSAGE);
  },

  isNotExist(input) {
    if (!input) throw new Error(ORDER.ERROR_MESSAGE);
  },

  isOnlyCategory(list) {
    if (
      Object.keys(list).length === 1 &&
      this.isExist(list, ORDER.NOT_ONLY_CATEGORY)
    )
      throw new Error(ORDER.ERROR_MESSAGE);
  },
};
export { checkDate, checkMenu };
