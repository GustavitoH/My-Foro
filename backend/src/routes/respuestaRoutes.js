const { Router } = require('express');
const router = Router();

const { getRespuesta, createRespuesta} = require('../controllers/respuesta.controller');

router.get('/respuestas', getRespuesta);
router.post('/respuestas', createRespuesta);

module.exports = router;

