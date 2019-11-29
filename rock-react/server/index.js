const express = require('express');
const app = express();
const fetch = require('node-fetch');
const port = process.env.PORT || 5000;

app.get('/api/express', (req, res) => {

  const apiUrl = 'https://portfolio-d23d4.firebaseio.com/projects.json'
  fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
      res.send({ data });
      console.log('data', data)
    })
    .catch(err => {
      console.log('error', err)
    })

});

app.listen(port, () => `Server running on port ${port}`);