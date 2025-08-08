const swaggerJsDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Plataforma Educativa',
      version: '1.0.0',
      description: 'Documentación interactiva de la API',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./routes/**/*.js'], // Puedes ajustar según tu estructura
};

const swaggerSpec = swaggerJsDoc(options);
module.exports = swaggerSpec;
