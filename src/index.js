import express from "express";
import mongoose from "mongoose";

const app = express();


// Express
app.get('/', (req, res) => {
    res.send('It works!')
});

// TODO: Express handlebars

// DB connection
const localDB = 'mongodb://localhost:27017/';

try {
    await mongoose.connect(localDB, { dbName: 'exam_prep_1' });
    console.log('DB connected successfully!');

} catch (error) {
    console.error('DB connection failure,', error.message)
}

app.listen(3000, () => {
    console.log('Server is listening on http://localhost:3000...');
})