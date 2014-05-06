var express = require('express'),
    app = express()
  , http = require('http')
  , server = http.createServer(app);
var url = require('url');
// listen for new web clients:
server.listen(8080);

// routing
app.get('/', function (req, res) {
  res.sendfile(__dirname + '');
});

if( url.parse(req.url).pathname !== '' && url.parse(req.url).pathname !=='/favicon.ico')
{
    var callback = url.parse(request.url).pathname.split('=');
    for (var i =0; i<callback.length;i++)
    {
            console.log(callback[i]);
    }
}
else{
        res.write('an error had occured!');
    }
