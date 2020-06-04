'use strict'

class libs {
	constructor () {
		this.data = {};
		this.desc = '';
		this.errDesc = '';
		this.success = false;
	}
}

libs.prototype.resData = () => {
	const rtn = Object.assign({}, {
		data: this.data,
		desc: this.desc,
		errDesc: this.errDesc,
		success: this.success
	});
	this.clear();
	return rtn;
}

libs.prototype.clear = () => {
	this.desc = '';
	this.errDesc = '';
	this.data = {};
	this.success = false;
}

module.exports = {
	libs
}
