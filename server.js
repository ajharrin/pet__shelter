const express = require('express'),
      DB_NAME = "pet_api_db",
         port = 8000,
           bp = require('body-parser'),
          app = express();

app.use(express.static(__dirname + "/client/dist/client"));
app.use(bp.json());

require('./server/utils/mongoose')(DB_NAME);
require('./server/utils/routes')(app);

app.all('*', (req, res, next) => {
  res.sendFile(__dirname + "/client/dist/client/index.html");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});