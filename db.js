const mongoose = require('mongoose');
const { mongoDBUrl } = require('./config');

mongoose
  .connect(mongoDBUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected successfully!✨✨✨'))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
