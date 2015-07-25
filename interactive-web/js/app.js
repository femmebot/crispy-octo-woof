
var taskInput = document.getElementById("new-task"); // #new-task
var addButton = document.getElementsbyTagName("button")[0]; // first button
var incompleteTasks = document.getElementById("incomplete-tasks"); // incomplete task list
var completedTasks = document.getElementById("completed-tasks"); // completed task list

// new-task
var addTask = function() {
  // on button press, create a new list item from #new-task input
    // input (checkbox)
    // label
    // input (text)
    // button.edit
    // button.delete
    // each element needs modified and appended
}


// incomplete-tasks
// if checkbox is checked, move task to completed-tasks

var editTask = function(){
// if edit button pressed, switch to edit mode
  // if the class of the parent is .editMode
    // Switch from .editMode
    // label text becomes the input's value
  // else
    // Switch to .editMode
    // input value becomes the label's text

  // toggle .editMode to the parent
}

var deleteTask = function() {
// if delete button clicked, delete entry
  // When the Delete button is pressed
    // Remove the parent list item from the ul
}

// .completed-tasks
var taskCompleted = function() {
  // When the checkbox is checked
    // Append the task list item to the #completed-tasks

// if checkbox unchecked, move task to #incomplete-tasks
  // When the checkbox is unchecked
    // Append the task list item to the #incomplete-tasks
}
