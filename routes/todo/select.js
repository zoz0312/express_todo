const { libs } = require('../../lib');
const lib = new libs();

const { TodoCard } = require('../../models');

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

const todoDepthVali = (req, res, next) => {
	try {
		const depth = req.body.depth;
		console.log('req', req.params.depth, depth);
		if (!lib.isNum(depth)) {
			throw new Error('Depth Param Type Error');
		}
		if (!lib.between(depth, 0, 3)) {
			throw new Error('Depth Param Range Error');
		}
		next();
	} catch (e) {
		lib.errDesc = `[${req.url}] - Error - ${e.name}: ${e.message}`;
		res.send(lib.resData);
	};
};

const todoDepth = async (req, res, next) => {
	const depth = req.body.depth;
	try {
		const data = await TodoCard.findAll({
			attributes: ['id', 'title', 'contents', 'depth', 'type', 'createDate', 'dueDate', 'updateDate'],
			where: {
				depth
			},
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
	todoS,
	todoDepthVali,
	todoDepth,
};
