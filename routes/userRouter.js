const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

// Endpoints para reservas
router.post('/booking', bookingController.createBooking);
router.get('/booking', bookingController.getBookings);
router.get('/booking/:id', bookingController.getBookingById);
router.put('/booking/:id', bookingController.updateBooking);
router.delete('/booking/:id', bookingController.deleteBooking);

module.exports = router;
