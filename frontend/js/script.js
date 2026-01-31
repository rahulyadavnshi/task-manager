const API = "http://localhost:3000/api/tasks";

const form = document.getElementById("taskForm");
const titleInput = document.getElementById("title");
const descInput = document.getElementById("description");
const statusSelect = document.getElementById("status");
const taskList = document.getElementById("taskList");

function loadTasks() {
  fetch(API)
    .then(res => res.json())
    .then(data => {
      taskList.innerHTML = "";
      data.forEach(task => {
        taskList.innerHTML += `
          <li>
            <b>${task.title}</b> - ${task.status}
            <button onclick="deleteTask(${task.id})">Delete</button>
          </li>
        `;
      });
    });
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: titleInput.value,
      description: descInput.value,
      status: statusSelect.value
    })
  }).then(() => {
    loadTasks();
    form.reset();
  });
});

function deleteTask(id) {
  fetch(`${API}/${id}`, { method: "DELETE" })
    .then(() => loadTasks());
}

loadTasks();
