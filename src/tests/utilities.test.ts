import {getMDistance} from '../utilities';

describe('getMDistance', () => {
  it('should return the Manhatton Distance given row seat idealRow and IdealSeat', () => {
    expect(getMDistance(1, 2, 5, 1)).toBe(3);
    expect(getMDistance(2, 5, 5, 1)).toBe(1);
    expect(getMDistance(1, 5, 5, 1)).toBe(0);
    expect(getMDistance(2, 8, 5, 1)).toBe(4);
  });
});