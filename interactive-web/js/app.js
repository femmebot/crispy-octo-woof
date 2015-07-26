
var taskInput = document.getElementById("new-task"); // #new-task
var addButton = document.getElementsByTagName("button")[0]; //first button
var incompleteTasks = document.getElementById("incomplete-tasks"); // incomplete task list
var completedTasks = document.getElementById("completed-tasks"); // completed task list

//Add a new task
var addTask = function() {
<<<<<<< HEAD
  console.log("Add task...");
  //When the button is pressed
  //Create a new list item with the text from #new-task:
  //input (checkbox)
    //label
    //input (text)
    //button.edit
    //button.delete
    //Each elements, needs modified and appended
}
=======
  // on button press, create a new list item from #new-task input
    // input (checkbox)
    // label
    // input (text)
    // button.edit
    // button.delete
    // each element needs modified and appended
    console.log("add task…")
};
>>>>>>> 1a26d151992ba6d86ae739f46ed0c582f6cae36b

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
<<<<<<< HEAD
  console.log("edit task…");
}
=======
  console.log("edit task…")
};
>>>>>>> 1a26d151992ba6d86ae739f46ed0c582f6cae36b

var deleteTask = function() {
// if delete button clicked, delete entry
  // When the Delete button is pressed
    // Remove the parent list item from the ul
<<<<<<< HEAD
    console.log("delete task…");
}
=======
    console.log("delete task…")
};
>>>>>>> 1a26d151992ba6d86ae739f46ed0c582f6cae36b

var taskCompleted = function() {
// .completed-tasks
  // When the checkbox is checked
    // Append the task list item to the #completed-tasks
<<<<<<< HEAD
    console.log("task completed…");
}
=======
    console.log("task completed…")
};
>>>>>>> 1a26d151992ba6d86ae739f46ed0c582f6cae36b

var incompleteTask = function() {
// if checkbox unchecked, move task to #incomplete-tasks
  // When the checkbox is unchecked
    // Append the task list item to the #incomplete-tasks
<<<<<<< HEAD
    console.log("incomplete task…");
}
=======
    console.log("incomplete task…")
};
>>>>>>> 1a26d151992ba6d86ae739f46ed0c582f6cae36b

// Set the click handler to the addTask function
addButton.onclick = addTask;
