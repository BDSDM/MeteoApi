const APIKEY ='fe6f897230ddbfc8c641a5fd06723b10'


let url = `https://api.openweathermap.org/data/2.5/weather?q=paris&appid=${APIKEY}&units=metric&lang=fr`;

fetch(url).then((response) => 
response.json().then((data) => {console.log(data)

document.querySelector('#city').innerHTML = data.name;
document.querySelector('#temp').innerHTML = data.main.temp + '°';
document.querySelector('#humidity').innerHTML = data.main.humidity + '%';
document.querySelector('#wind').innerHTML = data.wind.speed + 'km/h';
}))
.catch((err) => console.log('Erreur : ' + err) );

document.querySelector('form').addEventListener('submit',function(e){
    e.preventDefault();
    console.log("opération réussie");

    let ville = document.querySelector('#inputcity').value;
    


    let url = `https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=${APIKEY}&units=metric&lang=fr`;

fetch(url).then((response) => 
response.json().then((data) => {console.log(data)

document.querySelector('#city').innerHTML = data.name;
document.querySelector('#temp').innerHTML = data.main.temp + '°';
document.querySelector('#humidity').innerHTML = data.main.humidity + '%';
document.querySelector('#wind').innerHTML = data.wind.speed + 'km/h';
}))
.catch((err) => console.log('Erreur : ' + err) );

    

  
    
   
})
