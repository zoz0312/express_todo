const express = require('express');
const router = express.Router();

const { libs } = require('../../lib');
const lib = new libs();

const { TodoCard } = require('../models');

router.post('/selectAll', async (req, res, next) => {
	try {
		lib.success = true;
		lib.data = await TodoCard.find({});
	} catch (e) {
		lib.errDesc = e;
	}
	res.end(lib.resData());
});

router.post('/create', async (req, res, next) => {
	const bd_data = {
		title: req.body('title'),
		contents: req.body('contents'),
		createDate: req.body('createDate'),
		dueDate: req.body('dueDate'),
	}

	try {
		lib.success = true;
		await TodoCard.create(bd_data);
	} catch (e) {
		lib.errDesc = e;
	}
	res.end(lib.resData());
});


module.exports = router;
