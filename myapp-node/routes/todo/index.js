const express = require('express');
const router = express.Router();

const { libs } = require('../../lib');
const lib = new libs();

const { todoSVali, todoS } = require('./select');
const { todoCVali, todoC } = require('./create');

router.post('/select', todoSVali);
router.post('/select', todoS);
router.post('/create', todoCVali);
router.post('/create', todoC);

module.exports = router;
