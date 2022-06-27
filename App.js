const http=require('http')
// req is what a frontend asks from us while res is something e send to frontend
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end("Hello world Welcome to backend");
    }
    else if(req.url==='/about'){
        res.end("Welcome to history of backend");
    }
    else{
        res.end(`<h1>heelo</h1> 
    You have entered wrong url`)}
})
server.listen(8080);