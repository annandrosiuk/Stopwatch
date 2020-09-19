const express = require('express');
const app = express();

const PORT = process.env.PORT || 8090;

app.use(express.static(__dirname + '/dist/Stopwatch'));

app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/dist/Stopwatch/index.html')
})

app.listen(PORT, () => {
  console.log('server is running on port ' + PORT)
})