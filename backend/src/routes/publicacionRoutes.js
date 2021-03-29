const { Router } = require('express');
const router = Router();

const { getPublicacion, createPublicacion} = require('../controllers/publicacion.controller');

router.get('/publicaciones', getPublicacion);
router.post('/publicaciones', createPublicacion);

module.exports = router;

