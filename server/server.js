const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 5001;

const dataRouter = require('./routes/data.router');

// Middleware
app.use(express.json());
app.use(express.static('build'));

// Express Routes
app.use('/api/data', dataRouter);

// To Start the Server
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
