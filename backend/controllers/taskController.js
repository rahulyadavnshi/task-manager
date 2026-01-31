const Task = require("../models/taskModel");

exports.getTasks = (req, res) => {
  Task.getAllTasks((err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

exports.addTask = (req, res) => {
  Task.createTask(req.body, err => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Task added successfully" });
  });
};

exports.updateTask = (req, res) => {
  Task.updateTask(req.params.id, req.body, err => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Task updated successfully" });
  });
};

exports.deleteTask = (req, res) => {
  Task.deleteTask(req.params.id, err => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Task deleted successfully" });
  });
};
