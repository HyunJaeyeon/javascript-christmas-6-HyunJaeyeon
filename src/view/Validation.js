// TODO: date를 string/number 로 받을지 생각
export const CheckNumber = {
  isNotValid: (input) => Number.isNaN(input) || input < 1,
  isNotInRange: (input, max) => input > max,
};

function CheckDate(input, max) {
  if (CheckNumber.isNotValid(input) || CheckNumber.isNotInRange(input, max))
    throw new Error('[ERROR]');
}

export default CheckDate;
