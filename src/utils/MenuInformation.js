import MENU from '../constants/menu.js';

// 메뉴이름 넣으면 카테고리와 속성을 찾아줌
function getMenuInformation(name) {
  const category = Object.keys(MENU).find((key) =>
    Object.hasOwn(MENU[key], name),
  );
  const property = MENU[category][name];
  return { category, property };
}

export default getMenuInformation;
