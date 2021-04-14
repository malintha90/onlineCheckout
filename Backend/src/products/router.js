const express = require('express');
const controller = require('./controller');

const router = express.Router();

router.route('/').get(controller.getProducts);
router.route('/:id').get(controller.getProduct);

module.exports = router;