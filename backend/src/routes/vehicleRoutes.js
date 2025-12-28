const express = require('express');
const router = express.Router();
const Vehicle = require('../models/Vehicle');

// POST /api/vehicles - Ein neues Fahrzeug erstellen
router.post('/', async (req, res) => {
    try {
        const newVehicle = new Vehicle(req.body);
        const savedVehicle = await newVehicle.save();
        res.status(201).json(savedVehicle);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
    const vehicles = await Vehicle.find();
    res.json(vehicles);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;