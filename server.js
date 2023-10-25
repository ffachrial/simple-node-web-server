const http = require('http');

const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
 
    response.statusCode = 200;

    const { method } = request;
 
    if(method === 'GET') {
        response.end('<h1>Hello!</h1>');
    }
 
    if(method === 'POST') {
        response.end('<h1>Hola!</h1>');
    }
 
    if(method === 'PUT') {
        response.end('<h1>Bonjour!</h1>');
    }
 
    if(method === 'DELETE') {
        response.end('<h1>Moshi-moshi!</h1>');
    }
};
 
const server = http.createServer(requestListener);
 
const port = 5005;
const host = 'localhost';
 
server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}`);
});