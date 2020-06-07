const express = require('express');
const router = express.Router();

const { libs } = require('../../lib');
const lib = new libs();

const { TodoCard } = require('../models');

const { todoCVali, todoC } = require('./create');

router.post('/selectAll', async (req, res, next) => {
	try {
		lib.success = true;
		lib.data = await TodoCard.find({});
	} catch (e) {
		lib.errDesc = e;
	}
	res.send(lib.resData());
});

router.post('/create', todoCVali);
router.post('/create', todoC);

module.exports = router;
