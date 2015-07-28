//Problem: User interaction doesn't provide desired results.
//Solution: Add interactivty so the user can manage daily tasks.

var taskInput = document.getElementById("new-task"); //new-task
var addButton = document.getElementsByTagName("button")[0]; //first button
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); //incomplete-tasks
var completedTasksHolder= document.getElementById("completed-tasks"); //completed-tasks

// New Task List Item
var createNewTaskElement = function(taskString) {
  // Create list item
  var listItem = document.createElement("li");

  //input (checkbox)
  var checkbox = document.createElement("input"); // checkbox
  //label
  var label = document.createElement("label");
  //input (text)
  var editInput = document.createElement("input"); // text
  //button.edit
  var editButton = document.createElement("button");
  //button.delete
  var deleteButton = document.createElement("button");

  //Each element needs to be appended
  listItem.appendChild(checkbox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);

  // Each element needs to be modified
  checkbox.type = "checkbox";
  editInput.type = "text";

  editButton.innerHTML = "Edit";
  editButton.className = "edit";
  deleteButton.innerHTML = "Delete";
  deleteButton.className = "delete";

  label.innerText = taskString;

  return listItem;
};

//Add a new task
var addTask = function() {
  console.log("Add task...");

  // create a new list item with the text from #new-task
  var listItem = createNewTaskElement("Some new task");

  // Append list item to incompleteTasksHolder
  incompleteTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);

};

//Edit an existing task
var editTask = function() {
  console.log("Edit task...");
  //When the Edit button is pressed
    //if the class of the parent is .editMode
      //Switch from .editMode
      //label text become the input's value
    //else
      //Switch to .editMode
      //input value becomes the label's text

    //Toggle .editMode on the parent
};

//Delete an existing task
var deleteTask = function() {
  console.log("Delete task...");
  var listItem = this.parentNode;
  var ul = listItem.parentNode;

  //Remove the parent list item from the ul
  ul.removeChild(listItem);
}

//Mark a task as complete
var taskCompleted = function() {
  console.log("Task complete...");
  //When the checkbox is checked
    //Append the task list item to the #completed-tasks
    var listItem = this.parentNode;
    completedTasksHolder.appendChild(listItem);
};

//Mark a task as incomplete
var taskIncomplete = function() {
  console.log("Task incomplete...");
  //When the checkbox is unchecked
    //Append the task list item to the #incomplete-tasks
    var listItem = this.parentNode;
    incompleteTasksHolder.appendChild(listItem);
};

var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
  console.log("Bind list event items");
  // select list item's children
  var checkbox = taskListItem.querySelector("input[type=checkbox]");
  var editButton = taskListItem.querySelector("button.edit");
  var deleteButton = taskListItem.querySelector("button.delete");
  // bind checkBoxEventHandler to checkbox
  checkbox.onchange = checkBoxEventHandler;
  // bind editTask to editButton
  editButton.onclick = editTask;
  // bind deleteTask to deleteButton
  deleteButton.onclick = deleteTask;
};

//Set the click handler to the addTask function
addButton.onclick = addTask;

//cycle over incompleteTasksHolder ul list items
for(var i = 0; i < incompleteTasksHolder.children.length; i++) {
  //bind events to list item's children (taskCompleted)
  bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
}

//cycle over completedTasksHolder ul list items
for(var i = 0; i < completedTasksHolder.children.length; i++) {
  //bind events to list item's children (taskIncomplete)
  bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}
