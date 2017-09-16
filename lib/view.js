class View {
  constructor($gl0el) {
    this.$gl0el = $gl0el
    this.setUpBoard();
    this.randomColorString = this.randomColorString.bind(this)
  }

  randomColorString(){
    debugger
    return '#' + Math.random().toString(16).substr(-6);
  };


  setUpBoard() {
    let classes = ['list-els1', 'list-els2', 'list-els3', 'list-els4', 'list-els5', 'list-els6']
    const $gl0ul = $gl0("<ul>");
    $gl0ul.addClass('group')

    for (let rowIdx = 0; rowIdx < 20; rowIdx++) {
      for (let colIdx = 0; colIdx < 20; colIdx++) {
        let $gl0li = $gl0("<li>");
        $gl0li.addClass(classes[Math.floor(Math.random() * 6)])
        $gl0li.css('background-color', `${this.randomColorString()}`)
        $gl0ul.append($gl0li);
      }
    }
    this.$gl0el.append($gl0ul);
  }
}

export default View;
