const { libs } = require('../../lib');
const lib = new libs();

const { TodoCard } = require('../../models');

const todoUVali = (req, res, next) => {
	const id = req.body.id;
	const title = req.body.title;
	const contents = req.body.contents;
	const dueDate = req.body.dueDate;
	const type = req.body.type;
	const depth = req.body.depth;

	let flag = false;

	if (!lib.isNum(id)) {
		flag = true;
	}
	if (!lib.isStr(title)) {
		flag = true;
	}
	if (!lib.isStr(contents)) {
		flag = true;
	}
	if (!lib.isStr(dueDate)) {
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

const todoU = async (req, res, next) => {
	const id = req.body.title;
	const data = {
		title: req.body.title,
		contents: req.body.contents,
		dueDate: req.body.dueDate,
		type: req.body.type,
		depth: req.body.depth,
		updateDate: new Date(),
	}
	try {
		await TodoCard.update(data, { where : { id } });
		lib.success = true;
	} catch (e) {
		lib.errDesc = 'Update Error';
	} finally {
		res.send(lib.resData);
	}
};


module.exports = {
	todoUVali,
	todoU,
};
