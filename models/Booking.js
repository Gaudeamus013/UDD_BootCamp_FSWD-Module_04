class Booking {
    constructor(id, hotel, arrivalDate, departureDate, roomType, guests, name, email, paymentStatus) {
      this.id = id;
      this.hotel = hotel;
      this.arrivalDate = arrivalDate;
      this.departureDate = departureDate
      this.roomType = roomType;
      this.guests = guests;
      this.name = name;
      this.email = email;
      this.paymentStatus = paymentStatus;
    }

    getInfo(){
        return `Nombre: ${this.name}, Correo electrónico: ${this.email}, Fecha de ingreso: ${this.arrivalDate}, Fecha de egreso: ${this.departureDate}, Tipo de habitación: ${this.roomType}, Número de personas: ${this.guests}, Estado de pago: ${this.paymentStatus}`;
    }
  }
  
  module.exports = Booking;