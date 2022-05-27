const { Router } = require('express')
const { reviewController } = require('../controllers/review.controller')


const router = Router()

router.post('/admin/review', reviewController.postReview)
router.get('/admin/review/:id', reviewController.getRevBookId)
router.delete('/admin/review/:id', reviewController.deleteRevById)
router.patch('/admin/review/:id', reviewController.patchRevById)


module.exports = router