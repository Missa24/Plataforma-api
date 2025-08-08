require('module-alias/register');
const express = require('express');
const db = require('./bd');
const topicRoutes = require('./routes/temas/TemaRoutes');
const SubTemaRoutes = require('./routes/subtemas/SubtemaRoutes')
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger'); // asegúrate que exporte el spec, no una función
const listEndpoints = require("express-list-endpoints");

const app = express();
const PORT = 3000;

// Middlewares
app.use(express.json());

//temas
app.use("/topics", topicRoutes);

//subtemas
app.use("/subtemas", SubTemaRoutes);

// Ruta base
app.get('/', (req, res) => {
    res.send('Servidor funcionando');
});

const endpoints = listEndpoints(app);

console.log("\n📋 Endpoints registrados:");
endpoints.forEach((endpoint) => {
    const methods = endpoint.methods.join(', ');
    console.log(`${methods} ${endpoint.path}`);
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

