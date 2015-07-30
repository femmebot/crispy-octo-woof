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

To access the value for name property, `person['name']` is the same as `person.name`

You can assign or add a new property: `person.country = 'Brazil'`

To retrieve value, use square brackets, not dot notation:
```
for ( var propName in objectName ) {
  \\ do something
  console.log(prop, ': ', objectName[propName]);
};
``
