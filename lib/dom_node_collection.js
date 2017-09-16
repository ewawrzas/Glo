class DOMNodeCollection {
  constructor(elements) {
    this.elements = elements;
  }

  html(string) {
    if (string) {
      this.elements.forEach((el) => {
        el.innerHTML = string;
      });
    } else {
      return this.elements[0].innerHTML;
    }
  }

  empty() {
    this.elements.forEach((el) => {
      el.innerHTML = '';
    });
  }

  append (args) {
    if (typeof args === 'string') {
      this.elements.forEach((el) => {
        el.innerHTML += args;
      });
    } else if (args instanceof HTMLElement) {
      this.elements.forEach((el) => {
        el.innerHTML += args.outerHTML;
      })
    } else {
      this.elements.forEach( (el) => {
        args.elements.forEach( (child) => {
          el.innerHTML += child.outerHTML;
        })
      })
      }
      return this;
    };


  attr(key, value) {
    if (value) {
      this.elements.forEach((el) => {
        el.setAttribute(key, value);
      });
    } else {
      return this.elements[0].getAttribute(key);
    }
  }

  addClass(className) {
    this.elements.forEach((el) => {
      el.classList.add(className);
    });
  }

  removeClass(className) {
    this.elements.forEach((el) => {
      el.classList.remove(className);
    });
  }

  children() {
    let allChildren = [];

    this.elements.forEach((el) => {
      const childrenArr = Array.from(el.children);
      allChildren = allChildren.concat(childrenArr);
    });
    return new DOMNodeCollection(allChildren);
  }

  parent() {
    return new DOMNodeCollection(this.elements[0].parentNode);
  }

  find(selector) {
    const found = [];
    let finalFound = [];

    this.elements.forEach((el) => {
      const queryString = el.localName + ' ' + selector;
      const foundArr = Array.from(document.querySelectorAll(queryString));
      finalFound = found.concat(foundArr);
    });

    return new DOMNodeCollection(finalFound);
  }

  remove() {
    this.elements.forEach((el) => {
      el.remove();
    });
  }

  css(key, value) {
    return this.attr('key', `${key}: ${value}`);
  }

  on(action, callback) {
    this.elements.forEach((el) => {
      el.addEventListener(action, callback);
      const actionKey = action;
      if (typeof el[actionKey] === 'undefined') {
        el[actionKey] = [];
      }
      el[actionKey].push(callback)
    });
  }

  off(action) {
    this.elements.forEach((el) => {
      const actionKey = action;
      if (el[actionKey]) {
        el[actionKey].forEach(callback => {
          el.removeEventListener(action, callback);
        });
      }
      el[actionKey] = [];
    });
  }


}

export default DOMNodeCollection;
