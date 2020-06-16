'use strict'

const sequelize = require('sequelize');
const Op = sequelize.Op;
const moment = require('moment');
require('moment-timezone');
moment.tz.setDefault('Asia/Seoul');

class libs {
	constructor () {
		this.data = {};
		this.desc = '';
		this.errDesc = '';
		this.success = false;
		this.Op = Op;
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

	get date () {
		return moment().format();
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

	between (val, min, max) {
		if (!this.isNum(val)) {
			return false;
		}
		if (!this.isNum(min)) {
			return false;
		}
		if (!this.isNum(max)) {
			return false;
		}
		if (val < min) {
			return false;
		}
		if (max < val) {
			return false;
		}
		return true;
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
