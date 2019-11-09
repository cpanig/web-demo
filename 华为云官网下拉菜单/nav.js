window.onload = function () {
  if (!document.querySelectorAll) return false;
  if (!document.getElementById) return false;
  var nav = document.querySelectorAll('.menu');
  var menuEx = document.getElementById('menu-ex');
  this.lastOn = '';

  var self = this;
  for (var i = 0 ; i<nav.length ; i++){
    //鼠标移入时打开
      let  j = i;
    nav[i].addEventListener('mouseenter',function (e) {

      if (!document.getElementById('info-'+e.currentTarget.id)) return false;
       var nowOn = document.getElementById('info-'+e.currentTarget.id);

      //var nowTri = nav[j].children[1];

      //if (nowTri !== nav[j].children[1]) return  false;

        if (self.lastOn === '') {
          menuEx.style.opacity = '1';
          menuEx.style.height = '400px';
          menuEx.style.transition = 'height 1s ease-out';
          nowOn.style.opacity = '1';
          self.lastOn = nowOn;
          //nowTri.className = 'tri-up';
        }if (nowOn.id === 'info-nav-2' ||nowOn.id ==='info-nav-7'||nowOn.id ==='info-nav-8'){
          menuEx.style.opacity = '0';
        }
        else{
          menuEx.style.opacity = '1';
          lastOn.style.display = '0';
           nowOn.style.display = '1';
           self.lastOn = nowOn;
           console.log(nowOn.id);
      }
    });

    //鼠标移开时收起
    menuEx.addEventListener('mouseleave',function () {
          if (!self.lastOn) return false;

         self.lastOn.style.opacity = '0';
         menuEx.style.height = '0';
         menuEx.style.transition ='height 1s ease-out';
         self.lastOn = '';
    }) ;
  }
};
