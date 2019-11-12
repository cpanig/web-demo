
function moveUd() {
  if (!document.getElementById) return false;
  if (!document.querySelectorAll) return  false;
  if (!document.getElementById('main')) return  false;
  if (!document.getElementById('tri-1')) return  false;
  if (!document.getElementById('tir-2')) return  false;
  if (!document.querySelectorAll('#nav ul > li > a')) return  false;

  this.curScr = document.getElementById('main');
  this.menus = document.querySelectorAll('#nav > ul > li > a'); //获取所有导航元素
  this.triMove = document.getElementById('tri-1');
  this.reMove = document.getElementById('tri-2');
  this.state = 'info-per';
  this.reMove.style.display = 'none';
  var self = this;
  //获取当前位置
  function where() {
    switch (self.state) {
      case 'info-per' :
        self.curScr.style.top = '0';
        break;
      case "info-edu" :
        self.curScr.style.top = '-100%';
        break;
      case "info-exp" :
        self.curScr.style.top = '-200%';
        break;
      case "info-skill":
        self.curScr.style.top = '-300%';
        break;
      case "info-eva":
        self.curScr.style.top = '-400%';
        break;
    }
  }
  //移动界面
  function toMove(move) {

    switch (move.id) {
      case 'info-per' :
        self.curScr.className = 'move-1';
        self.triMove.style.display = 'block';
        self.reMove.style.display = 'none';
        self.state = 'info-per';
        break;

      case 'info-edu' :
        self.curScr.className = 'move-2';
        self.triMove.style.display = 'block';
        self.reMove.style.display = 'block';
        self.state = 'info-edu';
        break;

      case 'info-exp' :
        self.curScr.className = 'move-3';
        self.triMove.style.display = 'block';
        self.reMove.style.display = 'block';
        self.state = 'info-exp';
        break;

      case 'info-skill':
        self.curScr.className = 'move-4';
        self.triMove.style.display = 'block';
        self.reMove.style.display = 'block';
        self.state = 'info-skill';
        break;

      case 'info-eva' :
        self.curScr.className = 'move-5';
        self.triMove.style.display = 'none';
        self.reMove.style.display = 'block';
        self.state = 'info-eva';
        break;
    }
  }
  function chAni(a,b) {
    a.className = 'hop';
    b.className = 'hop';
  }
  for (var i = 0; i < self.menus.length; i++) {
    var tri1 = document.getElementById('tri-1');
    var tri2 = document.getElementById('tri-2');
    var tri3 = document.getElementById('tri-3');
    var tri4 = document.getElementById('tri-4');
    //点击导航块效果
    self.menus[i].addEventListener('click', function (e) {

      //捕获当前点击的导航块
      var move = document.getElementById('info-' + e.currentTarget.id);
      //导航色块变化
      var nowCk = document.getElementById(e.currentTarget.id);
      var lastCk = document.querySelector('#nav ul li a.nowLoc');
      if (nowCk.id !== lastCk.id) {

        lastCk.classList.remove('nowLoc');
        nowCk.classList.add('nowLoc');
        lastCk = nowCk.id;
        where();
        toMove(move);
          }

      });

    }

    var nowCk = document.querySelectorAll('#nav ul li a');

    //向下移动
    self.triMove.onclick = function () {
    where();
    switch (self.state) {
      case "info-per":
        self.curScr.className = 'goNext';
        self.triMove.style.display = 'block';
        self.reMove.style.display = 'block';
        self.state = 'info-edu';
        break;
      case "info-edu":
        self.curScr.className = 'goNext';
        self.triMove.style.display = 'block';
        self.reMove.style.display = 'block';
        self.state = 'info-exp';
        break;
      case "info-exp":
        self.curScr.className = 'goNext';
        self.triMove.style.display = 'block';
        self.reMove.style.display = 'block';
        self.state = 'info-skill';
        break;
        case "info-skill":
        self.curScr.className = 'goNext';
        self.triMove.style.display = 'none';
        self.reMove.style.display = 'block';
        self.state = 'info-eva';
        break;
    }
      for ( i = 0 ; i<nowCk.length ; i++){
        if ('info-'+nowCk[i].id === self.state){
          nowCk[i].classList.add('nowLoc');
        }else {
          nowCk[i].classList.remove('nowLoc');
        }
      }
  };

    //向下移动
    self.reMove.onclick = function () {
      where();
      switch (self.state) {
        case "info-edu":
          self.curScr.className = 'goLast';
          self.triMove.style.display = 'block';
          self.reMove.style.display = 'none';
          self.state = 'info-per';
          break;
        case "info-exp":
          self.curScr.className = 'goLast';
          self.triMove.style.display = 'block';
          self.reMove.style.display = 'block';
          self.state = 'info-edu';
          break;
        case "info-skill":
          self.curScr.className = 'goLast';
          self.triMove.style.display = 'block';
          self.reMove.style.display = 'block';
          self.state = 'info-exp';
          break;
        case "info-eva":
          self.curScr.className = 'goLast';
          self.triMove.style.display = 'block';
          self.reMove.style.display = 'block';
          self.state = 'info-skill';
      }
      for ( i = 0 ; i<nowCk.length ; i++){
        if ('info-'+nowCk[i].id === self.state){
          nowCk[i].classList.add('nowLoc');
        }else {
          nowCk[i].classList.remove('nowLoc');
        }
      }
    }
}




function addLoadEvent(func) {
  var oldOnload = window.onload;
  if (typeof window.onload != 'function'){
    window.onload = func;
  }else {
    window.onload = function () {
      oldOnload();
      func();
    }
  }
}
addLoadEvent(moveUd());


