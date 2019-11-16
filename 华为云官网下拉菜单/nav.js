window.onload = function () {
  if (!document.querySelectorAll) return false;
  if (!document.getElementById) return false;
  var nav = document.querySelectorAll('.menu');
  var menuEx = document.getElementById('menu-ex');
  var menuIn = document.querySelectorAll('.nav-left > ul > li');
  let lastOn = '';
  var state = '';
  var self = this;
  for (var i = 0,len = nav.length;i<len ; i++){
    //鼠标移入时打开
    //let  j = i;
    nav[i].addEventListener('mouseenter',function (e) {

      if (!document.getElementById('info-'+e.currentTarget.id)) return false;
      var nowOn = document.getElementById('info-'+e.currentTarget.id);

      //var nowTri = nav[j].children[1];

      //if (nowTri !== nav[j].children[1]) return  false;

      if (lastOn === '') {
        menuEx.style.opacity = '1';
        menuEx.style.height = '600px';
        menuEx.style.transition = 'height 1s ease-out';
        nowOn.style.opacity = '1';
        lastOn = nowOn;
        //nowTri.className = 'tri-up';
      }if (nowOn.id === 'info-nav-2' || nowOn.id ==='info-nav-7'||nowOn.id ==='info-nav-8'){
        menuEx.style.opacity = '0';
      }else{
        menuEx.style.height = '600px';
        menuEx.style.opacity = '1';
        lastOn.style.opacity = '0';
        nowOn.style.opacity = '1';
        lastOn = nowOn;
      }
    });

    //鼠标移开下拉菜单时时收起
    menuEx.addEventListener('mouseleave',function (e) {
      if (!lastOn) return false;
      lastOn.style.opacity = '0';
      menuEx.style.height = '0';
      menuEx.style.transition ='height 1s ease-out';
      lastOn = '';



    });

  }

  for (i = 0,len = menuIn.length;i<len ; i++){
    //列表内移动
    let  j = i;
    menuIn[i].addEventListener('mouseenter',function (e) {
      if (!document.querySelector('.nowLoc')) return  false;
      if (!document.querySelectorAll('.nav-right'))  return  false;
      let lastOn = document.querySelector('.nowLoc');
      var nowOn = e.currentTarget;
      var nowLoc = document.querySelectorAll('.nav-right');

      if (nowOn.firstChild.className !== 'nowLoc'){
        nowOn.firstChild.className = 'nowLoc';
        lastOn.classList.remove('nowLoc');
      }
      //该方法前提：选项和内容框的顺序要一致
      if (state === ''){
        nowLoc[j].style.display = 'block';
        state = nowLoc[j];
      }if (state === nowLoc[j]){
        return state;
      }else {
        nowLoc[j].style.display = 'block';
        state.style.display = 'none';
        console.log(nowLoc[j].id);
        state = nowLoc[j];
      }


    });
  }
};
