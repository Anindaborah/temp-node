const http= require('http')

const server=http.createServer((req,res)=>{
    if(req.url === '/'){
      res.end('Hello Welcome to our homepage')
    }
    
    if(req.url === '/account'){
        res.end('Welcome to the accound section')
    }
    
})

server.listen(3001)