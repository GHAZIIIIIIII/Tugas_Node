const express = require('express');
const app = express();

app.use(express.json());

const userController = require('../controllers/user.controllers');

app.get("/", userController.getAllUser)
app.get("/:keyword", userController.findUser)
app.post("/", userController.addUser)
app.put("/:id", userController.updateUser)
app.delete("/:id", userController.deleteUser)

module.exports = app;