const { libs } = require('../../lib');
const lib = new libs();

const { TodoCard } = require('../../models');

const todoSVali = (req, res, next) => {
	/*
	try {
		next();
	} catch (e) {
		lib.errDesc = `[${req.url}] - Type Error - ${e.name}: ${e.message}`;
		res.send(lib.resData);
	};
	*/
	next();
};

const todoS = async (req, res, next) => {
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
		lib.errDesc = `[${req.url}] - Select Error - ${e.name}: ${e.message}`;
	} finally {
		res.send(lib.resData);
	}
};


module.exports = {
	todoSVali,
	todoS,
};
