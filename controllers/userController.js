const userModel = require('../models/userModel');

function listUsers(req, res) {
  const allUsers = userModel.getAllUsers();
  res.json(allUsers);
}

function getUser(req, res) {
  const id = parseInt(req.params.id);
  const user = userModel.getUserById(id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'Usuario no encontrado' });
  }
}

module.exports = {
  listUsers,
  getUser
};
