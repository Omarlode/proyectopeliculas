var time = 2000;
let content = document.querySelector(".banner-imgBox2");
let switchBtn = document.querySelector(".banner-imgBox-div");
switchBtn.children[0].classList.add("on2");
let index = 0;
let x = 0;
function marginLeft(right) {
  if (right) {
    switchBtn.children[index].classList.remove("on2");
    if (index == switchBtn.children.length - 1) {
      index = 0;
      content.innerHTML += content.innerHTML;
      x++;
    } else {
      index++;
      x++;
    }
    switchBtn.children[index].classList.add("on2");
    content.style.marginLeft = x * -1530 + "px";
  } else {
    switchBtn.children[index].classList.remove("on2");
    if (index == 0) {
      index = switchBtn.children.length - 1;
      if (x == 0) {
        x = 0;
      } else {
        x--;
      }
    } else {
      index--;
      x--;
    }
    switchBtn.children[index].classList.add("on2");
    content.style.marginLeft = x * -1530 + "px";
  }
}

var interval = setInterval(() => {
  marginLeft(true);
}, time);

let container = document.querySelector(".banner-imgBox");
// Limpia el temporizador cuando pasa el mouse
container.onmouseover = function () {
  clearInterval(interval);
};
// Establecer el temporizador cuando el mouse se aleja
container.onmouseout = function () {
  // Limpia el temporizador primero
  clearInterval(interval);
  // Desliza hacia la derecha e inicia el temporizador
  // marginLeft(true)
  interval = setInterval(() => {
    marginLeft(true);
  }, time);
};
