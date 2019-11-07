window.onload = function () {
  var btn = document.querySelectorAll('.child');
  var picWall = document.querySelector('#wife ul');
  var state2 = 'p1';

  btn[1].addEventListener('click',function () {

    switch (state2) {
      case "p1":  picWall.style.left='0';
        picWall.className = 'goNext';
        state2 = 'p2';
        break;

      case "p2":  picWall.style.left='-100%';
        picWall.className = 'goNext';
        state2 = 'p3';
        break;

      case "p3": picWall.style.left = '-200%';
        picWall.className = 'goNext';
        state2 = 'p4';
        break;
    }
  });

  btn[0].addEventListener('click',function (e) {

    switch (state2) {
      case "p4":  picWall.style.left = '-300%';
        picWall.className = 'goLast';
        state2 = 'p3';
        break;

      case "p3":  picWall.style.left = '-200%';
        picWall.className = 'goLast';
        state2 = 'p2';
        break;

      case "p2":  picWall.style.left = '-100%';
        picWall.className = 'goLast';
        state2 = 'p1';
        break;
    }
  })

};
