const { libs } = require('../../lib');
const lib = new libs();

const { TodoCard } = require('../../models');

const alramCount = async (req, res, next) => {
	const curDate = new Date();
	try {
		const data = await TodoCard.findAll({
			attributes: ['id', 'title', 'contents', 'depth', 'type', 'createDate', 'dueDate', 'updateDate'],
			where: {
				dueDate: {[lib.Op.lt]: curDate},
				type: {[lib.Op.or]: ['assign', 'ongoing']}
			}
		});
		lib.data = { items: lib.findParse(data) }
		lib.success = true;
	} catch (e) {
		lib.errDesc = `[${req.url}] - Error - ${e.name}: ${e.message}`;
	} finally {
		res.send(lib.resData);
	}
};


module.exports = {
	//todoAVali,
	alramCount,
};
