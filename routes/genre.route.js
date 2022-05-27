const { Router } = require('express')
const { genreController } = require('../controllers/genre.controller')


const router = Router()

router.post('/admin/genre', genreController.postGenre)
router.get('/admin/genre', genreController.getGenre)
router.get('/admin/genre/:id', genreController.getGenreById)
router.delete('/admin/genre/:id', genreController.removeGenreById)
router.patch('/admin/genre/:id', genreController.patchGenreById)

module.exports = router