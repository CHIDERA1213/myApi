const searchInput = document.querySelector('.search')
const searchIcon = document.querySelector('.ri-search-2-line')
// const time = 
const Switcher = document.querySelector('.ri-moon-fill')
const ApiInterface = document.querySelector('.ApiInterface')
const url = 'https://randomuser.me/api/?results=100'


async function getUser(){
    const users = await fetch(url)
    const {results} = await users.json()
    const div = document.createElement('div')
    div.classList.add('apiResult')
    console.log(results)
    results.forEach((user) => {
        div.innerHTML += `
            <div class="ImageApi">
                <img src="${user.picture.medium}" alt="">
                <div class="info">
                    <p>Name: ${user.name.first} ${user.name.last}</p>
                    <p>Location:${user.location.city}</p>
                    <p>number:${user.phone}</p>
                </div>
            </div>
        `
        ApiInterface.appendChild(div)
})


}

getUser()




searchIcon.addEventListener('click', () => {
    searchInput.classList.toggle('showInput')
})

let clock = () => {
    let date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let sec = date.getSeconds();
    let time = `${hrs}:${mins}:${sec}`
    document.getElementById('time').innerText = time

    setInterval(clock, 1000)
  }

  clock()

Switcher.addEventListener('click', ()=>{
    ApiInterface.classList.toggle('darkmode')
})



