const express = require('express');
 const dotenv = require('dotenv').config();
 const colors = require('colors');
 const {errorHandler} = require('./middleware/errorMiddleware');
 const connectDB = require('./config/db.js');
 const port = process.env.PORT || 5000;

 connectDB();
    
 const app = express();

    app.use(express.json());
    app.use(express.urlencoded({extended: false}));

app.use('/api/goals', require('./routes/goalRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

app.use(errorHandler);
    
app.listen(port, () => console.log(`Server on port ${port}!`))