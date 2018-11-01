import {
  getAllReservationCoordinates,
  getMDistance,
  getReservationCoordinates,
  reservationValidations
} from '../utilities';

describe('getMDistance', () => {
  it('should return the Manhatton Distance given row seat idealRow and IdealSeat', () => {
    expect(getMDistance(1, 2, 5, 1)).toBe(3);
    expect(getMDistance(2, 5, 5, 1)).toBe(1);
    expect(getMDistance(1, 5, 5, 1)).toBe(0);
    expect(getMDistance(2, 8, 5, 1)).toBe(4);
  });
});

describe('getAllReservationsCoordinates', () => {
  it('should take a initial reservations string and output the index coordinates in an array of arrays', () => {
    expect(getAllReservationCoordinates('R1C2 R3C2')).toEqual([[0, 1], [2, 1]]);
    expect(getAllReservationCoordinates('R4C2')).toEqual([[3, 1]]);
  });
});

describe('getReservationCoordinates', () => {
  it('should take a string and output coordinates as a number[]', () => {
    expect(getReservationCoordinates('R4C3')).toEqual([3, 2]);
    expect(getReservationCoordinates('R0C2')).toEqual([-1, 1]);
  });
});

describe('reservationValidations', () => {
  it('should indicate whether a string is valid', () => {
    expect(reservationValidations(['R4C3', 'R53C3'], 4, 10)).toBeFalsy();
    expect(reservationValidations(['R4C3  ', 'R3C3'], 4, 10)).toBeTruthy();
    expect(reservationValidations(['R4C3', 'R5CC3'], 5, 10)).toBeFalsy();
    expect(reservationValidations(['R4C3', 'R3C3'], 4, 13)).toBeTruthy();

  });
});