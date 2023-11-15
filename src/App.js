import User from './controller/User';
import Events from './controller/Events';

class App {
  async run() {
    const user = new User();
    await user.getDate();
    await user.getOrders();

    const event = new Events(user.date, user.myOrders.list);
  }
}

export default App;
