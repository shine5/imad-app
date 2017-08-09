console.log('Loaded!');

//change the main text to some new text
var element=document.getElementById('main-text');

element.innerHTML="hi everyone";

//move the image
var img=document.getElementById('madi');
 var marginLeft=0;
 
 var moveRight=function(){
     
     marginLeft=marginLeft + 1;
     img.style.marginLeft=marginLeft+ 'px';
 };
  img.onclick=function(){
  var interval=setInterval(moveRight,50);  
};