![Logo](https://github.com/Gaudeamus013/UDD_BootCamp_FSWD/blob/main/images/banner.png)

# Reserva Hotelera

En este proyecto, se construyó una aplicación de servicios CRUD para la industria hotelera, específicamente para la gestión de reservas. Además, le proporcionaremos un sistema de búsqueda.

## Problema a Resolver

Crear una aplicación de servicios CRUD para la industria hotelera implica abordar varios problemas clave para garantizar que el servicio se lleve a cabo la página sea efectiva. En el Backend se permiten manipular datos y persistirlos, ya sea en una estructura de datos (como haremos en este proyecto), o en una base de datos. 

## ¿Qué se construyó?

 En este proyecto se construyó una aplicación de servicios para la gestión de reservas en hoteles que involucre las 4 operaciones `CRUD` y otras 6 adicionales relacionadas con filtros, utilizando Node.js y Express.

 A continuación, se exponen las características del proyecto:

- Utilizar Node.js y Express para el desarrollo del servidor.
- Contar con un archivo `.env` para las variables de entorno, el cual establecerás el puerto.
- Contar con un archivo `.gitignore` que incluya las carpetas y archivos que deberán ocultarse para el repositorio.
- Usar una arquitectura de carpetas clara como se muestra a continuación. Es de tu gusto agregar más archivos, rutas, controladores o, si lo prefieres, sintetizar. La idea es que la asignación de responsabilidades de tu código pueda ser ubicado fácilmente.

```
Reserva_Hotelera
├── .env
├── .gitignore
├── README.md
├── controllers
│   └── bookingController.js
├── models
│   └── Booking.js
├── package-lock.json
├── package.json
├── routes
│   └── userRouter.js
└── index.js
```

- Implementar los siguientes 10 endpoints. 

|Descripción del Endpoint|	Método|	Endpoint| Ejemplo. Caso de uso. |
|-----------------------|----------|------------|---------|
|Crear reserva	| POST| 	/api/reservas|Como viajero, quiero hacer una reserva en el hotel "Hotel Paraíso" para el 15 de mayo de 2023. Necesito una habitación doble para dos adultos y un niño.
|Obtener la lista de reservas|	GET|	/api/reservas|Como gerente del hotel, quiero ver una lista de todas las reservas para hoy para poder planificar el trabajo del personal de limpieza y recepción.|
|Obtener información de una reserva específica	|GET|	/api/reservas/:id|Como recepcionista, necesito verificar los detalles de la reserva del huésped que acaba de llegar al hotel. Su número de reserva es 12345.
|Actualizar información de una reserva|	PUT|	/api/reservas/:id|Como huésped, necesito cambiar mi reserva en el hotel "Hotel Paraíso". Originalmente reservé una habitación doble, pero ahora necesito una suite familiar. Mi número de reserva es 12345.|
|Eliminar una reserva específica	|DELETE|	/api/reservas/:id|Como viajero, tuve un cambio de planes y ya no necesito la habitación que reservé en el hotel "Hotel Paraíso". Mi número de reserva es 12345.|
|Filtrar reservas por hotel|	GET|	/api/reservas?hotel=HOTEL|Como gerente de una cadena de hoteles, quiero ver todas las reservas para el "Hotel Paraíso" para el próximo mes.|
|Filtrar reservas por rango de fechas|	GET|	/api/reservas?fecha_inicio=FECHA_INICIO&fecha_fin=FECHA_FIN|Como gerente del hotel, quiero ver todas las reservas para la semana de Navidad para poder planificar el personal y las actividades necesarias.|
|Filtrar reservas por tipo de habitación|	GET|	/api/reservas?tipo_habitacion=TIPO_HABITACION|Como gerente del hotel, quiero ver todas las reservas para nuestras suites de lujo para el próximo mes para asegurarme de que todo esté en perfectas condiciones para nuestros huéspedes VIP.|
|Filtrar reservas por estado|	GET|	/api/reservas?estado=ESTADO|Como gerente del hotel, quiero ver todas las reservas que están pendientes de pago para poder hacer un seguimiento con los clientes.|
|Filtrar reservas por número de huéspedes|	GET|	/api/reservas?num_huespedes=NUM_HUESPEDES|Como gerente del hotel, quiero ver todas las reservas para grupos de más de 5 personas para el próximo mes, para poder planificar las necesidades adicionales de estos grupos grandes.|

## Usar el proyecto

-   Acceder a este repositorio: https://github.com/Gaudeamus013/UDD_BootCamp_FSWD-Module_04/ y descargar su contenido
-   Una vez ingresado a la carpeta raiz del proyecto, instalar las dependencias
  
```
$ npm install
```
-   Asegúrate de tener un archivo `.env` con las variables de entorno. En este caso, configuraré de esta forma:

```
PORT=3000
URL_BASE=/api
```
-   Iniciar el proyecto:

```
$ npm start
```
-   Utilizar herramientas como Postman, Insomnia o ThunderClient para solicitar o enviar información a estos servicios.

## Detalle de la implementación

En esta demo, se realizaron diferentes actividades:

-   Definición de arquitectura de carpetas.

```
Reserva_Hotelera
├── .env
├── .gitignore
├── README.md
├── controllers
│   └── bookingController.js
├── models
│   └── Booking.js
├── package-lock.json
├── package.json
├── routes
│   └── userRouter.js
└── index.js
```

-   Uso de `package.json` para establecer dos scripts. `start` para usarlo en producción y `dev` para ambiente de desarrollo.

```
{
  "name": "reserva_hotelera",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "nodemon index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "dotenv": "^16.4.5",
    "express": "^4.19.2"
  },
  "devDependencies": {
    "nodemon": "^3.1.4"
  }
}
```

-   Uso de un archivo `.env`, el cual está configurado para determinar el puerto y la url de inicio.

-   Uso de `.gitignore` para establecer los archivos y carpetas que serán ignorados por el proceso que GIT realiza.

-   Instalación de estas depedendencias:

    -   **dotenv (v16.4.5):** Dotenv es una librería de Node.js que permite cargar variables de entorno de un archivo .env en process.env. Esto es útil para ocultar datos sensibles (como claves API, contraseñas de base de datos, etc.) y para manejar configuraciones específicas del entorno.

    -   **express (v4.19.2):** Express.js es un framework web para Node.js que proporciona un conjunto robusto de características para desarrollar aplicaciones web y móviles. Facilita la construcción de aplicaciones con diversas características, como el enrutamiento, el manejo de solicitudes HTTP, la configuración de middleware, etc.

    -   **nodemon (v3.1.4):** Nodemon es una utilidad que monitorea los cambios en tu código fuente y reinicia automáticamente tu servidor. Es especialmente útil durante el desarrollo, ya que no necesitas detener y reiniciar tu servidor cada vez que hagas un cambio en tu código.

-   Uso de `index.js` como acceso principal.

```javascript
// Cargamos las variables de entorno del archivo .env
require('dotenv').config();
// Importamos las librerías necesarias
const express = require('express');
const userRouter = require('./routes/userRouter');

// Creamos una nueva aplicación Express
const app = express();
// Definimos el puerto de la aplicación
const port = process.env.PORT || 3000;

// Añadimos el middleware para parsear el cuerpo JSON de las solicitudes
app.use(express.json())
// Definimos las rutas de la API
app.use(express.urlencoded({extended: true}));
app.use('/api', userRouter);

// Iniciamos el servidor en el puerto definido
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
```

-   Uso de una ruta `./routes/userRouter.js`.

```javascript
// Importamos las librerías necesarias
const express = require('express') // Express.js para manejo de rutas
const router = express.Router() // Creamos un router Express

// Importamos el controlador de pedidos
const bookingController = require('../controllers/bookingController');

// Endpoint para crear una nueva reserva
router.post('/booking', bookingController.createBooking); // Asociamos el controlador de creación de reservas
// Endpoint para obtener el listado de las reservas existentes
router.get('/booking', bookingController.getBookings); // Asociamos el controlador de lectura de todas los reservas
// Endpoint para obtener la información de la reserva existente
router.get('/booking', bookingController.getBookingInfo); // Asociamos el controlador para obtener la información de reserva
// Endpoint para obtener la información de una reserva existente
router.get('/booking/:id', bookingController.getBookingById); // Asociamos el controlador para obtener una reserva específica
// Endpoint para actualizar una reserva específica
router.put('/booking/:id', bookingController.updateBooking); // Asociamos el controlador de actualización de una reserva
// Endpoint para borrar una reserva
router.delete('/booking/:id', bookingController.deleteBooking); // Asociamos el controlador para eliminar una reserva
// Endpoint para filtrar reseerva
router.get('/booking/filter', bookingController.filterBookings // Asociamos el controlador de filtrado de reservas

// Exportamos el router
module.exports = router // Exportamos el router para usarlo en otras partes de la aplicación
```

-   Uso de un rmodelo `./model/Booking.js`.

```javascript
// Se genera una clase reserva que define cada una de las variables a utilizar a posterior
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

    //En la obtención de información, se entrega una estructura con la cual se retornará la misma
    getInfo(){
        return `Nombre: ${this.name}, Correo electrónico: ${this.email}, Fecha de ingreso: ${this.arrivalDate}, Fecha de egreso: ${this.departureDate}, Tipo de habitación: ${this.roomType}, Número de personas: ${this.guests}, Estado de pago: ${this.paymentStatus}`;
    }
  }

  // Exportamos la reserva (booking)
  module.exports = Booking; // Exportamos el Booking para usarlo en otras partes de la aplición
```

-   Uso de controlador con `./controllers/bookingController.js`

```javascript
// Inicializamos las reservas
let bookingId = 1;

// a. Crear reserva
exports.createBooking = (req, res) => {
  const { hotel, arrivalDate, departureDate, roomType, guests, name, email, paymentStatus } = req.body;
  const booking = new Booking(bookingId++, hotel, arrivalDate, departureDate, roomType, guests, name, email, paymentStatus);
  bookings.push(booking);
  res.status(201).json({ message: 'Reserva creada exitosamente', booking });
};

// b. Obtención de reserva
exports.getBookings = (req, res) => {
  res.json({ message: 'Obtención de reservas exitosa', bookings });
};

// c. Obtener información de una reserva
exports.getBookingInfo = (req, res) => {
  const info = bookings.map(booking => booking.getInfo());
  res.json({ message: 'Obtención de información de reservas exitosa', info });
};

// c. Obtener información de una reserva por ID
exports.getBookingById = (req, res) => {
  const booking = bookings.find(b => b.id === parseInt(req.params.id));
  if (booking) {
    res.json({ message: 'Obtención de reservas por ID exitosa', booking });
  } else {
    res.status(404).json({ message: 'Reserva no encontrada' });
  }
};

// d. Actualizar información de una reserva
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

// e. Eliminar una reserva
exports.deleteBooking = (req, res) => {
  const index = bookings.findIndex(b => b.id === parseInt(req.params.id));
  if (index !== -1) {
    bookings.splice(index, 1);
    res.status(204).json({ message: 'Reserva eliminada exitosamente' });
  } else {
    res.status(404).json({ message: 'Reserva no encontrada' });
  }
};

// f. Filtrar por reservas
exports.filterBookings = (req, res) => {
  let filteredBookings = bookings;
  const { hotel, date_start, date_end, roomType, paymentStatus, numGuests } = req.query;
  // Obtenemos los posibles filtros desde la cadena de consulta de la URL

  // Filtramos la lista de pedidos según los criterios proporcionados
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

  res.json({ message: 'Reserva filtrada exitosamente', filteredBookings }); // Si encontramos la reserva que coincida que coincidan, respondemos con lo solicitado
};

```

Con esto listo, tenemos una aplicación que incluyen diferentes servicios.

## Archivo con contenido de prueba

Se agrega información en el archivo `reservas.json` con el fin de facilitar pruebas y que sea utilizado.


## Autor

Este proyecto fue creado por [Gaudeamus013](https://github.com/Gaudeamus013).
