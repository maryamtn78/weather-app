// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=metric



const form = document.querySelector(".form")
const input = document.querySelector(".textInput")
const msg =document.querySelector(".msg")
const citiesList =document.querySelector(".cities")

const apiKey = "4400f2176bdf96b8fd3d14fd938f8436"


form.addEventListener("submit" , e=>{
    e.preventDefault();
    let inputValue = input.value ;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue }&appid=${apiKey}&units=metric`
    fetch(url)
    .then( response => response.json())
    .then(data => {
        const{main , name , sys , weather } = data;
        console.log(main)
        console.log(name)
        console.log(sys)
        console.log(weather)
        const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
            weather[0]["icon"]
          }.svg`
        console.log(icon)

        console.log(icon)
        const li = document.createElement("li");
        li.classList.add("cityBox");
        const cityBox = `
        <h2 class="nameCity" data-name=${name} , ${sys.country}>
        <span>${name}</span>
        <span class="country">${sys.country}</span>
        </h2>
        <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
        <figure>
        <img class="city-icon" src='${icon}' alt="icon">
        <figurecaption>${weather[0]["description"]}</figurecaption>
        </figure>
        `;
        li.innerHTML=cityBox;
        citiesList.appendChild(li);
        msg.innerText=""

    })
    .catch(()=>{
        msg.innerText = "search for a valid city"
    })
    input.value=""
})
