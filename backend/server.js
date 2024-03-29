const express = require("express");
const colors = require('colors');
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const port = process.env.PORT || 5000;
const connectDB = require('./config/db')

connectDB()
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/animal", require("./routes/farmRoutes"));
app.use("/api/user", require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(port, () => console.log(`server started on port ${port}`));
