const https = require('https');

https.get('https://github.com/', (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);
  console.log
  res.on('data', (d) => {
    process.stdout.write(d);
  });

}).on('error', (e) => {
  console.error(e);
});

var http = require("http");

var options = {
  host: "127.0.0.1",
  port: 8888,
  path: "https://www.taobao.com",
  headers: {
    Host: "www.taobao.com",
    //Pragma: "no-cache",
    //"Cache-Control": "no-cache",
    //"User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36",
    //"Upgrade-Insecure-Requests": '1',
    //"Accept": 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    //"Accept-Encoding": "gzip, deflate",
    //"Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
    //"Cookie" : "pgv_pvi=2678215680; pgv_si=s7228359680"
    
  }
};
http.get(options, function(res) {
  console.log(res);
  res.pipe(process.stdout);
});

var http = require("http");

var options = {
  host: "127.0.0.1",
  port: 8888,
  path: "https://www.taobao.com",
  headers: {
    Host: "www.taobao.com",
    //Pragma: "no-cache",
    //"Cache-Control": "no-cache",
    //"User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36",
    //"Upgrade-Insecure-Requests": '1',
    //"Accept": 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    //"Accept-Encoding": "gzip, deflate",
    //"Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
    //"Cookie" : "pgv_pvi=2678215680; pgv_si=s7228359680"
    
  }
};
http.get(options, function(res) {
  console.log(res);
  res.pipe(process.stdout);
});


const http2 = require('http2');
const fs = require('fs');
const client = http2.connect('https://www.taobao.com', {
  //ca: fs.readFileSync('localhost-cert.pem')
});
client.on('error', (err) => console.error(err));
client.on('socketError', (err) => console.error(err));

const req = client.request({ ':path': '/' });

req.on('response', (headers, flags) => {
  for (const name in headers) {
    console.log(`${name}: ${headers[name]}`);
  }
});

req.setEncoding('utf8');
let data = '';
req.on('data', (chunk) => { data += chunk; });
req.on('end', () => {
  console.log(`\n${data}`);
  client.close();
});
req.end();

var http = require('http'),
    tls = require('tls');
    const fs = require('fs');

var req = http.request({
    host: '127.0.0.1',
    port: 8888,
    method: 'CONNECT',
    path: 'www.taobao.com:443'
});

req.on('connect', function (res, socket, head) {
    var tlsConnection = tls.connect({
        host: 'www.taobao.com',
        socket: socket,
        ca: [ fs.readFileSync('charles-proxy-ssl-proxying-certificate.pem') ]
    }, function () {
        tlsConnection.write('GET / HTTP/1.1\r\nHost: www.taobao.com\r\n\r\n');
    });

    tlsConnection.on('data', function (data) {
        console.log(data.toString());
    });
});

req.end();

const http2 = require('http2');
const fs = require('fs');
const client = http2.connect('https://www.taobao.com', {
  //ca: fs.readFileSync('localhost-cert.pem')
});
client.on('error', (err) => console.error(err));
client.on('socketError', (err) => console.error(err));

const req = client.request({ ':path': '/' });

req.on('response', (headers, flags) => {
  for (const name in headers) {
    console.log(`${name}: ${headers[name]}`);
  }
});

req.setEncoding('utf8');
let data = '';
req.on('data', (chunk) => { data += chunk; });
req.on('end', () => {
  console.log(`\n${data}`);
  client.close();
});
req.end();