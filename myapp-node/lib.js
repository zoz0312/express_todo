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

	isNum (val) {
		return typeof val === 'number';
	}

	isStr (val) {
		if (typeof val !== 'string') {
			return false;
		}
		if (!!val === false) {
			return false;
		}
		return true;
	}

	isObj (val) {
		if (typeof val !== 'object') {
			return false;
		}
		if (!!val === false) {
			return false;
		}
		return true;
	}

	isArr (val) {
		if (typeof val !== 'object') {
			return false;
		}
		return Array.isArray(val);
	}
	findParse (obj) {
		if (!this.isObj(obj)) {
			return [];
		}
		return Object.keys(obj).map((idx) => {
			return obj[idx].dataValues;
		});
	}
}

module.exports = {
	libs
}
