# Glo

Inspired by jQuery, Glo is a lightweight library that simplifies the use of Javascript in client-side HTML scripting. Glo's API provides concise methods for HTML document traversal and manipulation, as well as event handling and Ajax requests.

## Using Glo

Simply source the Glo library using the following `<script>` tag in the head of your HTML document and run `webpack` to get started.

`<script type="text/javascript" src="lib/main.js" ></script>`


## Major Features

+ DOM Node Manipulation - The following methods allow for manipulation of DOM node elements:

  - `html(string)`
    * sets the inner HTML of each element to the given string
  - `empty()`
    * removes the inner HTML from each element
  - `append(arguments)`
    * adds arguments to each element
  - `attr(key, value)`
    * stores the key value pair as an attribute for each element
  - `addClass(className)`
    * assigns a new CSS class to each element
  - `removeClass(className)`
    * removes an existing CSS class from each element


+ DOM Node Traversal - The following methods allow for traversal of DOM node elements:

  - `children()`
    * returns all children elements
  - `parent()`
    * returns all parent elements
  - `find(selector)`
    * returns a collection of all elements with the given selector
  - `remove()`
    * removes the HTML of all elements


+ Event Handling - The following methods manage event handlers in DOM node elements

  - `on(action, callback)`
    * adds an event listener and callback to each element
  - `off(action)`
    * removes event listeners stored on each element


+ Ajax Requests

  - `$gl0.extend()`
    * merges JavaScript objects
  - `$gl0.ajax`
    * carries out asynchronous HTTP request

## Demo

To see an example of a project built using Glo, view the Glo demo code. The demo can be run by cloning the Glo repository and running the html file locally.
