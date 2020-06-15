const { libs } = require('../../lib');
const lib = new libs();

const { TodoCard } = require('../../models');

const todoSVali = (req, res, next) => {
	let flag = false;

	if (flag) {
		lib.errDesc = 'Type Error';
		res.send(lib.resData);
	} else {
		next();
	}
};

const todoS = async (req, res, next) => {
	/*
	const data = {
		title: req.body.title,
		contents: req.body.contents,
		dueDate: req.body.dueDate,
		type: req.body.type,
		depth: req.body.depth,
		createDate: new Date(),
		updateDate: new Date(),
	}
	*/
	try {
		const data = await TodoCard.findAll({
			attributes: ['id', 'title', 'contents', 'depth', 'type', 'createDate', 'dueDate', 'updateDate'],
			order:[
				['depth', 'ASC']
			]
		});
		lib.data = { items: lib.findParse(data) }
		lib.success = true;
	} catch (e) {
		lib.errDesc = 'Select Error';
	} finally {
		res.send(lib.resData);
	}
};


module.exports = {
	todoSVali,
	todoS,
};
