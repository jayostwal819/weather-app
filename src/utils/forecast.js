//video 37 -> challenge -> execute forecast using callback

const request = require('request')

const forecast = (latitude,longitude,callback) => {
    const url = 'https://api.darksky.net/forecast/76d27104fbb36cdf4dd47806eeac9797/'+longitude+','+latitude
    
    request({url,json: true},(error,{body})=>{ 
        if (error){
            callback("unable to connect to weather service!",undefined)
        }
        else if(body.error){ // this exception occurs when the cooridates are not proper or either of the coordinte is missing
            callback("unable to find location",undefined)
        }
        else{
            callback(undefined,"it is currently " +body.currently.temperature+" degrees out. there is a " +body.currently.precipProbability+ " chance of rain ")
        console.log("summary of the day : "+body.daily.data[0].summary)//here we are acessing the summary. it is the part of data array therefore we are using 0th index of it.
        }
        
    })
}

module.exports=forecast
