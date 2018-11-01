import SeatChart from '../SeatChart';
import Seat from '../Seat';

describe('SeatChart', () => {
  let Chart;
  beforeAll(() => {
    // be aware we are making changes to this class with these tests so they can effect the output of other tests
    // if you would like to utilize a hook that creates a new instance before each test use beforeEach
    Chart = new SeatChart(3, 11);
  })
  it('should create instance of SeatChart', () => {
    expect(Chart).toBeInstanceOf(SeatChart);
  });
  it('should contain chart property', () => {
    expect(Chart).toHaveProperty("chart");
  });
  it('should contain chart property that is an Array of Arrays of Seats', () => {
    expect(Chart.chart[0][0]).toBeInstanceOf(Seat);
  });
  it('should contain method to access seat', () => {
    expect(Chart.getSeat(0, 0)).toBeInstanceOf(Seat);
  });
  it('should have an idealSeat variable initialized to half of the row length - 1', () => {
    expect(Chart).toHaveProperty("idealSeat", 5);
  });
  it('should have method to indicated whether a seat is reserved', () => {
    expect(Chart.isReserved(1, 2)).toBeFalsy();
    Chart.getSeat(1, 2).reserved = true;
    expect(Chart.isReserved(1, 2)).toBeTruthy();
  });
  it('should contain setConsecutiveSeats method that sets reserved consecutive seats', () => {
    expect(Chart.getSeat(0, 2).reserved).toBeFalsy();
    Chart.setConsecutiveSeats(0, 2, 3);
    expect(Chart.getSeat(0, 2).reserved).toBeTruthy();
    expect(Chart.getSeat(0, 3).reserved).toBeTruthy();
    expect(Chart.getSeat(0, 4).reserved).toBeTruthy();
    expect(Chart.getSeat(0, 5).reserved).toBeFalsy();
  });
  it('should contain getBestSeats method that indicates the best possible seats available', () => {
    expect(Chart.getBestSeats(4)).toBe("R1C6 - R1C9");
    expect(Chart.getBestSeats(7)).toBe("R2C4 - R2C10");
  });
});