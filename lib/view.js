class View {
  constructor($gl0el) {
    this.$gl0el = $gl0el
    this.setUpBoard();
  }

  setUpBoard() {
    debugger
    const $gl0ul = $gl0("<ul>");
    $gl0ul.addClass('group')

    for (let rowIdx = 0; rowIdx < 8; rowIdx++) {
      for (let colIdx = 0; colIdx < 8; colIdx++) {
        let $gl0li = $gl0("<li>");
        $gl0ul.append($gl0li);
      }
    }
    this.$gl0el.append($gl0ul);
  }

}

export default View;
