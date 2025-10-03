const http = require('http');
const fs = require('fs');

// Read the HTML file asynchronously
fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err;
    }

    http.createServer(function(request, response) {
        if (request.url === '/modern-mechanic.png') {
            fs.readFile('./modern-mechanic.png', function(err, img) {
                if (err) {
                    response.writeHead(404, { 'Content-Type': 'text/plain' });
                    response.end('Image not found');
                    return;
                }
                response.writeHead(200, { 'Content-Type': 'image/png' });
                response.end(img);
            });
        } else {
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(html);
            response.end();
        }
    }).listen(5000);
});