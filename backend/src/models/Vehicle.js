const mongoose = require('mongoose');

const VehicleSchema = new mongoose.Schema({
    licensePlate: { type: String, required: true, unique: true }, //Kennzeichen
    model: { type: String, required: true }, // Automodell
    driverName: { type: String, default: "Nicht zugewiesen" }, // Aktueller Fahrer
    status: { type: String, enum: ['aktiv', 'werkstatt', 'inaktiv'], default: 'aktiv' }, // Fahrzeugstatus
    lastService: { type: Date }
}, { timestamps: true }); // Erstellt automatisch createdAt und updatedAt

module.exports = mongoose.model('Vehicle', VehicleSchema);