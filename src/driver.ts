import SeatChart from './SeatChart';

import {
  getAllReservationCoordinates,
  getReservationCoordinates,
  reservationValidations
} from './utilities';

const readline = require('readline');

let rows:number = process.argv[2] ? parseInt(process.argv[2]) : 3;
let seats:number = process.argv[3] ? parseInt(process.argv[3]) : 11;

const Chart = new SeatChart(rows, seats);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


export const initReservations = () => {
	rl.question('What are the initial reservations?', (reservations: string) => {
		const arr = reservations.split(' ');
		const valid = reservationValidations(arr, rows, seats);
		if (!valid) {
			return initReservations(); 
		}
	
		getAllReservationCoordinates(reservations).forEach((coordinate) => {
			const seat = Chart.getSeat(coordinate[0], coordinate[1]);
			seat.reserved = true;
		});
		return;

	});
}


export const seatFinder = () => {
	rl.on('line', (input:string) => {
		if (input === "EOF") {
      // must still get total reserved seats
      rl.close();
      return;
		}
		const best = Chart.getBestSeats(Number(input));
		console.log(best);
	});
}