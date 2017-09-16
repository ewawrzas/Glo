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
    const $gl0p = $gl0("<div>")
    const $gl0h1 = $gl0("<h1>");

    $gl0p.addClass('title-wrapper')
    $gl0h1.addClass('title')
    $gl0h1.append("GLO")
    $gl0p.append($gl0h1)
    this.$gl0el.append($gl0p)
    let classes = ['list-els1', 'list-els2', 'list-els3', 'list-els4', 'list-els5', 'list-els6']
    let display = ['show', 'hide']
    const $gl0ul = $gl0("<ul>");
    $gl0ul.addClass('group')

    for (let rowIdx = 0; rowIdx < 20; rowIdx++) {
      for (let colIdx = 0; colIdx < 20; colIdx++) {
        let $gl0li = $gl0("<li>");
        $gl0li.addClass(classes[Math.floor(Math.random() * 6)])
        $gl0li.css('display', `${display[Math.floor(Math.random() * 2)]}`)
        $gl0li.css('background-color', `${this.randomColorString()}`)
        $gl0ul.append($gl0li);
      }
    }
    this.$gl0el.append($gl0ul);
  }
}


// timer() {
//   let elem = document.getElementById("bar");
//   let width = 100;
//   let id = setInterval(frame, 500);
//   function frame() {
//       if (width <= 0) {
//           clearInterval(id);
//           $('.gameboard').hide();
//           $('.control-panel-column').hide();
//         $('.gamescreen').html(`<div class=loser-screen'><button class='newGame' type='button' onclick='location.reload();'name='button'>New Game</button> <img src='assets/images/sad.png' width='500px'></div>`)
//         const $button = $("<button>");
//         $button.addClass("newGame");
//       } else {
//           width++;
//           elem.style.width = width + '%';
//       }
//   }
// }

export default View;
