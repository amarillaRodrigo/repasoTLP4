interface Observer {
    updateStatus(estado: string): void;

}

class Kitchen implements Observer{
    updateStatus(estado:string): void {
        console.log(`Cocina notificada: ${estado}`);
        
    }
}

class Waiter implements Observer {
    updateStatus(estado: string): void {
        console.log(`Mesero notificado: ${estado}`);
        
    }
}

class Notification implements Observer {
    updateStatus(estado: string): void {
        console.log(`Notificacion: ${estado}`);
        
    }
}


class Order implements Observer {
    private observers: Observer[] = [];
    private estado: string = 'En preparacion';

    addObserver(observer: Observer):void {
        this.observers.push(observer)

    }

    updateStatus(estado: string): void {
        this.estado = estado;
        this.notifyObservers()
    }

    notifyObservers(): void {
        this.observers.forEach(observer => observer.updateStatus(this.estado))
    }
}

const order = new Order();
const kitchen = new Kitchen();
const waiter = new Waiter();
const notification = new Notification();

order.addObserver(kitchen);
order.addObserver(waiter);
order.addObserver(notification);
order.updateStatus('Listo para entregar');