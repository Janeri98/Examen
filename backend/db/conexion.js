require('dotenv').config();
const mysql = require('mysql2');


const pool = mysql.createPool({
  host: process.env.DATA_BASE_HOST || '127.0.0.1',
  user: process.env.DATA_BASE_USER || 'root',
  password: process.env.DATA_BASE_PASSWORD || 'JaneriJuanez08',
  database: process.env.DATA_BASE_NAME || 'productos_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

pool.promise().getConnection()
  .then(connection => {
    console.log('Conexión a la base de datos exitosa');
    connection.release();
    
 
    crearTablaProductos();
  })
  .catch(err => {
    console.error('Error al conectar con la base de datos:', err);
  });


const crearTablaProductos = async () => {
  try {
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS productos (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nombre VARCHAR(255) NOT NULL,
        descripcion TEXT,
        precio DECIMAL(10,2) NOT NULL,
        estado ENUM('Disponible', 'No disponible') DEFAULT 'Disponible',
        categoria VARCHAR(100),
        fotografia VARCHAR(500),
        fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
    
    await pool.promise().execute(createTableQuery);
    console.log('Tabla de productos verificada/creada correctamente');
  } catch (error) {
    console.error('Error al crear la tabla:', error);
  }
};

module.exports = pool.promise();