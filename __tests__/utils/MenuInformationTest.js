import getMenuInformation from '../../src/utils/MenuInformation';

describe('메뉴 이름 넣으면 메뉴판에서 해당 카테고리와 가격 속성을 찾아줌', () => {
  test('카테고리확인', async () => {
    // given
    const MENU_NAME = '바비큐립';
    const CATEGORY = 'Main';

    // when
    const information = getMenuInformation(MENU_NAME);
    const result = information.category;

    // then
    expect(result).toEqual(CATEGORY);
  });

  test('가격 속성 확인', async () => {
    // given
    const MENU_NAME = '바비큐립';
    const PROPERTY = { price: 54000 };

    // when
    const information = getMenuInformation(MENU_NAME);
    const result = information.property;

    // then
    expect(result).toEqual(PROPERTY);
  });

  test('전체 동작 확인 - 메뉴이름, 카테고리 리턴값 확인', async () => {
    // given
    const MENU_NAME = '바비큐립';
    const INFO = { category: 'Main', property: { price: 54000 } };

    // when
    const result = getMenuInformation(MENU_NAME);

    // then
    expect(result).toEqual(INFO);
  });
});
