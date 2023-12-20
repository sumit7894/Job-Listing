const express = require('express');

const {signup,login} = require('../controllers/user-controller');
const authRouter = express.Router();


authRouter.route('/signup').post(signup);
authRouter.route('/signin').post(login);

module.exports = authRouter;