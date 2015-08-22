#Build a Dynamic SIte with Node.js

To create a simple web server, see example on [Nodejs.org](https://nodejs.org)
```
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
```
In the above example, you can view the output at the local IP address: http://127.0.0.1:1337/ or localhost:1337

To kill running processes in Node, first, find the process
```
ps -aux
```
Then kill the process
```
kill -9 <process id/PID from ps>
```
Using `-9` kills the process immediately and doesn't do any cleanup.
Refer to [Killing Processes](https://teamtreehouse.com/library/console-foundations/processes/killing-processes) for more information.



Node.js APIs used:
* [http.createServer](https://nodejs.org/api/http.html#http_http_createserver_requestlistener)
* [response.writeHead](https://nodejs.org/api/http.html#http_response_writehead_statuscode_statusmessage_headers)
* [response.write](https://nodejs.org/api/http.html#http_response_write_chunk_encoding_callback)
* [response.end](https://nodejs.org/api/http.html#http_response_end_data_encoding_callback)
[https://nodejs.org/api/timers.html#timers_setinterval_callback_delay_arg](https://nodejs.org/api/timers.html#timers_setinterval_callback_delay_arg)
* [request.url](https://nodejs.org/api/http.html#http_message_url)


Reading files from the file system:
* [File System](https://nodejs.org/api/fs.html)
* [fs.readFile](https://nodejs.org/api/fs.html#fs_fs_readfile_filename_options_callback)
* [fs.readFileSync](https://nodejs.org/api/fs.html#fs_fs_readfilesync_filename_options)
* [response.write](https://nodejs.org/api/http.html#http_response_write_chunk_encoding_callback)
* [require](https://nodejs.org/api/modules.html#modules_modules)
* [module.exports](https://nodejs.org/api/modules.html#modules_module_exports)

Working with GET and POST body
* [message.method](https://nodejs.org/api/http.html#http_message_method)
* [querystring.parse()](https://nodejs.org/api/querystring.html#querystring_querystring_parse_str_sep_eq_options)

Redirection
* [HTTP Headers](http://en.wikipedia.org/wiki/List_of_HTTP_header_fields)
* [Redirection Status Codes](http://en.wikipedia.org/wiki/List_of_HTTP_status_codes#3xx_Redirection)
* [Media Types](https://www.iana.org/assignments/media-types/media-types.xhtml)
