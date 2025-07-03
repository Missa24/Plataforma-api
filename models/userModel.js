// Aquí simulamos una base de datos con un array
const users = [
    { id: 1, nombre: 'Juan' },
    { id: 2, nombre: 'María' }
];

// Funciones para interactuar con los datos
function getAllUsers() {
    return users;
}

function getUserById(id) {
    return users.find(user => user.id === id);
}

module.exports = {
    getAllUsers,
    getUserById
};
