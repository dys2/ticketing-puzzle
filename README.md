# Seating Program

## Parts
1. Seating Chart
2. Driver Program

### Seating Chart User Acceptance Criteria:

- [X] The seating chart should be able to be initialized to a specific number of rows and seats.
- [X] The seating chart should be able to mark a specific seat as reserved.
- [X] The seating chart should be able to return if a specific seat is reserved.
- [X] Given a request for a number of seats, the seating chart should be able to find the best available group of consecutive seats.

### Driver Program User Acceptance Criteria:
- [X] Create a seating chart with 3 rows and 11 columns.
- [X] The first line of input (Up to a newline character) should take input in the form of: R1C1 R1C4 R2C5. These seats are the initial reservations. In this case, the seats at:
  - Row 1, Column 1
  - Row 1, Column 4
  - Row 2, Column 5
Should all be marked as reserved before taking reservation requests. This line can be blank.
- [X] Subsequent lines of input (Up to an EOF character) should take integers representing the number of consecutive seats to reserve. For example: 5 represents a request for 5 consecutive seats.
- [X] If a group of consecutive seats matching the requested criteria is found, reserve those seats and print out the range of the reservation in the following format: R3C1 - R3C6. This example would represent a reservation of 6 seats 1, 2, 3, 4, 5 and 6 in row 3. A lone seat should be output as simply R3C1 (Seat 1 in row 3)
- [X] If there are not enough consecutive seats to fulfill a request, output Not Available.
- [X] Upon EOF, output the number of remaining available seats


### Additional User Acceptance Criteria:
- [X] Always try to reserve the best available block of seats using the Manhattan Distance
- [X] Should be flexible enough so that it can work well with a variable number of seats and rows
- [X] The maximum number of tickets someone can request for is 10
- [X] Return the best available group as efficiently as possible
- [X] Seat reservations cannot span more than one row

### Sample Input
R1C4 R1C6 R2C3 R2C7 R3C9 R3C10
3
3
3
1
10
EOF


### Sample Output
R1C7 - R1C9
R2C4 - R2C6
R3C5 - R3C7
R1C5
Not Available
16


### How To Start
* `npm install`
* `npm start`

### Solution Comments
* I believe the last output on the sample output is wrong.  It looks like only 16 seats should have been added.
* I added a few unit tests but didn't go overboard with them just to get the idea
* I'm sure there are more optimized solutions but I went for a solution that is good enough and manageable
* In order to change from the default seating row and seat amount pass the numbers in after npm start

### Future Considerations
* The helpers file could easily get out of control if the application were to scale.  In that case I would recommend factoring it out.
* Some sort of directive or UI given to the user would be very helpful.  For this iteration I attempted to make it as close to the sample input as possible