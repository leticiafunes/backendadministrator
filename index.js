const express = require('express');

const ejs = require('ejs');
const { path } = require('express/lib/application');

const app = express();
app.use(express.static(__dirname + '/public'));

app.use('/js', express.static(__dirname + '/public'));
app.use('/styles', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.get('/', (req,res)=>{
    res.render('index', {collection:[
        {username: 'user1', usermessage: 'message 1', title: 'title 1', videourl: 'v url 1', imgurl: 'i url 1', gifurl: 'g url 1'}, 
        {username: 'user2', usermessage: 'message 2', title: 'title 2', videourl: 'v url 2', imgurl: 'i url 2', gifurl: 'g url 2'}, 
        {username: 'user4', usermessage: 'message 4', title: 'title 4', videourl: 'v url 4', imgurl: 'i url 4', gifurl: 'g url 4'}, 
        {username: 'user3', usermessage: 'message 3', title: 'title 3', videourl: 'v url 3', imgurl: 'i url 3', gifurl: 'g url 3'}
    ]});


});



app.get('/login', (req,res)=>{
 res.render('login')
});

app.post('/login', (req,res)=>{
    res.render('login')
   });

app.get('/news', (req,res)=>{
    res.render('news')});


app.get('/mostrarNews', (req,res)=>{
            const data = req.params['news'];
            console.log (data);
           ;   

        
        
        });
        




app.listen(3005, ()=>{
    console.log('Server running on port 3005');
});