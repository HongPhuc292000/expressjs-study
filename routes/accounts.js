const express = require('express');
const router = express.Router();

const accountController = require('../controllers/AccountController');

router.post('/register', accountController.register);
router.get('/login', accountController.login);
router.get('/listAccs', accountController.getListAccount);

module.exports = router;