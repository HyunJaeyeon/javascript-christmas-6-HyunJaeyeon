import MENU from '../constants/menu.js';
import { isKeyExist } from './utils.js';
import { checkMenu } from '../view/validation.js';

function getMenuInformation(name) {
  const category = Object.keys(MENU).find((key) => isKeyExist(MENU[key], name));

  checkMenu.isNotExist(category);

  const property = MENU[category][name];

  return { category, property };
}

export default getMenuInformation;
