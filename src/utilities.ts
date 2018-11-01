export const getMDistance = (row: number, seat: number, idealSeat: number, idealRow: number = 0) =>
	Math.abs(row-idealRow) + Math.abs(seat-idealSeat);
