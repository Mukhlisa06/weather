let h1 = document.querySelector('h1')
let wind = document.querySelector('#wind')
let hum = document.querySelector('#hum')
let searchInp = document.querySelector('input')
let searchBTN = document.querySelector('#searchBTN')
let today = document.querySelector("#today")
let td = document.querySelector(".td")
let con = document.querySelector(".container")
let cont = document.querySelector(".content")
let time = document.querySelectorAll(".timedat")



let API_KEY = '4f9dc827356314629e9dd48d2cebf4fa'
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
getWeather()
function getWeather(city = "samarkand") {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    .then(({data}) => {
        /* console.log(data) */
        h1.innerHTML = Math.round(data.main.temp) + "°"
        wind.innerHTML = `${data.wind.speed} km/h`
        hum.innerHTML = `${data.main.humidity} %`
      
    })

  let tod = new Date()
  today.innerHTML = tod.getDay() + " " + monthNames[tod.getMonth()] 
  td.innerHTML =  monthNames[tod.getMonth()]  + " " + tod.getDay()
}

month()
function month (country = "samarkand"){
   axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${country}&appid=${API_KEY}&units=metric`)
    .then(({res}) =>{
        console.log(res)
        let tod = new Date()
        time.forEach(tim => {
            tim.innerHTML =  monthNames[tod.getMonth()] + " " + res
        })
 })
}

searchBTN.onclick = () => {
    getWeather(searchInp.value)
    month(searchInp.value)
}

document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;

function getTouches(evt) {
  return evt.touches     
       
}                                                     
                                                                         
function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                
                                                                         
function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
                                                                         
    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
        if ( xDiff > 0 ) {
            cont.classList.add("show")
            con.classList.remove("show")
            con.classList.add('hide')
            cont.classList.add("train")
        } else {
            con.classList.add("show")
            cont.classList.remove("show")
           cont.classList.add("hide")
            
        }                       

   
    xDown = null;
    }                                          
};



