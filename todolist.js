<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do List</title>
    <style>
        body { font-family: Arial, sans-serif; max-width: 400px; margin: 0 auto; padding: 20px; }
        input { width: 70%; padding: 5px; }
        button { padding: 5px 10px; }
        ul { list-style-type: none; padding: 0; }
        li { margin: 10px 0; padding: 10px; background: #f0f0f0; display: flex; justify-content: space-between; align-items: center; }
        .completed { text-decoration: line-through; color: gray; }
        .delete { background: red; color: white; border: none; padding: 5px 10px; cursor: pointer; }
    </style>
</head>
<body>
    <h1>To-Do List</h1>
    <input type="text" id="taskInput" placeholder="Add a new task">
    <button onclick="addTask()">Add</button>
    <ul id="taskList"></ul>

    <script>
        // Функция для добавления новой задачи
        function addTask() {
            const input = document.getElementById('taskInput');
            const taskText = input.value.trim();
            if (taskText === '') return; // Не добавляем пустые задачи

            const list = document.getElementById('taskList');
            const li = document.createElement('li');

            // Текст задачи
            const span = document.createElement('span');
            span.textContent = taskText;
            span.onclick = function() {
                this.classList.toggle('completed'); // Отмечаем как выполненную
            };

            // Кнопка удаления
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.className = 'delete';
            deleteBtn.onclick = function() {
                list.removeChild(li); // Удаляем задачу
            };

            li.appendChild(span);
            li.appendChild(deleteBtn);
            list.appendChild(li);

            input.value = ''; // Очищаем поле ввода
        }
    </script>
</body>
</html>
