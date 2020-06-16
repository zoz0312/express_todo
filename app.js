const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const history = require('connect-history-api-fallback');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const todoRouter = require('./routes/todo');

const app = express();

var sequelize = require('./models').sequelize;   // mysql 시퀄라이저 모델
sequelize.sync();    //서버가 실행될때 시퀄라이저의 스키마를 DB에 적용시킨다.

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(bodyParser.json());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(history());

app.use('/', indexRouter);
//app.use('/users', usersRouter);
app.use('/todo', todoRouter);

/* history URL DEST */
app.get('/index.html', function(req, res, next) {
	console.log('GET')
	res.sendFile(path.join(__dirname, '/public', 'index.html'));
});

app.all('*', (req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET, POST');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  console.log('req.url', req.url);
	next();
});
app.delete('*', (req, res, next) => {
	res.status(404).end();
	res.end();
});
app.options('*', (req, res, next) => {
	res.status(404).end();
	res.end();
});
app.head('*', (req, res, next) => {
	res.status(404).end();
	res.end();
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
