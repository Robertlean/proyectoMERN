const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clients')
const clientMiddleware = require('../middlewares/clients')

router.get('/', clientController.getAll);
router.get('/edit/:id', clientController.getById);
router.post('/', clientMiddleware.validator, clientController.create)
router.put('/edit/:id', clientController.update);
router.delete('/:id', clientController.remove);

module.exports = router