require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const path = require('path');
const cors = require('cors');


const productoRoutes = require('./routes/productoRoutes');

const app = express();


app.use(cors({
  origin: ['http://localhost:3000', 'exp://localhost:19000'],
  credentials: true
}));


app.use(session({
    secret: process.env.JWT_SECRET || 'secreto',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('combined'));


app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


app.use('/api/productos', productoRoutes);

app.get('/', (req, res) => {
    res.json({ 
        message: 'API de Gestión de Productos',
        version: '1.0.0',
        endpoints: {
            productos: '/api/productos'
        }
    });
});


app.get('/health', (req, res) => {
    res.json({ status: 'OK', message: 'Servidor funcionando correctamente' });
});


app.use((req, res) => {
    res.status(404).json({ error: 'Endpoint no encontrado' });
});

app.use((err, req, res, next) => {
    console.error('Error:', err);
    res.status(500).json({ error: 'Error interno del servidor' });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor API corriendo en http://localhost:${PORT}`);
});