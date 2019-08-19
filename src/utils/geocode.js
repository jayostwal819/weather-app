//video 36 -> callback in geocode making it more dynamic
const request = require('request')

const geocode = (address,callback)=>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?bbox=-77.083056,38.908611,-76.997778,38.959167&access_token=pk.eyJ1IjoiamF5b3N0d2FsIiwiYSI6ImNqejljN201MjAzZ28zbnJ5cm1meHR5aTkifQ.NvWH9YSMQV73pcBLR5_Jpg&limit=1'

    request({url,json:true}, (error,{body})=>{
        if (error){
            callback("unable to connect to weather service!",undefined)
        }
        else if(body.features.length===0){ // this exception occurs when place dosent exist
            callback("unable to find location",undefined)
        }
        else{
            //callback(undefined,"longitude:"+response.body.features[0].center[0]+ " lattitude:" +response.body.features[0].center[1]+ " location: "+response.body.features[0].place_name)
            callback(undefined,{
                longitude:body.features[0].center[0],
                lattitude:body.features[0].center[1],
                location: body.features[0].place_name

            })
            
        }
    })
}

/*
geocode('new york',(error,data)=>{
    console.log('Error',error)
    console.log('Data',data)
})*/

module.exports=geocode

