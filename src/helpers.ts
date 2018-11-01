import Seat from './Seat';

export const reservationValidations = (arr: string[], rows: number, seats: number) =>
  arr.every((str: string) => {
    switch (true) {
      case (getReservationCoordinates(str)[0] >= rows):
        return false;
      case (getReservationCoordinates(str)[1] >= seats):
        return false;
      // if it gets through the regex and is in bounds then we're in business
      case (str.match(/R\d+C\d+/) && str.match(/R\d+C\d+/).length > 0):
        return true;
      default:
        return false;
    }
  });

  
export const getAllReservationCoordinates = (reservations: string): number[][] =>
  reservations
    .split(' ')
    .filter(str => str !== "")
    .map(getReservationCoordinates);


export const getReservationCoordinates = (reservation: string): number[] =>
  reservation
    .trim()
    .split(/[^0-9]/)
    .slice(1)
    .map(Number)
    .map(subtractOne);


const subtractOne = (num: number): number => num - 1;

// can be used to determine manhattan distance
export const getMDistance = (row: number, seat: number, idealSeat: number, idealRow: number = 0) =>
  Math.abs(row - idealRow) + Math.abs(seat - idealSeat);


// outputs the startSeat and score of the rows best consecutive score
export const lowestConsecutiveScoreIndex = (num: number = 1, seats: Seat[]): {
  startSeat: number;
  score: number;
} => {
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

