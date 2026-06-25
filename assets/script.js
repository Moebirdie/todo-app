$(function () {

  var currentFilter = 'all';

  // Display current date/time in header
  setInterval(function () {
    var now = dayjs().format('dddd, MMMM D, YYYY h:mm A');
    $('#currentDay').text(now);
  }, 1000);

  // Load tasks from localStorage
  function loadTasks() {
    var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    return tasks;
  }

  // Save tasks to localStorage
  function saveTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // Render tasks to the DOM based on current filter
  function renderTasks() {
    var tasks = loadTasks();
    var filtered = tasks.filter(function (task) {
      if (currentFilter === 'active') return !task.completed;
      if (currentFilter === 'completed') return task.completed;
      return true;
    });

    $('#taskList').empty();

    if (tasks.length === 0) {
      $('#emptyMsg').show();
    } else {
      $('#emptyMsg').hide();
    }

    filtered.forEach(function (task) {
      var checkedAttr = task.completed ? 'checked' : '';
      var completedClass = task.completed ? 'completed' : '';
      var priorityClass = 'priority-' + task.priority;
      var priorityLabel = task.priority.charAt(0).toUpperCase() + task.priority.slice(1);

      var item = $('\
        <li class="task-item ' + completedClass + '" data-id="' + task.id + '">\
          <input type="checkbox" class="task-checkbox" ' + checkedAttr + ' />\
          <span class="task-text">' + $('<div>').text(task.text).html() + '</span>\
          <span class="priority-badge ' + priorityClass + '">' + priorityLabel + '</span>\
          <button class="delete-btn" aria-label="Delete task"><i class="fas fa-times"></i></button>\
        </li>\
      ');

      $('#taskList').append(item);
    });

    updateCount(tasks);
  }

  // Update the task count footer text
  function updateCount(tasks) {
    var remaining = tasks.filter(function (t) { return !t.completed; }).length;
    var total = tasks.length;
    $('#taskCount').text(remaining + ' of ' + total + ' task' + (total !== 1 ? 's' : '') + ' remaining');
  }

  // Add a new task
  function addTask() {
    var text = $('#taskInput').val().trim();
    var priority = $('#prioritySelect').val();

    if (!text) {
      $('#taskInput').focus();
      return;
    }

    var tasks = loadTasks();
    tasks.unshift({
      id: Date.now(),
      text: text,
      priority: priority,
      completed: false
    });

    saveTasks(tasks);
    $('#taskInput').val('');
    renderTasks();
  }

  // Toggle completed state
  $(document).on('change', '.task-checkbox', function () {
    var id = Number($(this).closest('.task-item').attr('data-id'));
    var tasks = loadTasks();
    tasks = tasks.map(function (task) {
      if (task.id === id) task.completed = !task.completed;
      return task;
    });
    saveTasks(tasks);
    renderTasks();
  });

  // Delete a task
  $(document).on('click', '.delete-btn', function () {
    var id = Number($(this).closest('.task-item').attr('data-id'));
    var tasks = loadTasks().filter(function (task) { return task.id !== id; });
    saveTasks(tasks);
    renderTasks();
  });

  // Clear completed tasks
  $('#clearCompletedBtn').on('click', function () {
    var tasks = loadTasks().filter(function (task) { return !task.completed; });
    saveTasks(tasks);
    renderTasks();
  });

  // Add on button click
  $('#addBtn').on('click', addTask);

  // Add on Enter key
  $('#taskInput').on('keypress', function (e) {
    if (e.key === 'Enter') addTask();
  });

  // Filter buttons
  $('.filter-btn').on('click', function () {
    $('.filter-btn').removeClass('active');
    $(this).addClass('active');
    currentFilter = $(this).attr('data-filter');
    renderTasks();
  });

  // Initial render
  renderTasks();

});
