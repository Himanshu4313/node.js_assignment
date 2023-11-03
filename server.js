const http =require('http');
const server = http.createServer((req , res) =>{
       if(req.url == '/'){
          res.write('<h1>I am happy to learn full stck web dev from pw skill.</h1>');
       }
       res.end();
});

server.listen(5001);
console.log('Server is running on 5001 port');