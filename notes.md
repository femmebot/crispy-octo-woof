# Interactive Web Pages with JavaScript

[Mozilla Developer Network](http://mdn.mozilla.org/)

[Document Object Model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)

`window` is the top-most level & object of the DOM. You can type `window.document` or just `document` in the console to find more information about the document.

Reference
---------

#### Methods

* [document.getElementByID reference](https://developer.mozilla.org/en-US/docs/Web/API/document.getElementById)
* [document.getElementsbyTagName](https://developer.mozilla.org/en-US/docs/Web/API/document.getElementsByTagName)

#### Objects

* [Document](https://developer.mozilla.org/en-US/docs/Web/API/Document)
* [HTMLCollection](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection)

#### Object Literal

To access the value for name property, `person['name']` is the same as `person.name`

You can assign or add a new property: `person.country = 'Brazil'`

To retrieve value, use square brackets, not dot notation:
```
for ( var propName in objectName ) {
  \\ do something
  console.log(propName, ': ', objectName[propName]);
};
```

#### jQuery

[jQuery reference](http://api.jquery.com/)

$.get() to load data from the server using a HTTP GET request

$.get( url [, data ] [, success ] [, dataType ] ) where _url_ is a string containing the URL to which the request is sent; _data_ is a plain object or string that is sent to the server with the request; _success_ is a callback function that is executed if the request succeeds. (Required if `dataType` is provided, but you can use `null` or `jQuery.noop` as a placeholder;_dataType_ is a string indicating the type of data expected from the server. (Default: Intelligent Guess (xml, json, script, or html).)

```
$.get()

```

```
$.getJSON(url, function( data));
```

Above jQuery shorthand is the same as:
```
$.ajax({
  dataType: "json",
  url: url,
  data: data,
  success: success
});
```
[$.getJSON reference](http://api.jquery.com/jQuery.getJSON/)


#### JSON and AJAX
