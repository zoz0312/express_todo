const { libs } = require('../../lib');
const lib = new libs();

const { TodoCard } = require('../../models');

const todoDVali = (req, res, next) => {
	const id = req.body.id;

	let flag = false;

	if (!lib.isNum(id)) {
		flag = true;
	}

	if (flag) {
		lib.errDesc = 'Type Error';
		res.send(lib.resData);
	} else {
		next();
	}
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
		lib.errDesc = 'Delete Error';
	} finally {
		res.send(lib.resData);
	}
};


module.exports = {
	todoDVali,
	todoD,
};
