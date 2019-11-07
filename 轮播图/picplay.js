window.onload = function () {
  var nav = document.querySelectorAll('#dou ul li');
  var pic = document.querySelectorAll('#son ul li');
  var lastOn = document.querySelector('#dou ul li.nowOn');
  var state = '';

  for (var i=0 ; i<nav.length; i++){
    let  j = i;
    nav[i].addEventListener('mouseover',function (e) {
      var nowOn = e.currentTarget;
      //四个块的颜色变动
      if (nowOn.className !== lastOn.className){
        nowOn.classList.add('nowOn');
        lastOn.classList.remove('nowOn');
        lastOn = nowOn;
      }

      //四个图片的变动
      if (state === ''){
        pic[j].classList.add('show');
        state = pic[j];
      }if (state === pic[j]){
        return state;
      }else{
        //浮入
        pic[j].classList.remove('fade');
        pic[j].classList.add('show');

        //浮出
        state.classList.remove('show');
        state.classList.add('fade');
        state = pic[j];
      }


    })
  }
};
