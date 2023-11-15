import { getDay, WEEK, X_MAS, SPECIAL } from '../constants/event.js';

class Events {
  #day;

  constructor(date, main, dessert) {
    this.date = date;
    this.quantity = { main, dessert };
    this.#day = getDay(date);
    this.discounts = {};
    this.#getDiscount();
  }

  #getDiscount() {
    if (this.date < X_MAS.MAX_DATE) {
      this.discounts.xmas = X_MAS.DISCOUNT(this.date);
    }
    if (WEEK.WEEKEND.includes(this.#day)) {
      this.discounts.weekend = WEEK.DISCOUNT(this.quantity.main);
    }
    if (WEEK.WEEKDAY.includes(this.#day)) {
      this.discounts.weekday = WEEK.DISCOUNT(this.quantity.dessert);
    }
    if (SPECIAL.DATE.includes(this.date)) {
      this.discounts.special = SPECIAL.DISCOUNT;
    }
  }

  getTotalDiscout() {
    const total = Object.values(this.discounts).reduce(
      (prev, cur) => prev + cur,
      0,
    );
    return total;
  }
}
export default Events;
