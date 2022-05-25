const path = require('path');
const express = require('express');
 const dotenv = require('dotenv').config();
 const colors = require('colors');
 const {errorHandler} = require('./middleware/errorMiddleware');
 const connectDB = require('./config/db.js');
const { sendFile } = require('express/lib/response');
 const port = process.env.PORT || 5000;

 connectDB();
    
 const app = express();

    app.use(express.json());
    app.use(express.urlencoded({extended: false})); 

app.use('/api/goals', require('./routes/goalRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

// Serve static assets if in production
if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, 'frontend/build')));
    app.get('*', (req, res) => res.sendFile(
        path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
    ))
}

app.use(errorHandler);
    
app.listen(port, () => console.log(`Server on port ${port}!`))