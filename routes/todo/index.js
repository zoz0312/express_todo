const express = require('express');
const router = express.Router();

const { libs } = require('../../lib');
const lib = new libs();

const { todoSVali, todoS } = require('./select');
const { todoCVali, todoC } = require('./create');
const { todoUVali, todoU } = require('./update');
const { todoDVali, todoD } = require('./delete');
const { alramCount } = require('./alram');

router.post('/select', todoSVali);
router.post('/select', todoS);
router.post('/create', todoCVali);
router.post('/create', todoC);
router.post('/update', todoUVali);
router.post('/update', todoU);
router.post('/delete', todoDVali);
router.post('/delete', todoD);
router.post('/alramCount', alramCount);

module.exports = router;
