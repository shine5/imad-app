console.log('Loaded!');

//change the main text to some new text
var element=document.getElementById('main-text');

element.innerHTML="hi everyone";

//move the image
var img=document.getElementById('madi');
img.onclick=function(){
  img.style.marginleft='100px';  
};