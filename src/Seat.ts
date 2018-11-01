interface SeatInterface {
	reserved: boolean;
	manhattanDistance: number;
}

/*
Seat
mDistance: number
*/
export default class Seat implements SeatInterface {
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
