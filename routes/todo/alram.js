const { libs } = require('../../lib');
const lib = new libs();

const { TodoCard } = require('../../models');

const alramCount = async (req, res, next) => {
	const curDate = lib.date;
	try {
		const data = await TodoCard.findAll({
			attributes: ['id', 'title', 'contents', 'depth', 'type', 'createDate', 'dueDate', 'updateDate'],
			where: {
				dueDate: {
					[lib.Op.and]: [
						{ [lib.Op.lt]: curDate },
						{ [lib.Op.ne]: '0000-00-00 00:00:00' },
					],
				},
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

