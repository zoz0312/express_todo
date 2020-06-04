'use strict'

class libs {
	constructor () {
		this.desc = '';
		this.errDesc = '';
		this.data = {};
		this.success = false;
	}
}

libs.prototype.resData = () => {
	const rtn = {
		desc: this.desc,
		errDesc: this.erDesc,
		data: this.data,
		success: this.success
	};
	this.clear();
	return rtn;
}

libs.prototype.clear = () => {
	this.desc = '';
	this.errDesc = '';
	this.data = {};
	this.success = false;
}

module.exports {
	libs
}
