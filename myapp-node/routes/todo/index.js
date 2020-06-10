const express = require('express');
const router = express.Router();

const { libs } = require('../../lib');
const lib = new libs();

const { todoSVali, todoS } = require('./select');
const { todoCVali, todoC } = require('./create');
const { todoUVali, todoU } = require('./update');
const { todoDVali, todoD } = require('./delete');

router.post('/select', todoSVali);
router.post('/select', todoS);
router.post('/create', todoCVali);
router.post('/create', todoC);
router.post('/update', todoDVali);
router.post('/update', todoD);
router.post('/delete', todoDVali);
router.post('/delete', todoD);

module.exports = router;
