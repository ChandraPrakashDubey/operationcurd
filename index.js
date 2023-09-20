const express = require('express')
const app = express();
const PORT = 4000;
const mongoose = require('mongoose');
require('dotenv').config();
const routes = require('./routes/routes');
app.use('/api', routes)
const mongoString = process.env.DATABASE_URL
mongoose.connect(mongoString).then(() => {
  console.log("Connected to Database");
}).catch((err) => {
  console.log("Not Connected to Database ERROR! ", err);
});

app.use(express.json());

app.listen(PORT, () => {
  console.log("App is running on port", PORT);
})