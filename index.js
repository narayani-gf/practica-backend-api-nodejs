const express = require('express')
const cors = require("cors");
const dotenv = require('dotenv')
const app = express()

// Swagger
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger-output.json')

// Primero carga la configuración del archivo .env
// para que esté disponible en las demás llamadas
dotenv.config();

// Se requiere para entender los datos recibidos en JSON
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Cors
var corsOptions = {
    origin: ["http://localhost:3001", "http://localhost:8080"],
    methods: "GET,PUT,POST,DELETE",
};
app.use(cors(corsOptions));

// Swagger
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerFile))

// Rutas
app.use("/api/categorias", require('./routes/categorias.routes'))
app.use("/api/peliculas", require('./routes/peliculas.routes'))
app.get('*', (req, res) => { res.status(404).send() });

// Inicia el servidor web en el puerto SERVER_PORT
app.listen(process.env.SERVER_PORT, () => {
    console.log(`Aplicacion de ejemplo escuchando en el puerto ${process.env.SERVER_PORT}`)
})