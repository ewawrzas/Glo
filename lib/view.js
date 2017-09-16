class View {
  constructor($gl0el) {
    this.$gl0el = $gl0el
    this.setUpBoard();
    this.randomColorString = this.randomColorString.bind(this);
    this.setUpButtons = this.setUpButtons.bind(this);
    // this.installClickHandlers = this.installClickHandlers.bind(this);
    this.demo1 = this.demo1.bind(this);
    this.demo2 = this.demo2.bind(this);
    this.demo3 = this.demo3.bind(this);
  }

  randomColorString(){
    return '#' + Math.random().toString(16).substr(-6);
  };

  setUpBoard() {
    let classes = ['list-els1', 'list-els2', 'list-els3', 'list-els4', 'list-els5', 'list-els6']
    let display = ['show', 'hide']
    const $gl0ul = $gl0("<ul>");
    $gl0ul.addClass('group-initial')

    for (let rowIdx = 0; rowIdx < 10; rowIdx++) {
      for (let colIdx = 0; colIdx < 20; colIdx++) {
        let $gl0li = $gl0("<li>");
        $gl0li.addClass(classes[Math.floor(Math.random() * 6)])
        $gl0li.css('background-color', `${this.randomColorString()}`)
        $gl0ul.append($gl0li);
      }
    }
    const $gl0div1 = $gl0("<div>");
    const $gl0div2 = $gl0("<div>");
    const $gl0h1 = $gl0("<h1>");
    $gl0div1.addClass('title-wrapper')
    $gl0h1.addClass('title')
    $gl0div2.addClass('list-wrapper')

    $gl0h1.append("GLO")
    $gl0div2.append($gl0ul)
    $gl0div1.append($gl0h1)
    this.$gl0el.append($gl0div1)
    this.$gl0el.append($gl0div2)
    this.setUpButtons($gl0ul)
  }

  setUpButtons() {
    const $gl0div3 = $gl0("<div>");
    $gl0div3.addClass('button-wrapper');

    const $gl0button1 = $gl0(`<button>`);
    const $gl0button2 = $gl0(`<button>`);
    const $gl0button3 = $gl0(`<button>`);
    $gl0button1.html('DEMO 1')
    $gl0button2.html('DEMO 2')
    $gl0button3.html('DEMO 3')

    $gl0div3.append($gl0button1).append($gl0button2).append($gl0button3);
    this.$gl0el.append($gl0div3);

  }


  demo1() {
    const $gl0ul = this.$gl0el.find('ul');
    debugger
    $gl0ul.removeClass('group-initial')
    $gl0ul.addClass('group1')
  }

  demo2() {
    console.log('demo2')
  }

  demo3() {
    console.log('demo3')
  }

}


export default View;
