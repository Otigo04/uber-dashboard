const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Konfiguration laden
dotenv.config();

// Verbindung zur Datenbank
connectDB();

const app = express();

// Middleware
app.use(express.json()); // Erlaubt JSON-Dateien zu empfangen
app.use(cors());         // Erlaubt dem Frontend später den Zugriff

// Test Route
app.get('/', (req, res) => {
    res.send('API läuft...');
});

// Port definieren
const PORT = process.env.PORT || 5000;

app.use('/api/vehicles', require('./routes/vehicleRoutes'));

app.listen(PORT, () => {
    console.log(`Server läuft im ${process.env.NODE_ENV} Modus auf Port ${PORT}`);
});