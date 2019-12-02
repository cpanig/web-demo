window.onload = function () {
  if(!document.querySelectorAll) return false;
  if(!document.querySelector) return false;
  if (!document.querySelectorAll('#dou ul li')) return false;
  let nav = document.querySelectorAll('#dou ul li');

  let state = '';



  for (let i = 0 , len=nav.length ; i < len; i++ ) {


    nav[i].addEventListener('mouseenter',function (e) {
      let nowOn = e.currentTarget;
      if (!document.querySelectorAll('#son ul li'))  return false;
      if (!document.querySelector('#dou ul li.nowOn')) return false;
      let lastOn = document.querySelector('#dou ul li.nowOn');
      let pic = document.querySelectorAll('#son ul li');


      //四个块的颜色变动
      if (nowOn.className !== lastOn.className){
        nowOn.classList.add('nowOn');
        lastOn.classList.remove('nowOn');
        lastOn = nowOn;

      }

      //四个图片的变动
      if (state === ''){
        pic[i].classList.add('show');
        state = pic[i];
      }if (state === pic[i]){
        return state;
      }else{
        //浮入
        pic[i].classList.remove('fade');
        pic[i].classList.add('show');

        //浮出
        state.classList.remove('show');
        state.classList.add('fade');
        state = pic[i];
      }


    })
  }
};
