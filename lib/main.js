
import DOMNodeCollection from './dom_node_collection';
import View from './view'

const queue = [];
let docReady = false;

const $gl0 = function (arg) {
  if (arg instanceof HTMLElement) {
    return new DOMNodeCollection([arg]);
  } else if (typeof(arg) === 'function') {
    
    return docReadyCallback(arg);
  } else if (typeof(arg) === "string"){
    if (shouldCreateNewElement(arg)) {
      const elTag = parseElementTag(arg);
      const elInnerHTML = parseInnerHTML(arg, elTag.length)
      let newEl = document.createElement(elTag);
      newEl.innerHTML = elInnerHTML;
      return new DOMNodeCollection([newEl])
    } else {
    return getNodes(arg);
    }
  }
};

window.$gl0 = $gl0;

$gl0( function () {
  const rootEl = $gl0('.main');
  new View(rootEl);
});


document.addEventListener('DOMContentLoaded', function() {
  docReady = true;
  
  queue.forEach(cb => cb() );
});


function shouldCreateNewElement(string) {
  return (string[0] === "<" && string.slice(-1) === ">") ? true : false;
}

function parseElementTag(string) {
  let result = ""
  for ( let i = 1; i < string.length; i++ ) {
    if (string[i] === ">") break;
      result += string[i]
  }
  return result
}

function parseInnerHTML(string, tagLength) {
  return string.slice(tagLength + 2, string.length - tagLength - 3);
}

 function docReadyCallback(func) {
    if (!docReady) {
      queue.push(func);
    } else {
      func();
    }
  }

  function getNodes(selector) {
    const nodes = document.querySelectorAll(selector);
    const nodesArr = Array.from(nodes);
    return new DOMNodeCollection(nodesArr);
  };

  $gl0.extend = function (firstObj, ...otherObjs) {
      return Object.assign({}, firstObj, ...otherObjs);
    };

  $gl0.ajax = function (options) {
    const defaults = {
      success: () => {},
      error: () => {},
      url: '',
      method: 'get',
      data: "",
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
    };

    const finalOptions = $gl0.extend(defaults, options);
      return fetch(finalOptions.url, {
        method: finalOptions.method
      }).then((response) => response.json()).then(response => response).then(response => console.log(response))
        .catch((err) => err);
    };
