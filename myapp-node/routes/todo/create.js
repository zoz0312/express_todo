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

	if (!lib.isStr(title)) {
		flag = true;
	}
	if (!lib.isStr(contents)) {
		flag = true;
	}
	if (!lib.isStr(dueDate) && dueDate != '') {
		flag = true;
	}
	if (!lib.isStr(type)) {
		flag = true;
	}
	if (!lib.isNum(depth)) {
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
	const curDate = new Date();
	console.log('curDate', curDate);
	const data = {
		title: req.body.title,
		contents: req.body.contents,
		dueDate: req.body.dueDate,
		type: req.body.type,
		depth: req.body.depth,
		createDate: curDate,
		updateDate: curDate,
	}
	try {
		await TodoCard.create(data);
		lib.success = true;
	} catch (e) {
		lib.errDesc = 'Insert Error';
	} finally {
		res.send(lib.resData);
	}
};


module.exports = {
	todoCVali,
	todoC,
};
