console.clear();
require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

// Conexión a MongoDB
connectDB();

const app = express();

// Middleware
app.use(express.json());

// Rutas
/* app.use('/api/users', require('./routes/userRoutes'));
 */
// Puerto del servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
