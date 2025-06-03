// Simple elevator dispatch system

class Elevator {
  constructor(id, currentFloor) {
    this.id = id;
    this.currentFloor = currentFloor;
  }
}

// List of elevators with their current floors
const elevators = [new Elevator(1, 2), new Elevator(2, 7), new Elevator(3, 4)];

// Function to find the closest elevator to the requested floor
function callElevator(requestedFloor) {
  let closest = elevators[0];
  let minDistance = Math.abs(elevators[0].currentFloor - requestedFloor);

  for (const elevator of elevators) {
    const distance = Math.abs(elevator.currentFloor - requestedFloor);
    if (distance < minDistance) {
      closest = elevator;
      minDistance = distance;
    }
  }

  // Move the closest elevator to the requested floor
  console.log(
    `Elevator ${closest.id} is coming from floor ${closest.currentFloor} to floor ${requestedFloor}`
  );
  closest.currentFloor = requestedFloor;
}

// Example usage:
callElevator(5);
