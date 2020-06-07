const todoCVali = (req, res, next) => {
	const title = req.body('title');
	const contents = req.body('contents');
	const dueDate = req.body('dueDate');
	const type = req.body('type');
	const depth = req.body('depth');

	let flag = false;

	if (!!title == false || typeof title !== 'string') {
		flag = true;
	}
	if (!!contents == false || typeof contents !== 'string') {
		flag = true;
	}
	if (!!dueDate == false || typeof dueDate !== 'string') {
		flag = true;
	}
	if (!!type == false || typeof type !== 'string') {
		flag = true;
	}
	if (!!depth == false || typeof depth !== 'number') {
		flag = true;
	}

	if (flag) {
		lib.errDesc = 'Type Error';
		res.send(lib.resData());
	} else {
		next();
	}
};

const todoC = (req, res, next) => {
	const data = {
		title: req.body('title'),
		contents: req.body('contents'),
		dueDate: req.body('dueDate'),
		type: req.body('type'),
		depth: req.body('depth'),
		createDate: new Date(),
		updateDate: new Date(),
	}
	try {
		lib.success = true;
		lib.data = await TodoCard.create(data);
	} catch (e) {
		lib.errDesc = e;
	}
	res.send(lib.resData());
};


module.exports = {
	todoCVali,
	todoC,
};
