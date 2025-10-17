import express from "express";
import mongoose from "mongoose";
import handlebars from "express-handlebars";

const app = express();

// Express
app.get('/', (req, res) => {
    res.render('home', { layout: false })
});

// TODO: Express handlebars
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true
    }
}));

app.set('view engine', 'hbs');
app.set('views', 'src/views');
// static files
app.use(express.static('src/public'));









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