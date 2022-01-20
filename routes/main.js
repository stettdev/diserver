const express = require('express');
const globalMiddleware = require('../middleware/globalMiddleware');
const accountsRouter = require('./accounts');
const peopleRouter = require('./people');

const router = new express.Router();

router.use(globalMiddleware);
router.use('/accounts', accountsRouter);
router.use('/people', peopleRouter);

router.get('*', (req, res) => res.sendStatus(403));

module.exports = router;
