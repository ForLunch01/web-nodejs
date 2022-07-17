// http 패키지 불러옴
const http = require("http");

function handleRequest(request, response) {
  // localhost:3000/currenttime
  if (request.url === "/currenttime") {
    response.statusCode = 200;
    response.end('<h1>' + new Date().toISOString() + '</h1>')
  }
  // localhost:3000
  else if (request.url === "/") {
    response.statusCode = 200;
    response.end("<h1>Hello World!</h1>");
  }
}

const server = http.createServer(handleRequest);

// 3000, 개발 중 테스트를 위한 포트
server.listen(3000);
