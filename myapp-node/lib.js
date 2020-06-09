'use strict'

class libs {
	constructor () {
		this.data = {};
		this.desc = '';
		this.errDesc = '';
		this.success = false;
	}

	get resData () {
		const data = {
			desc: this.desc,
			errDesc: this.errDesc,
			data: Object.assign({}, this.data),
			success: this.success,
		}
		this.desc = '';
		this.errDesc = '';
		this.data = {};
		this.success = false;
		return data;
	}
}

module.exports = {
	libs
}
