// Get the draggable element
const dragElement = document.getElementById('dragElement');

// Get the drop zone element
const dropZone = document.getElementById('dropZone');

// Get the reset button element
const resetButton = document.getElementById('resetButton');

// Add event listeners for drag and drop events
dragElement.addEventListener('dragstart', dragStart);
dropZone.addEventListener('dragover', dragOver);
dropZone.addEventListener('drop', drop);
resetButton.addEventListener('click', reset);

// Function to handle drag start event
function dragStart(event) {
  // Set the data being dragged
  event.dataTransfer.setData('text/plain', event.target.id);
}

// Function to handle drag over event
function dragOver(event) {
  // Prevent default to allow drop
  event.preventDefault();
}

// Function to handle drop event
function drop(event) {
  // Prevent default to prevent browser behavior
  event.preventDefault();

  // Get the dragged element's ID from the data transfer
  const draggedElementId = event.dataTransfer.getData('text/plain');

  // Append the dragged element to the drop zone
  const draggedElement = document.getElementById(draggedElementId);
  dropZone.appendChild(draggedElement);

  // Show success message
  alert('Element dropped successfully!');
}

// Function to handle reset button click event
function reset() {
  // Move the draggable element back to its initial position
  const container = document.querySelector('.container');
  container.insertBefore(dragElement, dropZone);

  // Show reset message
  alert('Reset successful!');
}
