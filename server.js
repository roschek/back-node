const express = require('express');
const app = express();
app.set('view engine', 'ejs');
const createPath = require('./helpers/create_path');
const morgan = require('morgan');
const mongoose = require('mongoose');

const postRoutes = require('./routes/post-routes');
const contactRoutes = require('./routes/contact-routes');

const PORT = 3000;



const db = 'mongodb://localhost:27017/todo_back';
mongoose
  .connect(db,{useNewUrlParser: true, useUnifiedTopology: true})
  .then((res)=>{console.log('Connection DB');})
  .catch((err)=>{console.log(`Some error: ${err}`);})
// Стили

app.use(express.static(`${__dirname}/public`));

//Логгер
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.use(postRoutes);
app.use(contactRoutes);

app.use(express.urlencoded({extended: false}));


//роутинг
app.get('/',(req,res)=>{  
  const title = 'Home';
  res.render(createPath('index'),{ title });
})


//обработка ошибок

app.use((req, res) => {
  const title = 'Error Page';
  res
    .status(404)
    .sendFile(createPath('error'),{ title });
})

app.listen(PORT,  (err)=>{
  err? console.log(err): console.log(`Listening PORT: ${PORT}, ${__dirname}`);
})