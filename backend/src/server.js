const express = require('express')
const app = express()
var cors = require('cors');

app.use(cors())
app.use(express.json());
app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
   });
   
app.use(express.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.send('Hello World - GUSTAVO');
})
// Routes
app.use(require('./routes/autorRoutes'));
app.use(require('./routes/publicacionRoutes'));
app.use(require('./routes/respuestaRoutes'));

app.listen(3000)
console.log("Servidor levantado en el puerto: " + 3000);
