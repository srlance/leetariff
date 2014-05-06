var http = require('http');
var url = require('url');
var nexmo = require('./lib/nexmo');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});

    if( url.parse(request.url).pathname !== '' && url.parse(request.url).pathname !== '/favicon.ico')
    {
        var info = {};
        var urlStr = url.parse(request.url);
        var qString = url.parse(urlStr,true, true);
        var callback = qString.search.split('&');
        for (var i =0; i<callback.length;i++)
        {
            if (callback[i] !== null)
            {
            console.log(i);
            console.log(callback[i]);
            if (i ===0)
            {
                callback[i] = callback[i].replace('?','');
                console.log(callback[i]);
            }
            var details = callback[i].split('=');
            info[details[0]] = details[1];
            console.log(info);
            }
        }
    }
    else{
        response.write('an error had occured!');
    }

    response.end();
}).listen(8080);

console.log('Server started');
/*
?msisdn=19150000001&to=12108054321
&messageId=000000FFFB0356D1&text=This+is+an+inbound+message
&type=text&message-timestamp=2012-08-19+20%3A38%3A23*/