const express = require('express');
const router = express.Router();

const libs = require('../../lib');
const lib = new libs();

const { TodoCard } = require('../../models');

router.post('/searchAll', async (req, res, next) => {
	try {
		lib.success = true;
		lib.data = await TodoCard.find({});
	} catch (e) {
		lib.errDesc = e;
	}
	res.send(lib.resData());
});
