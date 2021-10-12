const dbSetup = require('./db/db-setup');
const express = require('express');
const User = require('../db/models/user')

dbSetup();

const app = express();
app.use(express.json());

//  in prod put this in separate files
app.get('/user/:id', async (req, res, next) => {
    const { id } = req.params;
    const user = await User.query().findById(id);
    res.json(user);

})


app.listen(8080, () => console.log('sever running on port 8080'))