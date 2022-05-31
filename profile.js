function change(e){
    e.parentElement.parentElement.querySelector(".name h1").innerText="Roaa Albishri"
}

var reqNum=2;
var connNum=418;

function CancelFriend(e){
  var x = e.parentElement.parentElement
  x.parentElement.parentElement.querySelector('.headother').querySelector('h2')
  .innerText=reqNum=reqNum-1;
  x.remove();
}

function  addFriend(e){ 
  var x = e.parentElement.parentElement
  x.parentElement.parentElement.querySelector('.headother').querySelector('h2')
  .innerText=reqNum=reqNum-1;

  x.parentElement.parentElement.parentElement.querySelector(".friend").querySelector(".headother").querySelector("#num")
  .innerText=connNum=connNum+1;

  x.remove();
}
