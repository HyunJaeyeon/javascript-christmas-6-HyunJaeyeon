import { checkDate, checkMenu } from '../../src/view/validation';
import { CheckNumber } from '../../src/utils/utils';
import MENU from '../../src/constants/menu';

describe('숫자입력 유효 확인 테스트', () => {
  test.each([[''], ['n'], ['0'], ['1    4']])(
    '1이상의 숫자값이 아니면 true',
    async (input) => {
      // given
      const INPUT_RETURN = Number(input);
      const OUTPUT = true;

      // when
      const result = CheckNumber.isNotValid(INPUT_RETURN);
      // then
      expect(result).toEqual(OUTPUT);
    },
  );

  test.each([['32'], ['40']])('범위 내에 없으면 true', async (input) => {
    // given
    const INPUT_RETURN = Number(input);
    const MAX = 31;
    const OUTPUT = true;

    // when
    const result = CheckNumber.isNotInRange(INPUT_RETURN, MAX);
    // then
    expect(result).toEqual(OUTPUT);
  });
});

describe('날짜 체크 테스트', () => {
  test.each([[''], ['n'], ['0'], ['1    4'], ['32']])(
    '1이상 31이하의 숫자값인지 확인',
    async (input) => {
      // given
      const INPUT_RETURN = Number(input);
      const ERROR = '[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.';

      // when, then
      expect(() => checkDate(INPUT_RETURN)).toThrow(ERROR);
    },
  );
});

describe('메뉴 체크 테스트', () => {
  test.each([[' '], ['n'], ['0'], ['1    4'], ['21']])(
    '1이상 20이하의 숫자값인지 확인',
    async (input) => {
      // given
      const ERROR = '[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.';

      // when, then
      expect(() => checkMenu.quantity(input)).toThrow(ERROR);
    },
  );

  test('메뉴 중복 검사 - 특정 메뉴(키값)가 카테고리(객체) 안에 존재하면 에러', async () => {
    // given
    const CATEGORY = MENU.Beverage;
    const NAME = '제로콜라';
    const ERROR = '[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.';

    // when, then
    expect(() => checkMenu.isExist(CATEGORY, NAME)).toThrow(ERROR);
  });

  test('특정 카테고리만 존재할 때 - 음료만 시켰을 경우', async () => {
    // given
    const LIST = {
      Beverage: {
        제로콜라: { price: 5000, quantity: 2 },
        와인: { price: 5000, quantity: 2 },
      },
    };
    const ERROR = '[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.';

    // when, then
    expect(() => checkMenu.isOnlyCategory(LIST)).toThrow(ERROR);
  });
});
