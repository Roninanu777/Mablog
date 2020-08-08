// load environment variables
require('dotenv').config();

const app = require('./app');
const { port } = require('./config');

// Connect to mongoose
require('./db');

// Run express server
app.listen(port, () => {
  console.log(`Server running at port ${port} ✌`);
});
