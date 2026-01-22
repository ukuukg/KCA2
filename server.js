const http=require("http");
const fs=require("fs");
const qs=require("querystring");
const ip="0.0.0.0";
const dotenv=require('dotenv');
const PORT = process.env.PORT || 3000;

dotenv.config(); 
//如果有.env檔(例如本地端)，dotenv.config() 會讀.env檔並存到process.env
//如果沒有.env檔(例如render deploy端)，dotenv.config() 甚麼都不會做

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('dog');
  } else if (req.url === '/frog') {
    res.end('frog');
  } else {
    res.end('Page not found');
  }
});


server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

console.log(process.env.password);
