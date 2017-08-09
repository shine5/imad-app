var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
'article-one':{
  title:'article one |mary',
  heading:'article one',
  date:'aug 10,2017',
  content:`<p>
                    this is my first article. this is my first article. this is my first article. this is my first article. this is my first article. this is my first article. this is my first article. this is my first article.
                </p>
                <p>
                    this is my first article. this is my first article. this is my first article. this is my first article. this is my first article. this is my first article. this is my first article. this is my first article.
                </p>
                <p>
                    this is my first article. this is my first article. this is my first article. this is my first article. this is my first article. this is my first article. this is my first article. this is my first article.
                </p>`
  
},
'article-two':{
    title:'article two |mary',
  heading:'article two',
  date:'aug 10,2017',
  content:`<p>
                    this is my second article. 
                </p>`},
'article-three':{
    title:'article three |mary',
  heading:'article three',
  date:'aug 10,2017',
  content:`<p>
                    this is my third article. 
                </p>`}
};
var createtemplate=function(data){
var title=data.title;
var heading=data.heading;
var date=data.date;
var content=data.content;

var htmltemplate=`
 <html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width, intial-scale=1"/>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
    <div class="container">
        <div>
            <a href="/">Home</a>
        </div>
        <hr>
        <h3>
            ${heading}
            </h3>
        <div>
            ${date}
        </div>
    <div>
        ${content}
    </div>
    </div>
    </body>
 </html>
`;
return htmltemplate;
};

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articlename',function(req,res){
    //articlename=== article one
    //articles[articlename]=={}content of articles
    var articlename=req.params.articlename;
   res.send(createtemplate(articles[articlename]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
