var Body = {  // 이것이 바로 객체
  setColor:function(color){
    document.querySelector('body').style.color = color;
  }, // 객체는 프로퍼티 간에 콤마가 있어야 함!
  setBackgroundColor:function(color){
    document.querySelector('body').style.backgroundColor = color;
  }
}

var Links = { // 객체에는 함수를 넣을 수가 있다! 함수가 자판기라면, 객체는 자판기가 모여있는 방이다. 자판기가 하나일 수도 있고.
  setColor:function(color){
    var alist = document.querySelectorAll('a');
    var i = 0;
    while(i < alist.length){
        alist[i].style.color = color;
        i = i + 1;
    }
  }
}

function nightDayHandler(self){ // 함수
  var target = document.querySelector('body');
  if(self.value === 'night'){
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value = 'day';

    Links.setColor('powderblue');

  } else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = 'night';

    Links.setColor('blue');
  }
}
