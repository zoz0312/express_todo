const { libs } = require('../../lib');
const lib = new libs();

const { TodoCard } = require('../../models');

const todoDVali = (req, res, next) => {
	const id = req.body.id;

	try {
		if (!lib.isNum(id)) {
			throw new Error('고유ID Type Error');
		}
		next();
	} catch (e) {
		lib.errDesc = `[${req.url}] - Type Error - ${e.name}: ${e.message}`;
		res.send(lib.resData);
	};
};

const todoD = async (req, res, next) => {
	const id = req.body.id;

	try {
		await TodoCard.destroy({
			where: {
				id
			}
		});
		lib.success = true;
	} catch (e) {
		lib.errDesc = `[${req.url}] - Delete Error - ${e.name}: ${e.message}`;
	} finally {
		res.send(lib.resData);
	}
};


module.exports = {
	todoDVali,
	todoD,
};
