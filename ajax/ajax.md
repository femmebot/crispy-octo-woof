# AJAX

How AJAX works:
* Create an XMLHTTP Request Object
* Create a callback function
* Open a request
* Send the request

```
<script>
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    // readyState 4: request finished and response is ready
    if (xhr.readyState === 4) {  
      document.getElementById('ajax').innerHTML = xhr.responseText; // xhr data is inserted into #ajax div
    }
  };
  xhr.open('GET', 'sidebar.html'); // where sidebar.html is the URL for data you want to GET
  xhr.send();
</script>
```

URL encoding:
&: %26
space: +
+: %2b

* [URL encode and decode web site](http://www.url-encode-decode.com/)

#### Same-origin policy
[Same-origin policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy)
[Cross Origin Resource Sharing](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS)

* Web Proxy
* JSONP: JSON with padding
* CORS: Cross-Origin Resource Sharing

#### Resources
* [XMLHttpRequest Object reference](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
* [HTTP Request method reference](https://developer.mozilla.org/en-US/docs/Web/HTTP#HTTP_request_methods)


# AJAX + jQuery
