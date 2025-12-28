const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Umgebungsvariablen für Sicherheit
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`-- SUCCESS -- MongoDB verbunden: ${conn.connection.host}`);
    } catch (error) {
        console.log(`-- ERROR -- Fehler: ${error.message}`);
        process.exit(1); // Server stoppen bei Fehler
    }
};

module.exports = connectDB;