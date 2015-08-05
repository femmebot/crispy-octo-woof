# AJAX

How AJAX works:

1. Create an XMLHTTP Request Object

2. Create a callback function

3. Open a request

4. Send the request

```
<script>
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    // readyState 4: request finished and response is ready
    if (xhr.readyState === 4) {  
      document.getElementById('ajax').innerHTML = xhr.responseText; // xhr data is injected into #ajax div
    }
  };
  xhr.open('GET', 'sidebar.html'); // where sidebar.html is the URL for data you want to GET
  xhr.send();
</script>
```

#### Resources
* [XMLHttpRequest Object reference](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
* [HTTP Request method reference](https://developer.mozilla.org/en-US/docs/Web/HTTP#HTTP_request_methods)
* [URL encode and decode web site](http://www.url-encode-decode.com/)
