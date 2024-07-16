const Booking = require('../models/Booking');
const bookings = [];
let bookingId = 1;

exports.createBooking = (req, res) => {
  const { hotel, arrivalDate, departureDate, roomType, guests, name, email, paymentStatus } = req.body;
  const booking = new Booking(bookingId++, hotel, arrivalDate, departureDate, roomType, guests, name, email, paymentStatus);
  bookings.push(booking);
  res.status(201).json({ message: 'Reserva creada exitosamente', booking });
};

exports.getBookings = (req, res) => {
  res.json({ message: 'Obtención de reservas exitosa', bookings });
};

exports.getBookingInfo = (req, res) => {
  const info = bookings.map(booking => booking.getInfo());
  res.json({ message: 'Obtención de información de reservas exitosa', info });
};

exports.getBookingById = (req, res) => {
  const booking = bookings.find(b => b.id === parseInt(req.params.id));
  if (booking) {
    res.json({ message: 'Obtención de reservas por ID exitosa', booking });
  } else {
    res.status(404).json({ message: 'Reserva no encontrada' });
  }
};

exports.updateBooking = (req, res) => {
  const booking = bookings.find(b => b.id === parseInt(req.params.id));
  if (booking) {
    const { hotel, arrivalDate, departureDate, roomType, guests, name, email, paymentStatus } = req.body;
    booking.hotel = hotel;
    booking.arrivalDate = arrivalDate;
    booking.departureDate = departureDate;
    booking.roomType = roomType;
    booking.guests = guests;
    booking.name = name;
    booking.email = email;
    booking.paymentStatus = paymentStatus;
    res.json({ message: 'Reserva actualizada exitosamente', booking });
  } else {
    res.status(404).json({ message: 'Reserva no encontrada' });
  }
};

exports.deleteBooking = (req, res) => {
  const index = bookings.findIndex(b => b.id === parseInt(req.params.id));
  if (index !== -1) {
    bookings.splice(index, 1);
    res.status(204).json({ message: 'Reserva eliminada exitosamente' });
  } else {
    res.status(404).json({ message: 'Reserva no encontrada' });
  }
};

exports.filterBookings = (req, res) => {
  let filteredBookings = bookings;
  const { hotel, date_start, date_end, roomType, paymentStatus, numGuests } = req.query;

  if (hotel) {
    filteredBookings = filteredBookings.filter(b => b.hotel === hotel);
  }
  if (date_start && date_end) {
    filteredBookings = filteredBookings.filter(b => new Date(b.arrivalDate) >= new Date(date_start) && new Date(b.departureDate) <= new Date(date_end));
  }
  if (roomType) {
    filteredBookings = filteredBookings.filter(b => b.roomType === roomType);
  }
  if (paymentStatus) {
    filteredBookings = filteredBookings.filter(b => b.paymentStatus === paymentStatus);
  }
  if (numGuests) {
    filteredBookings = filteredBookings.filter(b => b.guests >= parseInt(numGuests));
  }

  res.json({ message: 'Reserva filtrada exitosamente', filteredBookings });
};