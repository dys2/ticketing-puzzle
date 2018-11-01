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
  
  private setConsecutiveSeats = (row: number, startSeat: number, num: number) => {
		for (let i = 0; i < num; i++) {
			this.getSeat(row, startSeat + i).reserved = true;
		}
	}

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
    
  

  getBestSeats(seats: number): string {
    if (seats < 1) return "Must select at least one seat";
    if (seats > 10) return "No more than 10 consecutive seats at a time";
    
		const consecutive = this.chart.reduce(
			(acc, row, rowI) => {

        // get the current rows best score
        const rowScore = lowestConsecutiveScoreIndex(seats, row);
        
        // means there were no matches
        if (rowScore.startSeat === - 1) return acc;
        
				return acc.score <= rowScore.score ? acc : {...rowScore, row: rowI};
			},
			{score: Infinity, row: 0, startSeat: 0}
		);

    // If we found consecutive seats
		if (consecutive.score < Infinity) {
			this.setConsecutiveSeats(consecutive.row, consecutive.startSeat, seats);
      return seats === 1 ?
        `R${consecutive.row + 1}C${consecutive.startSeat + 1}` :
        `R${consecutive.row + 1}C${consecutive.startSeat + 1} - R${consecutive.row + 1}C${consecutive.startSeat + seats}`;
		}

		return "Not Available";
  }

  get reservedSeatsCount(): number {
    return this._chart.reduce(
      (acc, row) =>
        row.reduce(
          (acc, seat: SeatInterface) => seat.reserved ? ++acc : acc,
          0
        ) + acc,
        0
    )
  }
}



interface LowestConsecutiveScoreIndexInterface {
  startSeat:number;
  score:number;
}

// outputs the startSeat and score of the rows best consecutive score
export const lowestConsecutiveScoreIndex = (num: number = 1, seats: SeatInterface[]): LowestConsecutiveScoreIndexInterface => {
	let score: number = Infinity;
	let startSeat: number = -1;

	for (let i = 0; i <= seats.length - num; i++) {
		let sum = 0;
    let valid = true;

    // add up the consecutive score at each index but make sure the seats are not reserved
		for (let j = 0; j < num; j++) {
			const seat = seats[i + j];
			if (seat.reserved) valid = false;
			sum += seat.manhattanDistance;
    }
    
    if (valid && sum < score) {
			score = sum;
			startSeat = i;
    };
    
  }
  
	return { startSeat, score };
}

