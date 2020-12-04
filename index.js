var http= require("http");
var page=`
<h1>WELCOME TO BIHAR TOURIST CENTER </h1><br><br>
Enter your name :        
<input type='text'/> <br><br>
Enter your password : 
<input type='password'/>
`
http.createServer(function(req,res)
{
    res.writeHead(200,{'Content-Type':"text/html"})
    res.write(page)
    res.end();
}).listen(4002)
