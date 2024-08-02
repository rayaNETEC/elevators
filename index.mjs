let elevators = new Map()

elevators.set("E1", 0)
elevators.set("E2", 1)
elevators.set("E3", 4)
elevators.set("E4", 7)

function callElevator(currentFloor, nextFloor) {
    let closestElevator = null;
    let smallestDifference = null;

    elevators.forEach((floor, elevator) => {
        let difference = Math.abs(currentFloor - floor);

        if (smallestDifference === null || difference < smallestDifference) {
            smallestDifference = difference;
            closestElevator = elevator;
        }
    })

    return closestElevator
}

let currentFloor = 6;
let closestElevator = callElevator(currentFloor, null);
console.log(`The closest elevator to floor ${currentFloor} is: ${closestElevator}`);