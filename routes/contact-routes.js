const express = require('express');
const router = express.Router();
const createPath = require('../helpers/create_path');


router.get('/contacts',(req,res)=>{  
  const title = 'Contacts';
  const contacts = [
    { name: 'YouTube', link: '#' },
    { name: 'Twitter', link: '#' },
    { name: 'GitHub', link: '#' },
  ];
  res.render(createPath('contacts'), { contacts, title });
})

module.exports = router;