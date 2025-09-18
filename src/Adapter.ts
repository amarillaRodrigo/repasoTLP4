class OldOrderSystem {
    placeOrder(order: string) : void {
        console.log(`Orden recibida en el sistema antiguo: ${order}`);
        
    }
}

interface INewOrderSystem {
    submitOrder(order: string): void;
}

class OrderAdapter implements INewOrderSystem {
    constructor(private oldSystem:OldOrderSystem) {}

    submitOrder(order: string): void {
        this.oldSystem.placeOrder(order)
    }
}

const oldSystem = new OldOrderSystem();

const adapter = new OrderAdapter(oldSystem)

adapter.submitOrder('Orden para la mesa 5')