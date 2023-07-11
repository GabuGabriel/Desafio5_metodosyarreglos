var tasks = [];

    function addTask() {
      var input = document.getElementById("taskInput");
      var taskDescription = input.value;

      if (taskDescription !== '') {
        var task = {
          id: tasks.length,
          description: taskDescription,
          completed: false
        };

        tasks.push(task);

        input.value = '';

        displayTasks();
        updateTaskCount();
      }
    }

    function removeTask(index) {
      tasks.splice(index, 1);

      displayTasks();
      updateTaskCount();
    }

    function toggleTask(index) {
      tasks[index].completed = !tasks[index].completed;

      displayTasks();
      updateTaskCount();
    }

    function displayTasks() {
      var taskList = document.getElementById("taskList");
      taskList.innerHTML = '';

      tasks.forEach(function(task, index) {
        var taskItem = '<li id="taskItem' + task.id + '"';
        if (task.completed) {
          taskItem += ' class="completed"';
        }
        taskItem += '>' + task.description + ' ';
        taskItem += '<button onclick="removeTask(' + index + ')">Borrar</button> ';
        taskItem += '<button onclick="toggleTask(' + index + ')">Completada</button></li>';
        taskList.innerHTML += taskItem;
      });
    }

    function updateTaskCount() {
      var totalTasks = document.getElementById("totalTasks");
      totalTasks.innerHTML = tasks.length;

      var completedTasks = document.getElementById("completedTasks");
      var completedCount = tasks.filter(function(task) {
        return task.completed;
      }).length;
      completedTasks.innerHTML = completedCount;
    }