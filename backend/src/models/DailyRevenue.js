const mongoose = require('mongoose');

const DailyRevenueSchema = new mongoose.Schema({
    vehicleId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vehicle', // Verknüpfung zum Fahrzeug
        required: true
    },
    date: { type: Date, required: true },
    grossRevenue: { type: Number, required: true }, // Brutto-Umsatz laut Uber-App
    fuelCosts: { type: Number, default: 0 },        // Tankkosten
    kilometers: { type: Number},                    // Gefahrene Kilometer
    netRevenue: { type: Number }                    // -> wird Später berechnet (Gewinn)
}, { timestamps: true });

module.exports = mongoose.model('DailyRevenue', DailyRevenueSchema);