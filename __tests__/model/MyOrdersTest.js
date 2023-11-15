import MyOrders from '../../src/model/MyOrders';

describe('주문 입력 후 형식에 맞춰 객체에 저장', () => {
  test('주문 저장값 확인', async () => {
    // given
    const INPUT_LINE =
      '티본스테이크-1,바비큐립-1,초코케이크-2,제로콜라-1,레드와인-2,샴페인-3';
    const ORDERS_LIST = {
      Main: {
        티본스테이크: { price: 55000, quantity: 1 },
        바비큐립: { price: 54000, quantity: 1 },
      },
      Dessert: { 초코케이크: { price: 15000, quantity: 2 } },
      Beverage: {
        제로콜라: { price: 3000, quantity: 1 },
        레드와인: { price: 60000, quantity: 2 },
        샴페인: { price: 25000, quantity: 3 },
      },
    };

    // when
    const myOrders = new MyOrders(INPUT_LINE);

    // then
    const result = myOrders.list;

    expect(result).toEqual(ORDERS_LIST);
  });
});
