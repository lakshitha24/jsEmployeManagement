const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/swivel",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Connected to MongoDB");
      }
    }
  );

//middleware
app.use(express.json());
const employeeRouter = require("./routes/EmployeeRoutes");

app.use('/api/employee',employeeRouter)

app.listen(3001,()=>{
    console.log('Server is running on port 3001');
});

module.exports = app;