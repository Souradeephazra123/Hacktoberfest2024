<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do List App</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f9;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        #app {
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            width: 300px;
        }
        h1 {
            text-align: center;
            font-size: 24px;
            color: #333;
        }
        #newTaskInput {
            width: calc(100% - 20px);
            padding: 10px;
            margin-bottom: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
        #addTaskButton {
            width: 100%;
            padding: 10px;
            background-color: #28a745;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        #addTaskButton:hover {
            background-color: #218838;
        }
        ul {
            list-style-type: none;
            padding: 0;
        }
        li {
            padding: 10px;
            margin: 5px 0;
            background-color: #f0f0f0;
            border-radius: 5px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        li.completed {
            text-decoration: line-through;
            background-color: #d4edda;
        }
        .deleteBtn {
            background-color: #dc3545;
            color: white;
            border: none;
            padding: 5px 8px;
            border-radius: 5px;
            cursor: pointer;
        }
        .deleteBtn:hover {
            background-color: #c82333;
        }
    </style>
</head>
<body>
    <div id="app">
        <h1>To-Do List</h1>
        <input type="text" id="newTaskInput" placeholder="Enter a new task..." />
        <button id="addTaskButton">Add Task</button>
        <ul id="taskList"></ul>
    </div>

    <script>
        // References to DOM elements
        const newTaskInput = document.getElementById('newTaskInput');
        const addTaskButton = document.getElementById('addTaskButton');
        const taskList = document.getElementById('taskList');

        // Event listener to add a new task
        addTaskButton.addEventListener('click', addTask);

        // Function to add a new task
        function addTask() {
            const taskText = newTaskInput.value.trim();

            // Only add if the input is not empty
            if (taskText !== "") {
                const li = document.createElement('li');

                // Create task content
                li.textContent = taskText;

                // Create delete button
                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'Delete';
                deleteBtn.classList.add('deleteBtn');
                deleteBtn.onclick = deleteTask;

                // Add delete button to task
                li.appendChild(deleteBtn);

                // Add event listener to mark task as completed
                li.addEventListener('click', function() {
                    li.classList.toggle('completed');
                });

                // Append new task to the list
                taskList.appendChild(li);

                // Clear input field
                newTaskInput.value = '';
            }
        }

        // Function to delete a task
        function deleteTask(e) {
            const taskItem = e.target.parentElement;
            taskList.removeChild(taskItem);
        }

        // Allow pressing "Enter" to add a task
        newTaskInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                addTask();
            }
        });
    </script>
</body>
</html>
