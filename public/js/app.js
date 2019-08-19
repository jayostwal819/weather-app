console.log("javascript file on client side")

//video 57 -> fetching the results by the url
/*
fetch('https://puzzle.mead.io/puzzle').then((response) =>{
    response.json().then((data) => {
        console.log(data)
    })
})

//challenge

fetch('http://localhost:3000/weather?address=boston').then((response) =>{
    response.json().then((data) => {
        if(data.error)
        {
            console.log(data.error)
        }
        else
        {
            console.log(data.location)
            console.log(data.forecast)
        }
    })
}) */

//video 58 -> fetching values from search bar
/*
const weatherForm = document.querySelector('form') //we are selecting the value from searchbar from the form. we are setting a listner to it
const search = document.querySelector('input') //fetching value from input of form

weatherForm.addEventListener('submit', (e) => { //we are setting an event listner when the form is submitted and another agrument function is the callback which will be called everytime when we are submitting the form
    e.preventDefault() // this function will prevent the browser from refreshing again and again in millisecods
    
    const location = search.value
    // console.log(location)
    fetch('http://localhost:3000/weather?address='+location).then((response) =>{
    response.json().then((data) => {
        if(data.error)
        {
            console.log(data.error)
        }
        else
        {
            console.log(data.location)
            console.log(data.forecast)
        }
    })
})
}) */

//video 59 -> priting the values on the html page
/*
const weatherForm = document.querySelector('form') //we are selecting the value from searchbar from the form. we are setting a listner to it
const search = document.querySelector('input') //fetching value from input of form
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')


weatherForm.addEventListener('submit', (e) => { //we are setting an event listner when the form is submitted and another agrument function is the callback which will be called everytime when we are submitting the form
    e.preventDefault() // this function will prevent the browser from refreshing again and again in millisecods
    
    const location = search.value

    messageOne.textContent = 'Loading..'
    messageTwo.textContent = ''

    fetch('http://localhost:3000/weather?address='+location).then((response) =>{
    response.json().then((data) => {
        if(data.error)
        {
            messageOne.textContent = data.error
        }
        else
        {
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast
        }
    })
})
}) */

//video 67 -> deploying code to heroku (here we need to make some changes in the url)

const weatherForm = document.querySelector('form') //we are selecting the value from searchbar from the form. we are setting a listner to it
const search = document.querySelector('input') //fetching value from input of form
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')


weatherForm.addEventListener('submit', (e) => { //we are setting an event listner when the form is submitted and another agrument function is the callback which will be called everytime when we are submitting the form
    e.preventDefault() // this function will prevent the browser from refreshing again and again in millisecods
    
    const location = search.value

    messageOne.textContent = 'Loading..'
    messageTwo.textContent = ''

    fetch('/weather?address='+location).then((response) =>{
    response.json().then((data) => {
        if(data.error)
        {
            messageOne.textContent = data.error
        }
        else
        {
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast
        }
    })
})
})