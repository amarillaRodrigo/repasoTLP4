// Patron singleton
class ReservationManager {
    private static instance: ReservationManager;
    private reservations: string[] = []

    private constructor() {}

    public static getInstance(): ReservationManager{
        if (!ReservationManager.instance) {
            ReservationManager.instance = new ReservationManager();
        }
        return ReservationManager.instance
    }

    public addReservations(name: string): void{
        this.reservations.push(name)
        console.log(`Reserva añadida a nombre de ${name}`)
    }

    public getReservation(): string[]{
        return this.reservations
    }

}

const manager1 = ReservationManager.getInstance();
const manager2 = ReservationManager.getInstance();
console.log(manager1 === manager2);


manager1.addReservations("Juan Victoruel - 09/08 - 21 hs");
manager2.addReservations("Fodrigo Amarilla- 06/08 - 15 hs")
console.log("Reservas actuales", manager1.getReservation());


