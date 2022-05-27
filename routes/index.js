const { Router } = require("express");
const { route } = require("./books.route");

const router = Router();

router.use(require("./books.route"));
router.use(require("./client.route"));
router.use(require("./genre.route"));
router.use(require("./review.route"));

module.exports = router;
