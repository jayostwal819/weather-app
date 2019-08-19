//video 43 -> intro to express server
/*
const express = require('express');//express is like a function or object wchich could be used to create other express application

const app = express();//we are creating express applicaton using express

//we will be creating app based on following requests
//app.com
//app.com/help
//app.com/about

//in the below code get is used to get the request
//req is used to get the request from user
//res is used to send the response

app.get('',(req,res)=>{
    res.send("hello express")
})

app.get('/help',(req,res)=>{
    res.send("help page")
})

//challenge
app.get('/about',(req,res)=>{
    res.send("about page")
})

app.get('/weather',(req,res)=>{
    res.send("weather page")
})


//here we are calling the request and processing it on the port no 3000
app.listen(3000,()=>{
    console.log("server started")//this function will never be deisplayed on the browser. it will be diplayed on the terminal to confirm that server is running properly
})
//we are checking the output on the browser by localhost:3000. bcz server is created locally and 3000 is the port we choose
*/

//video 44 -> response in form of html and json
/*
const express = require('express');//express is like a function or object wchich could be used to create other express application

const app = express();//we are creating express applicaton using express

app.get('',(req,res)=>{
    res.send('<h1>Weather</h1>')//html response
})

app.get('/help',(req,res)=>{
    // res.send({ //sending data as object
    //     name : 'andrew',
    //     age: 27
    // })
    res.send([{//sending data as array
        name : 'andrew',
        age: 27
    },{
        name : 'jay',
        age: 27
    }
])
})

app.get('/about',(req,res)=>{
    res.send('<h1>about</h1>')
})

app.get('/weather',(req,res)=>{
    res.send({
        forcast: 'sunny day',
        location: 'gurgaon'
    })
})

app.listen(3000,()=>{
    console.log("server started")//this function will never be deisplayed on the browser. it will be diplayed on the terminal to confirm that server is running properly
})
*/

//video 45 -> fetching the html file on the browser stored in our directory
/*
const path = require('path') //we are using npm module to manipuate the path to reach to our desired directory
const express = require('express');

//console.log(__dirname)//returns our current directory
//console.log(__filename)//returns our currnt file
//console.log(path.join( __dirname,'../public'))//prinitng directory after going in public directory

const app = express();
const publicDirectoryPath = path.join( __dirname,'../public')//it will take us to public directory where our html file is stored

app.use(express.static(publicDirectoryPath)); //use is used to coustomize the server. express.static is used to return our current directory. it will return it to the use object. and use object will fetch the file in browser 
 //here we dont need to explicty load the about,help like we were doing previously. here we are loading the html file of them.
 //index.html has a special meaning in the server so it could be loaded just by writing loacalhost:3000
 //rest of the are accessed using path eg. localhsot/3000/help.html
// we dont need that below code becz app.use is fetching our desired data

app.listen(3000,()=>{
    console.log("server started")
})*/

//video 47 -> making the web pages dynamci

//for making the pages dynamic we are installing the npm hbs
//we are unsing hbs(handlebars) which will be used to make our pages dynamic rather than static
//as we have made index.hbs in views folder so we will delete index.html

/*
const path = require('path') //we are using npm module to manipuate the path to reach to our desired directory
const express = require('express');

const app = express();
const publicDirectoryPath = path.join( __dirname,'../public')//it will take us to public directory where our html file is stored

app.set('view engine','hbs')
app.use(express.static(publicDirectoryPath)); //use is used to coustomize the server. express.static is used to return our current directory. it will return it to the use object. and use object will fetch the file in browser 

app.get('',(req,res)=>{
    res.render('index',{
        title: 'weather app',
        name: 'jay'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title: 'about me',
        name: 'jay'
    })
})

//challenge

app.get('/help',(req,res)=>{
    res.render('help',{
        helpText: 'help requried'
    })
})

app.listen(3000,()=>{
    console.log("server started")
})*/

//video 48 -> coustomizing view directory
//we will rename the views folder as templates and then we will access it
/*
const path = require('path') //we are using npm module to manipuate the path to reach to our desired directory
const express = require('express');

const app = express();

//define the paths for Express engine
const publicDirectoryPath = path.join( __dirname,'../public')//it will take us to public directory where our html file is stored
const viewsPath = path.join(__dirname,'../templates')

//setup handlbars engine and views location
app.set('view engine','hbs')
app.set('views',viewsPath)

//setup static directory to serve
app.use(express.static(publicDirectoryPath)); //use is used to coustomize the server. express.static is used to return our current directory. it will return it to the use object. and use object will fetch the file in browser 

app.get('',(req,res)=>{
    res.render('index',{
        title: 'weather app',
        name: 'jay'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title: 'about me',
        name: 'jay'
    })
})

//challenge

app.get('/help',(req,res)=>{
    res.render('help',{
        helpText: 'help requried'
    })
})

app.listen(3000,()=>{
    console.log("server started")
})*/

//video 49 -> creating partials
//partials are the piece of code which could be used again and again whenever we require
/*
const path = require('path') //we are using npm module to manipuate the path to reach to our desired directory
const express = require('express');
const hbs = require('hbs') //including hbs for partials

const app = express();

//define the paths for Express engine
const publicDirectoryPath = path.join( __dirname,'../public')//it will take us to public directory where our html file is stored
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')//setting path


//setup handlbars engine and views location
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

//setup static directory to serve
app.use(express.static(publicDirectoryPath)); //use is used to coustomize the server. express.static is used to return our current directory. it will return it to the use object. and use object will fetch the file in browser 

app.get('',(req,res)=>{
    res.render('index',{
        title: 'weather app',
        name: 'jay'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title: 'about me',
        name: 'jay'
    })
})

//challenge

app.get('/help',(req,res)=>{
    res.render('help',{
        helpText: 'help requried',
        title: 'about me',
        name: 'jay'
    })
})

app.listen(3000,()=>{
    console.log("server started")
}) */

//video 50 -> 404 pages (when the page dosent exist and user request for that page)
/*
const path = require('path') //we are using npm module to manipuate the path to reach to our desired directory
const express = require('express');
const hbs = require('hbs') //including hbs for partials

const app = express();

//define the paths for Express engine
const publicDirectoryPath = path.join( __dirname,'../public')//it will take us to public directory where our html file is stored
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')//setting path


//setup handlbars engine and views location
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

//setup static directory to serve
app.use(express.static(publicDirectoryPath)); //use is used to coustomize the server. express.static is used to return our current directory. it will return it to the use object. and use object will fetch the file in browser 

app.get('',(req,res)=>{
    res.render('index',{
        title: 'weather app',
        name: 'jay'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title: 'about me',
        name: 'jay'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        helpText: 'help requried',
        title: 'about me',
        name: 'jay'
    })
})

/*
app.get('/help/*',(req,res)=>{
    res.send('No further help available')

})

app.get('*',(req,res)=>{
    res.send('My error page')
})*/

//making the above code dynamic by partials
/*
app.get('/help/*',(req,res)=>{
    res.render('404',{
        title: '404',
        name: 'Jay',
        errorMessage: 'help page not found'
    })

})

app.get('*',(req,res)=>{
    res.render('404',{
        title: '404',
        name: 'Jay',
        errorMessage: 'page not found'
    })
})
app.listen(3000,()=>{
    console.log("server started")
})
*/

//video 54 -> query string
/*
const path = require('path') //we are using npm module to manipuate the path to reach to our desired directory
const express = require('express');
const hbs = require('hbs') //including hbs for partials

const app = express();

//define the paths for Express engine
const publicDirectoryPath = path.join( __dirname,'../public')//it will take us to public directory where our html file is stored
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')//setting path


//setup handlbars engine and views location
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

//setup static directory to serve
app.use(express.static(publicDirectoryPath)); //use is used to coustomize the server. express.static is used to return our current directory. it will return it to the use object. and use object will fetch the file in browser 

app.get('',(req,res)=>{
    res.render('index',{
        title: 'weather app',
        name: 'jay'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title: 'about me',
        name: 'jay'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        helpText: 'help requried',
        title: 'about me',
        name: 'jay'
    })
})

app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({ //here we are using return bcz there cannot be two res.send in same function. so if the above if condtiton is true thsn it will return value from herer and code in function will not be executed
            error: 'You must provide address option'
        })
    }
    res.send({
        forecast: 'it is snowing',
        location: 'jodhpur',
        address: req.query.address
    })
})

//this is new subpart to understand query processing
app.get('/products',(req,res)=>{
    if(!req.query.search){
        return res.send({ //here we are using return bcz there cannot be two res.send in same function. so if the above if condtiton is true thsn it will return value from herer and code in function will not be executed
            error: 'You must provide search option'
        })
    }

    console.log(req.query) //when we will type "http://localhost:3000/products?search=games&rating=5" this command will return value of searcha and rating
    console.log(req.query.search) //this will return only serach value
    res.send({
        products:[]
    })
} )

app.get('/help/*',(req,res)=>{
    res.render('404',{
        title: '404',
        name: 'Jay',
        errorMessage: 'help page not found'
    })

})

app.get('*',(req,res)=>{
    res.render('404',{
        title: '404',
        name: 'Jay',
        errorMessage: 'page not found'
    })
})
app.listen(3000,()=>{
    console.log("server started")
})
*/

//video 55 -> performing above functions using geocode and forecast
/*
const geocode=require('./utils/geocode')
const forecast=require('./utils/forecast')

const path = require('path') //we are using npm module to manipuate the path to reach to our desired directory
const express = require('express');
const hbs = require('hbs') //including hbs for partials

const app = express();

//define the paths for Express engine
const publicDirectoryPath = path.join( __dirname,'../public')//it will take us to public directory where our html file is stored
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')//setting path


//setup handlbars engine and views location
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

//setup static directory to serve
app.use(express.static(publicDirectoryPath)); //use is used to coustomize the server. express.static is used to return our current directory. it will return it to the use object. and use object will fetch the file in browser 

app.get('',(req,res)=>{
    res.render('index',{
        title: 'weather app',
        name: 'jay'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title: 'about me',
        name: 'jay'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        helpText: 'help requried',
        title: 'about me',
        name: 'jay'
    })
})

app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({ //here we are using return bcz there cannot be two res.send in same function. so if the above if condtiton is true thsn it will return value from herer and code in function will not be executed
            error: 'You must provide address option'
        })
    }

    geocode(req.query.address,(error,{longitude,lattitude,location})=>{ //object destructuring
        if(error)
        {
            return res.send({error}); //here we are using return bcz if there will be any sort of error then from here the flow will terminate and wont execute further. it is efficient way of error handling
        }
        
        forecast(longitude, lattitude, (error, forecastdata) => {//we have changed the name from data to forecastdata because it will overwrite beacure forecast and geocode were havinf sme name
            if(error)
            {
                return res.send({error})
            }

            res.send({
                forecast: forecastdata,
                location,
                address: req.query.address
            })
            
        })
    })

    // res.send({
    //     forecast: 'it is snowing',
    //     location: 'jodhpur',
    //     address: req.query.address
    // })
})

//this is new subpart to understand query processing
app.get('/products',(req,res)=>{
    if(!req.query.search){
        return res.send({ //here we are using return bcz there cannot be two res.send in same function. so if the above if condtiton is true thsn it will return value from herer and code in function will not be executed
            error: 'You must provide search option'
        })
    }

    console.log(req.query) //when we will type "http://localhost:3000/products?search=games&rating=5" this command will return value of searcha and rating
    console.log(req.query.search) //this will return only serach value
    res.send({
        products:[]
    })
} )

app.get('/help/*',(req,res)=>{
    res.render('404',{
        title: '404',
        name: 'Jay',
        errorMessage: 'help page not found'
    })

})

app.get('*',(req,res)=>{
    res.render('404',{
        title: '404',
        name: 'Jay',
        errorMessage: 'page not found'
    })
})
app.listen(3000,()=>{
    console.log("server started")
}) */

//video 56 -> providing the default value if the address name was not proper or it is not given

const geocode=require('./utils/geocode')
const forecast=require('./utils/forecast')

const path = require('path') //we are using npm module to manipuate the path to reach to our desired directory
const express = require('express');
const hbs = require('hbs') //including hbs for partials

const app = express();

//define the paths for Express engine
const publicDirectoryPath = path.join( __dirname,'../public')//it will take us to public directory where our html file is stored
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')//setting path


//setup handlbars engine and views location
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

//setup static directory to serve
app.use(express.static(publicDirectoryPath)); //use is used to coustomize the server. express.static is used to return our current directory. it will return it to the use object. and use object will fetch the file in browser 

app.get('',(req,res)=>{
    res.render('index',{
        title: 'weather app',
        name: 'jay'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title: 'about me',
        name: 'jay'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        helpText: 'help requried',
        title: 'about me',
        name: 'jay'
    })
})

app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({ //here we are using return bcz there cannot be two res.send in same function. so if the above if condtiton is true thsn it will return value from herer and code in function will not be executed
            error: 'You must provide address option'
        })
    }

    geocode(req.query.address,(error,{longitude,lattitude,location} = {})=>{ //object destructuring
        if(error)
        {
            return res.send({error}); //here we are using return bcz if there will be any sort of error then from here the flow will terminate and wont execute further. it is efficient way of error handling
        }
        
        forecast(longitude, lattitude, (error, forecastdata) => {//we have changed the name from data to forecastdata because it will overwrite beacure forecast and geocode were havinf sme name
            if(error)
            {
                return res.send({error})
            }

            res.send({
                forecast: forecastdata,
                location,
                address: req.query.address
            })
            
        })
    })

    // res.send({
    //     forecast: 'it is snowing',
    //     location: 'jodhpur',
    //     address: req.query.address
    // })
})

//this is new subpart to understand query processing
app.get('/products',(req,res)=>{
    if(!req.query.search){
        return res.send({ //here we are using return bcz there cannot be two res.send in same function. so if the above if condtiton is true thsn it will return value from herer and code in function will not be executed
            error: 'You must provide search option'
        })
    }

    console.log(req.query) //when we will type "http://localhost:3000/products?search=games&rating=5" this command will return value of searcha and rating
    console.log(req.query.search) //this will return only serach value
    res.send({
        products:[]
    })
} )

app.get('/help/*',(req,res)=>{
    res.render('404',{
        title: '404',
        name: 'Jay',
        errorMessage: 'help page not found'
    })

})

app.get('*',(req,res)=>{
    res.render('404',{
        title: '404',
        name: 'Jay',
        errorMessage: 'page not found'
    })
})
app.listen(3000,()=>{
    console.log("server started")
})
