import Order from '../../src/controller/Order';

describe('각 메뉴 비교 후 이름, 카테고리, 프로퍼티 받기', () => {
  test('이름 받기', async () => {
    // given
    const MENU_LINE = '해산물파스타-2';
    const NAME = '해산물파스타';

    // when
    const order = new Order(MENU_LINE);
    const menu = order.getMenu();
    const result = menu.name;

    // then
    expect(result).toEqual(NAME);
  });

  test('프로퍼티 받기 - 가격, 수량 일치 확인', async () => {
    // given
    const MENU_LINE = '해산물파스타-2';
    const PROPERTY = { price: 35000, quantity: 2 };

    // when
    const order = new Order(MENU_LINE);
    const menu = order.getMenu();
    const result = menu.property;

    // then
    expect(result).toEqual(PROPERTY);
  });

  test('카테고리 받기', async () => {
    // given
    const MENU_LINE = '해산물파스타-2';
    const CATEGORY = 'Main';

    // when
    const order = new Order(MENU_LINE);
    const menu = order.getMenu();
    const result = menu.category;

    // then
    expect(result).toEqual(CATEGORY);
  });

  test('전체 동작 확인 - getMenu 리턴값 확인', async () => {
    // given
    const MENU_LINE = '해산물파스타-2';

    const NAME = '해산물파스타';
    const CATEGORY = 'Main';
    const PROPERTY = { price: 35000, quantity: 2 };
    const MENU = { name: NAME, category: CATEGORY, property: PROPERTY };

    // when
    const order = new Order(MENU_LINE);
    const result = order.getMenu();

    // then
    expect(result).toEqual(MENU);
  });
});
