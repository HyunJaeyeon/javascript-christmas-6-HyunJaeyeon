import CheckDate, { CheckNumber } from '../../src/view/validation';

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
    const RANGE = 31;
    const OUTPUT = true;

    // when
    const result = CheckNumber.isNotInRange(INPUT_RETURN, RANGE);
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
      const RANGE = 31;
      const ERROR = '[ERROR]';

      // when, then
      expect(() => CheckDate(INPUT_RETURN, RANGE)).toThrow(ERROR);
    },
  );
});
