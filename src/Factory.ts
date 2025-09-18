
interface IOrder {
    place(): void;
    getDetails(): string;
}



const orderFactory = new OrderFactory();

const dineInOrder = orderFactory.createOrder('DineIn', { tablenumber: 5});
const takeAwayOrder = orderFactory.createOrder('TakeAway', {deliveryAddress: '123 Main St'});

dineInOrder.place()
takeAwayOrder.place()