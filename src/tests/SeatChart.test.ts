import SeatChart, {Seat} from '../SeatChart';

describe('SeatChart', () => {
  let Chart;
  beforeAll(() => {
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
});