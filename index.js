const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const employeeRoutes = require('./routes/employeeRoutes');
const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;


app.use(bodyParser.json());
app.use(cors());
app.use('/api', employeeRoutes);


app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});

