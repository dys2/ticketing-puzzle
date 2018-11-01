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
		.map(getReservationCoordinates);


export const getReservationCoordinates = (reservation: string): number[]  =>
    reservation
			.trim()
			.split(/[^0-9]/)
			.slice(1)
			.map(Number)
      .map(subtractOne);
      
  
const subtractOne = (num: number): number => num - 1;

// can be used to determine manhattan distance
export const getMDistance = (row: number, seat: number, idealSeat: number, idealRow: number = 0) =>
	Math.abs(row-idealRow) + Math.abs(seat-idealSeat);
