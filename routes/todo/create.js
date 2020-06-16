const { libs } = require('../../lib');
const lib = new libs();

const { TodoCard } = require('../../models');

const todoCVali = (req, res, next) => {
	const title = req.body.title;
	const contents = req.body.contents;
	const dueDate = req.body.dueDate;
	const type = req.body.type;
	const depth = req.body.depth;

	try {
		if (!lib.isStr(title)) {
			throw new Error('제목 Type Error');
		}
		if (!lib.isStr(contents)) {
			throw new Error('내용 Type Error');
		}
		if (!lib.isStr(dueDate) && dueDate != '') {
			throw new Error('마감기한 Type Error');
		}
		if (!lib.isStr(type)) {
			throw new Error('상태 Type Error');
		}
		if (!lib.isNum(depth)) {
			throw new Error('우선순위 Type Error');
		}
		next();
	} catch (e) {
		lib.errDesc = `[${req.url}] - Type Error - ${e.name}: ${e.message}`;
		res.send(lib.resData);
	};
};

const todoC = async (req, res, next) => {
	const curDate = lib.date;
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
		lib.errDesc = `[${req.url}] - Insert Error - ${e.name}: ${e.message}`;
	} finally {
		res.send(lib.resData);
	}
};


module.exports = {
	todoCVali,
	todoC,
};