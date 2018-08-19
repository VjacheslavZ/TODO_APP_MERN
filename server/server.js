const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const passport = require('passport');

const users = require('./routes/api/users');
const app = express();

//body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use((bodyParser.json()));

//app.get('/', (req, res) => res.send('Hello Dev !!'));

app.use('/api/users', users);

//DB config
const db = require('./config/keys').mongoURI;

//Connect to MongoDB
mongoose
	.connect(db,{ useNewUrlParser: true })
	.then(() => console.log('MongoDB Connected'))
	.catch(err => console.log(err));

//Passport middleware
app.use(passport.initialize());
//Passport Config
require('./config/passport')(passport);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));