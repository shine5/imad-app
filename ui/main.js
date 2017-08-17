//counter code
var button=document.getElementById('counter');
//var counter=0;
button.onclick = function(){
//create a request   
var request= new XMLHttpRequest();

//capture the response and store it in a variable
  request.onreadystatechange=function(){
   if (readystate===XMLHttpRequest.DONE){
       //take some action
       if(request.status===200){
           var counter=request.responseText;
           //counter=counter+1;
           console.log(request.responseText);
           var span=document.getElementById('count');
           span.innerHTML=counter.toString();
       }
   } 
   //no action   
  };
  //make a request
  request.open('GET','http://fathimamaryece.imad.hasura-app.io/counter',true);
  request.send(null);
};