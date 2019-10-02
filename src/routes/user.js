import express from 'express';
// import validate from 'express-validation';

import * as userController from '../controllers/user.controller';

const router = express.Router();

router.get(
    '',
    userController.list
);

module.exports = router;
