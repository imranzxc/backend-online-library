const { Router } = require('express')
const { clientController } = require('../controllers/client.controller')


const router = Router()

router.post('/client', clientController.postClient)
router.get('/client/book', clientController.getBooks)
router.get('/client/book/genre/:id', clientController.getBooksByGenreId)
router.get('/client/book/:id', clientController.getBookById)
router.post('/client/:id/book/:bookId/review', clientController.postBookReview)
router.patch('/client/:id/bookIsRented/:bookId', clientController.patchRentBook)
router.patch('/client/:id/bookReturn/:bookId', clientController.patchBookReturn)
router.patch('/admin/client/:id/book/:bookId', clientController.takeBookBack)

module.exports = router