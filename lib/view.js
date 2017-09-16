class View {
  constructor($gl0el) {
    this.$gl0el = $gl0el
    this.setUpBoard(this.$gl0el);
    this.randomColorString = this.randomColorString.bind(this)
    // this.slowAlert = this.slowAlert.bind(this)
    // this.delayedAlert = this.delayedAlert.bind(this)
  }

  randomColorString(){
    return '#' + Math.random().toString(16).substr(-6);
  };


  setUpBoard($gl0el) {
    let classes = ['list-els1', 'list-els2', 'list-els3', 'list-els4', 'list-els5', 'list-els6']
    let display = ['show', 'hide']
    const $gl0ul = $gl0("<ul>");
    $gl0ul.addClass('group')

    for (let rowIdx = 0; rowIdx < 10; rowIdx++) {
      for (let colIdx = 0; colIdx < 20; colIdx++) {
        let $gl0li = $gl0("<li>");
        $gl0li.addClass(classes[Math.floor(Math.random() * 6)])
        $gl0li.css('background-color', `${this.randomColorString()}`)
        $gl0ul.append($gl0li);
      }
    }
    const $gl0div1 = $gl0("<div>")
    const $gl0div2 = $gl0("<div>")
    const $gl0h1 = $gl0("<h1>");
    $gl0div1.addClass('title-wrapper')
    $gl0h1.addClass('title')
    $gl0div2.addClass('list-wrapper')

    $gl0h1.append("GLO")
    $gl0div2.append($gl0ul)
    $gl0div1.append($gl0h1)
    this.$gl0el.append($gl0div1)
    this.$gl0el.append($gl0div2)
  }
}

let timeoutID;

 function delayedAlert() {
  timeoutID = window.setTimeout(slowAlert, 3000);
}

function slowAlert() {
  console.log('what')
}

function clearAlert() {
  window.clearTimeout(timeoutID);
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
