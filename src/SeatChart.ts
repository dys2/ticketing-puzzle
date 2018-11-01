import { getMDistance } from './utilities';


interface SeatInterface {
	reserved: boolean;
	manhattanDistance: number;
}



/*
Seat
mDistance: number
*/
export class Seat implements SeatInterface {
	private _reserved = false;
	private _manhattanDistance = 0;

	constructor(mDistance: number) {
		this._manhattanDistance = mDistance;
	}

	set reserved(isReserved: boolean) {
		this._reserved = isReserved;
	}

	get reserved(): boolean {
		return this._reserved;
	}

	get manhattanDistance(): number {
		return this._manhattanDistance;
	}
}

/* 
SeatChart
rows: number, seats: number
*/

export default class SeatChart {
	constructor(rows: number, seats: number) {
		this.idealSeat = (seats - 1) / 2;
		this.setChart(rows, seats);
	}

	private _chart:Seat[][];

	private idealSeat: number;

	get chart(): Seat[][] {
		return this._chart;
	}

	setChart(rows: number, seats: number) {

		this._chart = new Array(rows)
			.fill(0)
			.map((_, row) =>
				new Array(seats)
					.fill(0)
					.map((_, seat) => 
						new Seat(getMDistance(row, seat, 5))
					)
			);
  }
  
  getSeat = (row: number, seat: number): Seat =>
    this.chart[row][seat];

	isReserved = (row: number, seat: number): boolean =>
		this._chart[row][seat].reserved;

}