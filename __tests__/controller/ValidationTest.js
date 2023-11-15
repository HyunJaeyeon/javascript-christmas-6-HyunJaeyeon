import {
  CheckNumber,
  checkDate,
  checkQuantity,
} from '../../src/view/validation';

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

describe('메뉴 수량 체크 테스트', () => {
  test.each([[' '], ['n'], ['0'], ['1    4'], ['21']])(
    '1이상 20이하의 숫자값인지 확인',
    async (input) => {
      // given
      const ERROR = '[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.';

      // when, then
      expect(() => checkQuantity(input)).toThrow(ERROR);
    },
  );
});
