const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require("mongoose");
const config = require('config');

const contactsRouter = require('./src/routes/contacts.route');
const swaggerDocs = require('./src/utils/swagger');

const app = express();
swaggerDocs(app);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

var router = express.Router();
router.use('/contacts', contactsRouter);
app.use("/api/v1", router);

// handling 404 error
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

// handling client & server error response
app.use((error, req, res, next) => {
  const resStatus = error.status || 500;
  res.status(resStatus).json({ error: true, message: error.message });
  next();
});

const port = config.get('PORT');

// connecting to mongoDB
mongoose
  .connect(config.get('DB_CONNECT'))
  .then(() => {
    console.log("DB connected");
  })
  .catch(err => console.log(err));

app.listen(port, () => console.log(`listening on port ${port}`));