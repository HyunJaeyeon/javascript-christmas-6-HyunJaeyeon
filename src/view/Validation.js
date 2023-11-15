import { DATE } from '../constants/view.js';

export const CheckNumber = {
  isNotValid: (input) => Number.isNaN(input) || input < 1,
  isNotInRange: (input, max) => input > max,
};

function CheckDate(input) {
  if (
    CheckNumber.isNotValid(input) ||
    CheckNumber.isNotInRange(input, DATE.MAX_NUMBER)
  )
    throw new Error(DATE.ERROR_MESSAGE);
}

export default CheckDate;
// const result = CheckDate(Number('32'));
// console.log(result);
