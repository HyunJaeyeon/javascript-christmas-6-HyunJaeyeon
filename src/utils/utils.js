const CheckNumber = {
  isNotValid: (input) => Number.isNaN(input) || input < 1,
  isNotInRange: (input, max) => input > max,
};

const isKeyExist = (category, name) => Object.hasOwn(category, name);

export { CheckNumber, isKeyExist };

console.log(isKeyExist('Beverage', '제로콜라'));
