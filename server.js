let express = require('express');
let app = express();
let port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/app/'));

app.listen(port, function() {
    console.log('server starting at http://localhost:' + port);
});