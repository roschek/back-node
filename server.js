const express = require('express');
const app = express();
app.set('view engine', 'ejs');
const path = require('path');

const PORT = 3000;

const createPath = (page) => path.resolve(__dirname,'ejs-views', `${page}.ejs`);

app.use(express.static(`${__dirname}/public`));
app.get('/',(req,res)=>{  
  const title = 'Home';
  res.render(createPath('index'),{ title });
})
app.get('/posts:id',(req,res)=>{  
  const title = 'Post';
  res.render(createPath('post'),{ title });
})
app.get('/posts',(req,res)=>{  
  const title = 'Posts';
  res.render(createPath('posts'),{ title });
})
app.get('/add-post',(req,res)=>{  
  const title = 'Add Post';
  res.render(createPath('add-post'),{ title });
})
app.get('/contacts',(req,res)=>{  
  const title = 'Contacts';
  const contacts = [
    { name: 'YouTube', link: '#' },
    { name: 'Twitter', link: '#' },
    { name: 'GitHub', link: '#' },
  ];
  res.render(createPath('contacts'), { contacts, title });
})

app.use((req, res) => {
  const title = 'Error Page';
  res
    .status(404)
    .sendFile(createPath('error'),{ title });
})

app.listen(PORT,  (err)=>{
  err? console.log(err): console.log(`Listening PORT: ${PORT}, ${__dirname}`);
})