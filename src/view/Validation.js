import { DATE, ORDER } from '../constants/view.js';

const CheckNumber = {
  isNotValid: (input) => Number.isNaN(input) || input < 1,
  isNotInRange: (input, max) => input > max,
};

function checkDate(input) {
  if (
    CheckNumber.isNotValid(input) ||
    CheckNumber.isNotInRange(input, DATE.MAX_NUMBER)
  )
    throw new Error(DATE.ERROR_MESSAGE);
}

function checkQuantity(input) {
  const numberInput = Number(input);
  if (
    CheckNumber.isNotValid(numberInput) ||
    CheckNumber.isNotInRange(numberInput, ORDER.MAX_NUMBER)
  )
    throw new Error(ORDER.ERROR_MESSAGE);
}

export { CheckNumber, checkDate, checkQuantity };
