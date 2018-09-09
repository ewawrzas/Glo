/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _dom_node_collection = __webpack_require__(1);

var _dom_node_collection2 = _interopRequireDefault(_dom_node_collection);

var _view = __webpack_require__(2);

var _view2 = _interopRequireDefault(_view);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var queue = [];
var docReady = false;

var $gl0 = function $gl0(arg) {
  if (arg instanceof HTMLElement) {
    return new _dom_node_collection2.default([arg]);
  } else if (typeof arg === 'function') {

    return docReadyCallback(arg);
  } else if (typeof arg === "string") {
    if (shouldCreateNewElement(arg)) {
      var elTag = parseElementTag(arg);
      var elInnerHTML = parseInnerHTML(arg, elTag.length);
      var newEl = document.createElement(elTag);
      newEl.innerHTML = elInnerHTML;
      return new _dom_node_collection2.default([newEl]);
    } else {
      return getNodes(arg);
    }
  }
};

window.$gl0 = $gl0;

$gl0(function () {
  var rootEl = $gl0('.main');
  new _view2.default(rootEl);
});

document.addEventListener('DOMContentLoaded', function () {
  docReady = true;

  queue.forEach(function (cb) {
    return cb();
  });
});

function shouldCreateNewElement(string) {
  return string[0] === "<" && string.slice(-1) === ">" ? true : false;
}

function parseElementTag(string) {
  var result = "";
  for (var i = 1; i < string.length; i++) {
    if (string[i] === ">") break;
    result += string[i];
  }
  return result;
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
  var nodes = document.querySelectorAll(selector);
  var nodesArr = Array.from(nodes);
  return new _dom_node_collection2.default(nodesArr);
};

$gl0.extend = function (firstObj) {
  for (var _len = arguments.length, otherObjs = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    otherObjs[_key - 1] = arguments[_key];
  }

  return Object.assign.apply(Object, [{}, firstObj].concat(otherObjs));
};

$gl0.ajax = function (options) {
  var defaults = {
    success: function success() {},
    error: function error() {},
    url: '',
    method: 'get',
    data: "",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
  };

  var finalOptions = $gl0.extend(defaults, options);
  return fetch(finalOptions.url, {
    method: finalOptions.method
  }).then(function (response) {
    return response.json();
  }).then(function (response) {
    return response;
  }).then(function (response) {
    return console.log(response);
  }).catch(function (err) {
    return err;
  });
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DOMNodeCollection = function () {
  function DOMNodeCollection(elements) {
    _classCallCheck(this, DOMNodeCollection);

    this.elements = elements;
  }

  _createClass(DOMNodeCollection, [{
    key: 'html',
    value: function html(string) {
      if (string) {
        this.elements.forEach(function (el) {
          el.innerHTML = string;
        });
      } else {
        return this.elements[0].innerHTML;
      }
    }
  }, {
    key: 'empty',
    value: function empty() {
      this.elements.forEach(function (el) {
        el.innerHTML = '';
      });
    }
  }, {
    key: 'append',
    value: function append(args) {
      if (typeof args === 'string') {
        this.elements.forEach(function (el) {
          el.innerHTML += args;
        });
      } else if (args instanceof HTMLElement) {
        this.elements.forEach(function (el) {
          el.innerHTML += args.outerHTML;
        });
      } else {
        this.elements.forEach(function (el) {
          args.elements.forEach(function (child) {
            el.innerHTML += child.outerHTML;
          });
        });
      }
      return this;
    }
  }, {
    key: 'attr',
    value: function attr(key, value) {
      if (value) {
        this.elements.forEach(function (el) {
          el.setAttribute(key, value);
        });
      } else {
        return this.elements[0].getAttribute(key);
      }
    }
  }, {
    key: 'addClass',
    value: function addClass(className) {
      this.elements.forEach(function (el) {
        el.classList.add(className);
      });
    }
  }, {
    key: 'removeClass',
    value: function removeClass(className) {
      this.elements.forEach(function (el) {
        el.classList.remove(className);
      });
    }
  }, {
    key: 'children',
    value: function children() {
      var allChildren = [];

      this.elements.forEach(function (el) {
        var childrenArr = Array.from(el.children);
        allChildren = allChildren.concat(childrenArr);
      });
      return new DOMNodeCollection(allChildren);
    }
  }, {
    key: 'parent',
    value: function parent() {
      return new DOMNodeCollection(this.elements[0].parentNode);
    }
  }, {
    key: 'find',
    value: function find(selector) {
      var found = [];
      var finalFound = [];

      this.elements.forEach(function (el) {
        var queryString = el.localName + ' ' + selector;
        var foundArr = Array.from(document.querySelectorAll(queryString));
        finalFound = found.concat(foundArr);
      });

      return new DOMNodeCollection(finalFound);
    }
  }, {
    key: 'remove',
    value: function remove() {
      this.elements.forEach(function (el) {
        el.remove();
      });
    }
  }, {
    key: 'css',
    value: function css(style, value) {
      return this.attr('style', style + ': ' + value);
    }
  }, {
    key: 'on',
    value: function on(action, callback) {
      this.elements.forEach(function (el) {

        el.addEventListener(action, callback);
        var actionQueue = 'callback-' + action.toLowerCase();
        if (!el[actionQueue]) {
          el[actionQueue] = [];
        } else {
          el[action].push(callback);
        }
      });
    }
  }, {
    key: 'off',
    value: function off(action) {
      this.elements.forEach(function (el) {
        var actionKey = action;
        if (el[actionKey]) {
          el[actionKey].forEach(function (callback) {
            el.removeEventListener(action, callback);
          });
        }
        el[actionKey] = [];
      });
    }
  }]);

  return DOMNodeCollection;
}();

exports.default = DOMNodeCollection;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var View = function () {
  function View($gl0el) {
    _classCallCheck(this, View);

    this.$gl0el = $gl0el;
    this.setUpButtons();
    this.startScreen();
    this.randomColorString = this.randomColorString.bind(this);
    this.setUpButtons = this.setUpButtons.bind(this);
    this.startScreen = this.startScreen.bind(this);

    this.demo1 = this.demo1.bind(this);
    this.demo2 = this.demo2.bind(this);
    this.demo3 = this.demo3.bind(this);
    this.demo4 = this.demo4.bind(this);
    this.changeColors = this.changeColors.bind(this);
    window.addEventListener("keydown", this.handleKeyEvent.bind(this));
  }

  _createClass(View, [{
    key: "handleKeyEvent",
    value: function handleKeyEvent(event) {
      event.preventDefault();

      switch (event.keyCode) {
        case 37:
          this.demo2();
          break;
        case 38:
          this.demo1();
          break;
        case 39:
          this.demo3();
          break;
        case 40:
          this.demo4();
          break;
        case 16:
          this.changeColors();
          break;
        case 27:
          this.setUpBoard();
          this.setUpButtons();
          break;

      }
    }
  }, {
    key: "randomColorString",
    value: function randomColorString() {
      return '#' + Math.random().toString(16).substr(-6);
    }
  }, {
    key: "setUpBoard",
    value: function setUpBoard() {
      this.$gl0el.empty();
      var $gl0div1 = $gl0("<div>");
      var $gl0h1 = $gl0("<h1>");

      $gl0div1.addClass('title-wrapper');
      $gl0h1.addClass('title');

      $gl0h1.append("GLO");
      $gl0div1.append($gl0h1);
      this.$gl0el.append($gl0div1);
    }
  }, {
    key: "startScreen",
    value: function startScreen() {
      this.$gl0el.empty();
      var $gl0wrapper = $gl0("<div>");
      var $gl0Button1 = $gl0("<button>");
      var $gl0Button2 = $gl0("<button>");
      $gl0wrapper.addClass('button-wrapper');
      $gl0Button1.append("Welcome to GLO!");
      $gl0Button2.append("Use the arrow keys to see what GLO can do!");
      $gl0wrapper.append($gl0Button1);
      $gl0wrapper.append($gl0Button2);
      this.$gl0el.append($gl0wrapper);
    }
  }, {
    key: "setUpButtons",
    value: function setUpButtons() {
      var $gl0div3 = $gl0("<div>");
      this.$gl0el.append($gl0div3);
    }
  }, {
    key: "demo1",
    value: function demo1() {
      this.$gl0el.empty();
      this.setUpBoard();
      this.setUpButtons();
      var classes = ['list-els1', 'list-els2', 'list-els3', 'list-els4', 'list-els5', 'list-els6'];
      var $gl0ul1 = $gl0("<ul>");
      $gl0ul1.addClass('group1');

      for (var rowIdx = 0; rowIdx < 15; rowIdx++) {
        for (var colIdx = 0; colIdx < 24; colIdx++) {
          var $gl0li = $gl0("<li>");
          $gl0li.addClass(classes[Math.floor(Math.random() * 6)]);
          $gl0li.css('background-color', "" + this.randomColorString());
          $gl0ul1.append($gl0li);
        }
      }
      this.$gl0el.append($gl0ul1);
    }
  }, {
    key: "demo2",
    value: function demo2() {
      this.$gl0el.empty();
      this.setUpBoard();
      this.setUpButtons();
      var $gl0ul2 = $gl0("<ul>");
      $gl0ul2.addClass('group2');

      for (var rowIdx = 0; rowIdx < 10; rowIdx++) {
        for (var colIdx = 0; colIdx < 20; colIdx++) {
          var $gl0li = $gl0("<li>");
          $gl0li.addClass('bounceIn');
          $gl0ul2.append($gl0li);
        }
      }
      this.$gl0el.append($gl0ul2);
    }
  }, {
    key: "demo3",
    value: function demo3() {
      this.$gl0el.empty();
      this.setUpBoard();
      this.setUpButtons();
      var $gl0title = this.$gl0el.find('h1');
      var $gl0titleDiv = $gl0('<div>');
      $gl0titleDiv.addClass('title-wrapper');

      var $gl0ul3 = $gl0("<ul>");
      $gl0ul3.addClass('group3');

      for (var rowIdx = 0; rowIdx < 6; rowIdx++) {
        for (var colIdx = 0; colIdx < 10; colIdx++) {
          var $gl0li = $gl0("<li>");
          $gl0li.addClass('tada');
          $gl0ul3.append($gl0li);
        }
      }
      this.$gl0el.append($gl0ul3);
    }
  }, {
    key: "demo4",
    value: function demo4() {
      this.$gl0el.empty();
      this.setUpBoard();
      this.setUpButtons();
      var $gl0title = $gl0('h1');
      $gl0title.addClass('tada');
    }
  }, {
    key: "changeColors",
    value: function changeColors() {
      var $gl0title = $gl0('h1');
      $gl0title.css('color', "" + this.randomColorString());
    }
  }]);

  return View;
}();

exports.default = View;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map