require('dotenv').config();
const express = require('express');
const userRouter = require('./routes/userRouter');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api', userRouter);

app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});
