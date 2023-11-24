const router = require('express').Router();
const Controller = require('../controllers/userController.js');

router.get('/', Controller.getData);
router.post('/login', Controller.login);

module.exports = router;