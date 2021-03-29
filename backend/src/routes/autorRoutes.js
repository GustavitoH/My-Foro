const { Router } = require('express');
const router = Router();

const { getAutor, createAutor} = require('../controllers/autor.controller');

router.get('/autores', getAutor);
router.post('/autores', createAutor);

module.exports = router;

