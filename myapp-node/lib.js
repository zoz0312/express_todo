'use strict'

class libs {
	constructor () {
<<<<<<< HEAD
		this.desc = '';
		this.errDesc = '';
		this.data = {};
=======
		this.data = {};
		this.desc = '';
		this.errDesc = '';
>>>>>>> 962640c532156fb70841b74a0d1a146a6b8b5802
		this.success = false;
	}
}

libs.prototype.resData = () => {
<<<<<<< HEAD
	const rtn = {
		desc: this.desc,
		errDesc: this.erDesc,
		data: this.data,
		success: this.success
	};
=======
	const rtn = Object.assign({}, {
		data: this.data,
		desc: this.desc,
		errDesc: this.errDesc,
		success: this.success
	});
>>>>>>> 962640c532156fb70841b74a0d1a146a6b8b5802
	this.clear();
	return rtn;
}

libs.prototype.clear = () => {
<<<<<<< HEAD
	this.desc = '';
	this.errDesc = '';
	this.data = {};
	this.success = false;
}

module.exports {
=======
	this.data = {};
	this.desc = '';
	this.errDesc = '';
	this.success = false;
}

module.exports = {
>>>>>>> 962640c532156fb70841b74a0d1a146a6b8b5802
	libs
}
