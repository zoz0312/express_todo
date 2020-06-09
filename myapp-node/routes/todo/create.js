const { libs } = require('../../lib');
const lib = new libs();

const { TodoCard } = require('../../models');

const todoCVali = (req, res, next) => {
	const title = req.body.title;
	const contents = req.body.contents;
	const dueDate = req.body.dueDate;
	const type = req.body.type;
	const depth = req.body.depth;

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
	if (typeof depth !== 'number') {
		flag = true;
	}

	if (flag) {
		lib.errDesc = 'Type Error';
		res.send(lib.resData);
	} else {
		next();
	}
};

const todoC = async (req, res, next) => {
	const data = {
		title: req.body.title,
		contents: req.body.contents,
		dueDate: req.body.dueDate,
		type: req.body.type,
		depth: req.body.depth,
		createDate: new Date(),
		updateDate: new Date(),
	}
	try {
		await TodoCard.create(data);
		lib.success = true;
		res.send(lib.resData);
	} catch (e) {
		lib.errDesc = 'Insert Error';
		res.send(lib.resData);
	} finally {
	}
};


module.exports = {
	todoCVali,
	todoC,
};
