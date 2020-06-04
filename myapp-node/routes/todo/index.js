const express = require('express');
const router = express.Router();

<<<<<<< HEAD
const libs = require('../../lib');
const lib = new libs();

const { TodoCard } = require('../../models');

router.post('/searchAll', async (req, res, next) => {
=======
const { libs } = require('../../lib');
const lib = new libs();

const { TodoCard } = require('../models');

router.post('/selectAll', async (req, res, next) => {
>>>>>>> 962640c532156fb70841b74a0d1a146a6b8b5802
	try {
		lib.success = true;
		lib.data = await TodoCard.find({});
	} catch (e) {
		lib.errDesc = e;
	}
<<<<<<< HEAD
	res.send(lib.resData());
});

router.post('/create', (req, res, next) => {
	const title = req.body('title');
	const contents = req.body('contents');
	const dueDate = req.body('dueDate');
	const type = req.body('type');
	const depth = req.body('depth');

	let flag = false;

	if (!!title == false || typeof title !== 'string') {
		flag = true;
	}
	if (!!contents == false || typeof contents !== 'string') {
		flag = true;
	}
	if (!!dueDate == false || typeof dueDate !== 'string') {
		flag = true;
	}
	if (!!type == false || typeof type !== 'string') {
		flag = true;
	}
	if (!!depth == false || typeof depth !== 'number') {
		flag = true;
	}

	if (flag) {
		lib.errDesc = 'Type Error';
		res.send(lib.resData());
	} else {
		next();
	}
});
router.post('/create', async (req, res, next) => {
	const data = {
		title: req.body('title'),
		contents: req.body('contents'),
		dueDate: req.body('dueDate'),
		type: req.body('type'),
		depth: req.body('depth'),
		createDate: new Date(),
		updateDate: new Date(),
	}
	try {
		lib.success = true;
		lib.data = await TodoCard.create(data);
	} catch (e) {
		lib.errDesc = e;
	}
	res.send(lib.resData());
});

=======
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
>>>>>>> 962640c532156fb70841b74a0d1a146a6b8b5802
