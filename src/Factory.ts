
interface IOrder {
    place(): void;
    getDetails(): string;
}

class DineInOrder implements IOrder {
    constructor(private tableNumber: number){}

    place():void{
        console.log(`Se ha hecho un pedido en la mesa ${this.tableNumber}`)
    }
    getDetails(): string {
        return `Pedido para comer en la mesa ${this.tableNumber}`;
    }
}

class TakeAwayOrder implements IOrder {
    constructor(private deliveryAddress: string) {}

    place():void {
        console.log(`Se ha hecho un pedido para llevar a la direccion ${this.deliveryAddress}`);
        
    }
    getDetails(): string {
        return `Pedido para llevar a ${this.deliveryAddress}`;
    }
}


class OrderFactory {
   CreateOrder(type: string, params: any): IOrder {
    if (type === "DineIn"){
        return new DineInOrder(params.tableNumber)
    } else if (type === "TakeAway"){
        return new TakeAwayOrder(params.deliveryAddress)
    }
    throw new Error("Tipo de orden no soportado")
   }
}

const orderFactory = new OrderFactory();
const dineInOrder = orderFactory.CreateOrder('DineIn', {tableNumber: 5});
const takeAwayOrder = orderFactory.CreateOrder('TakeAway', {deliveryAddress: "Junin 123"})

dineInOrder.place()
takeAwayOrder.place()