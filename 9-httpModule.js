const http=require('http')
// req is what a frontend asks from us while res is something e send to frontend
const server=http.createServer((req,res)=>{
    res.write("Hello world Welcome to backend");
    res.end();
})
server.listen(5000);