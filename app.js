document.addEventListener('DOMContentLoaded', () => {
  const STORAGE_KEY = 'mani_uzdevumi_tasks';

  const taskInput = document.getElementById('task-input');
  const addBtn = document.getElementById('add-btn');
  const taskList = document.getElementById('task-list');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const tasksCounter = document.getElementById('tasks-counter');

  let tasks = loadTasks();
  let currentFilter = 'all';

  function loadTasks() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error('Kļūda ielādējot datus no LocalStorage:', error);
      return [];
    }
  }

  function saveTasks() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch (error) {
      console.error('Kļūda saglabājot datus LocalStorage:', error);
    }
  }

  function addTask() {
    const text = taskInput.value.trim();
    if (!text) {
      return;
    }

    const newTask = {
      id: Date.now().toString(),
      text: text,
      completed: false
    };

    tasks.push(newTask);
    saveTasks();
    taskInput.value = '';
    taskInput.focus();
    render();
  }

  function toggleTask(id) {
    tasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    saveTasks();
    render();
  }

  function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    saveTasks();
    render();
  }

  function getFilteredTasks() {
    if (currentFilter === 'active') {
      return tasks.filter(task => !task.completed);
    }
    if (currentFilter === 'completed') {
      return tasks.filter(task => task.completed);
    }
    return tasks;
  }

  function updateCounter() {
    const activeCount = tasks.filter(task => !task.completed).length;
    tasksCounter.textContent = `Atlikuši: ${activeCount}`;
  }

  function render() {
    taskList.innerHTML = '';
    const filteredTasks = getFilteredTasks();

    if (filteredTasks.length === 0) {
      const emptyMessage = document.createElement('li');
      emptyMessage.className = 'empty-state';
      emptyMessage.textContent = 'Nav uzdevumu šajā skatā.';
      taskList.appendChild(emptyMessage);
    } else {
      filteredTasks.forEach(task => {
        const li = document.createElement('li');
        li.className = `task-item${task.completed ? ' completed' : ''}`;
        li.dataset.id = task.id;

        const label = document.createElement('label');
        label.className = 'task-content';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'task-checkbox';
        checkbox.checked = task.completed;
        checkbox.addEventListener('change', () => toggleTask(task.id));

        const span = document.createElement('span');
        span.className = 'task-text';
        span.textContent = task.text; // Droša teksta attēlošana pret XSS

        label.appendChild(checkbox);
        label.appendChild(span);

        const deleteBtn = document.createElement('button');
        deleteBtn.type = 'button';
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Dzēst';
        deleteBtn.setAttribute('aria-label', `Dzēst uzdevumu: ${task.text}`);
        deleteBtn.addEventListener('click', () => deleteTask(task.id));

        li.appendChild(label);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
      });
    }

    updateCounter();
  }

  // Notikumu klausītāji
  addBtn.addEventListener('click', addTask);

  taskInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  });

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      render();
    });
  });

  // Sākotnējā ielāde
  render();
});