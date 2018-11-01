import SeatChart from './SeatChart';

import {
  getAllReservationCoordinates,
  getReservationCoordinates,
  reservationValidations
} from './helpers';

const readline = require('readline');

let rows:number = process.argv[2] ? parseInt(process.argv[2]) : 3;
let seats:number = process.argv[3] ? parseInt(process.argv[3]) : 11;

const Chart = new SeatChart(rows, seats);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});


export const initReservations = () => {
	rl.question('Set initial reservations:\n', (reservations: string) => {
    const arr = reservations
      .split(' ')
      .filter(str => str !== "");

    const valid = reservationValidations(arr, rows, seats);
		if (!valid) {
      console.log("Invalid reservations.  Make sure the coordinates exist and are of format R2C2.")
			return initReservations(); 
		}
    
		getAllReservationCoordinates(reservations).forEach((coordinate) => {
			const seat = Chart.getSeat(coordinate[0], coordinate[1]);
			seat.reserved = true;
    });
    console.log('Seats reserved, you may continue:');
	});
}


export const seatFinder = () => {
	rl.on('line', (input:string) => {
		if (input === "EOF") {
      // must still get total reserved seats
      console.log(Chart.reservedSeatsCount);
      rl.close();
      return;
		}
		const best = Chart.getBestSeats(Number(input));
		console.log(best);
	});
}