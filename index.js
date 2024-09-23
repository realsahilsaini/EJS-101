const express = require('express');

const app = express();


//serve static files from public directory
app.use(express.static('public'));

//Set EJS as templating engine
app.set('view engine', 'ejs');


//Sample route to render index.ejs file
app.get('/', (req, res) => {

  const users = [
    { name: 'John'},
    { name: 'Jane'},
    { name: 'Doe'}
  ]

  
  res.render('index', { users: users });
});


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});



