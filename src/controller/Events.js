import { getDay, WEEK, X_MAS, SPECIAL } from '../constants/event.js';

class Events {
  #day;

  constructor(date, list) {
    this.date = date;
    this.list = list;
    this.#day = getDay(date);
    this.discounts = {};
    this.#getDiscount();
    this.mainQuantity = this.#getCategoryQuantity('Main');
    this.dessertQuantity = this.#getCategoryQuantity('Dessert');
  }

  #getCategoryQuantity(category) {
    const categoryQuantity = Object.values(this.list[category]).reduce(
      (acc, menu) => acc + menu.quantity,
      0,
    );
    return categoryQuantity;
  }

  #getDiscount() {
    if (this.date < X_MAS.MAX_DATE) {
      this.discounts.xmas = X_MAS.DISCOUNT(this.date);
    }
    if (WEEK.WEEKEND.includes(this.#day) && this.mainQuantity) {
      this.discounts.weekend = WEEK.DISCOUNT(this.mainQuantity);
    }
    if (WEEK.WEEKDAY.includes(this.#day) && this.dessertQuantity) {
      this.discounts.weekday = WEEK.DISCOUNT(this.dessertQuantity);
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
