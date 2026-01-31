const db = require("../config/db");

exports.getAllTasks = callback => {
  db.query("SELECT * FROM tasks", callback);
};

exports.createTask = (task, callback) => {
  db.query(
    "INSERT INTO tasks (title, description, status) VALUES (?, ?, ?)",
    [task.title, task.description, task.status],
    callback
  );
};

exports.updateTask = (id, task, callback) => {
  db.query(
    "UPDATE tasks SET title=?, description=?, status=? WHERE id=?",
    [task.title, task.description, task.status, id],
    callback
  );
};

exports.deleteTask = (id, callback) => {
  db.query("DELETE FROM tasks WHERE id=?", [id], callback);
};
