document.addEventListener('DOMContentLoaded', () => {
  const STORAGE_KEY = 'mani_uzdevumi_tasks';

  const taskInput = document.getElementById('task-input');
  const dueDateInput = document.getElementById('due-date-input');
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

  // U2 Palīgfunkcija 1: Datuma formatēšana (YYYY-MM-DD -> DD.MM.YYYY)
  function formatDate(dateStr) {
    if (!dateStr) return '';
    const parts = dateStr.split('-');
    if (parts.length === 3) {
      return `${parts[2]}.${parts[1]}.${parts[0]}`;
    }
    return dateStr;
  }

  // U2 Palīgfunkcija 2: Pārbaude, vai termiņš ir pagātnē (nokavēts)
  function isOverdue(dueDate, completed) {
    if (!dueDate || completed) return false;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const due = new Date(dueDate);
    due.setHours(0, 0, 0, 0);
    return due < today;
  }

  // U2 Palīgfunkcija 3: Datuma birkas DOM elementa izveide
  function createDateBadge(dueDate, completed) {
    if (!dueDate) return null;
    const badge = document.createElement('span');
    badge.className = 'task-date';
    const formatted = formatDate(dueDate);
    const overdue = isOverdue(dueDate, completed);
    badge.textContent = overdue ? `📅 ${formatted} (nokavēts)` : `📅 ${formatted}`;
    return badge;
  }

  function addTask() {
    const text = taskInput.value.trim();
    if (!text) {
      return;
    }

    const dueDate = dueDateInput && dueDateInput.value ? dueDateInput.value : null;

    const newTask = {
      id: Date.now().toString(),
      text: text,
      completed: false,
      dueDate: dueDate
    };

    tasks.push(newTask);
    saveTasks();
    taskInput.value = '';
    if (dueDateInput) {
      dueDateInput.value = '';
    }
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

  function startEdit(id, textSpan, container) {
    const task = tasks.find(t => t.id === id);
    if (!task) return;

    const editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.className = 'edit-input';
    editInput.value = task.text;

    editInput.addEventListener('click', (e) => e.stopPropagation());
    editInput.addEventListener('dblclick', (e) => e.stopPropagation());

    container.replaceChild(editInput, textSpan);
    editInput.focus();
    editInput.select();

    let isFinished = false;

    function handleFinish(save) {
      if (isFinished) return;
      isFinished = true;
      if (save) {
        finishEdit(id, editInput.value);
      } else {
        render();
      }
    }

    editInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        e.stopPropagation();
        handleFinish(true);
      } else if (e.key === 'Escape') {
        e.preventDefault();
        e.stopPropagation();
        handleFinish(false);
      }
    });

    editInput.addEventListener('blur', () => {
      handleFinish(true);
    });
  }

  function finishEdit(id, newText) {
    const trimmed = newText.trim();
    if (trimmed) {
      tasks = tasks.map(t => (t.id === id ? { ...t, text: trimmed } : t));
      saveTasks();
    }
    render();
  }

  function createTaskElement(task) {
    const overdue = isOverdue(task.dueDate, task.completed);

    const li = document.createElement('li');
    li.className = `task-item${task.completed ? ' completed' : ''}${overdue ? ' overdue' : ''}`;
    li.dataset.id = task.id;

    const contentDiv = document.createElement('div');
    contentDiv.className = 'task-content';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'task-checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => toggleTask(task.id));

    const span = document.createElement('span');
    span.className = 'task-text';
    span.textContent = task.text;
    span.title = 'Dubultklikšķis, lai rediģētu';

    span.addEventListener('dblclick', (e) => {
      e.preventDefault();
      e.stopPropagation();
      startEdit(task.id, span, contentDiv);
    });

    contentDiv.appendChild(checkbox);
    contentDiv.appendChild(span);

    // Pievienojam termiņa birku, ja tāds ir norādīts
    const dateBadge = createDateBadge(task.dueDate, task.completed);
    if (dateBadge) {
      contentDiv.appendChild(dateBadge);
    }

    const deleteBtn = document.createElement('button');
    deleteBtn.type = 'button';
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Dzēst';
    deleteBtn.setAttribute('aria-label', `Dzēst uzdevumu: ${task.text}`);
    deleteBtn.addEventListener('click', () => deleteTask(task.id));

    li.appendChild(contentDiv);
    li.appendChild(deleteBtn);
    return li;
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
        taskList.appendChild(createTaskElement(task));
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
