const { Router } = require('express')
const { bookController } = require('../controllers/books.controller')

const router = Router()

router.post('/admin/book', bookController.postBook)
router.get('/admin/book', bookController.getBooks)
router.delete('/admin/book/:id', bookController.deleteBookById)
router.patch('/admin/book/:id', bookController.patchBookById)

module.exports = router