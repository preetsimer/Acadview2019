var http=require('http');
var fs=require('fs');
var server=http.createServer(function(req,res){
  console.log('request was made'+ res.url);
  if(req.url ==='/server' || req.url ==='/')
  {
    res.writeHead(200,{'content-Type':'text/plain'})
  res.end('hey');
  }
  else if(req.url ==='/html')
  {
    res.writeHead(200,{'content-Type':'text/html'});
    fs.createReadStream(__dirname + '/index.html', 'utf-8').pipe(res);
  }
  else if(req.url==='/json')
  {
    res.writeHead(200,{'content-Type':'application/json'});
  var myobj={
    name:'Simerpreet Singh',
    age:21
  };
  res.end(JSON.stringify(myobj));
}
else {
  res.writeHead(200,{'content-Type':'text/plain'});
 fs.createReadStream(__dirname + '/readMe.txt').pipe(res);
}
});
  server.listen(3000,'127.0.0.1');
  console.log('sbshscsc0');
