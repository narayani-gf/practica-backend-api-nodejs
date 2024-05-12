const router = require('express').Router();
const peliculas = require('../controllers/peliculas.controller')

// GET: api/peliculas
router.get('/', peliculas.getAll);

// GET: api/peliculas/5
router.get('/:id', peliculas.get);

// POST: api/peliculas
router.post('/', peliculas.create);

// PUT: api/peliculas/5
router.put('/:id', peliculas.update);

// DELETE: api/peliculas/5
router.delete('/:id', peliculas.delete);

// POST: api/peliculas/5/categoria
router.post('/:id/categoria', peliculas.asignaCategoria);

// DELETE: api/peliculas/5/categoria
router.delete('/:id/categoria/:idcategoria', peliculas.eliminaCategoria);

module.exports = router