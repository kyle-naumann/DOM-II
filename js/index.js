// Your code goes here


const busImg = document.querySelector(".intro img")

busImg.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    busImg.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
})

busImg.addEventListener("mouseenter", (e) => {
    busImg.style.transition = "none";
  
    busImg.style.transform = "translateZ(150px)";
  });

busImg.addEventListener("mouseleave", (e) => {
    busImg.style.transition = "all 0.5s ease";
    busImg.style.transform = `rotateY(0deg) rotateX(0deg)`;
  });

const logo = document.querySelector(".logo-heading")
logo.addEventListener("click", (event) => {
    event.target.style.color = "#c9a522";
})
// 
const titles = document.querySelectorAll('h2')
titles.forEach(title => {
    title.addEventListener('dblclick', (event) => {
    event.target.style.backgroundcolor = 'pink'
  })
})

const pics = document.querySelectorAll('.img-content img')
pics.forEach(pic => {
    pic.addEventListener('keydown', (event) => {
    event.style.color = 'opacity: 0.5'
  })
})

pics.forEach(pic => {
    pic.addEventListener('keyup', (event) => {
    event.style.transform = "scale(1)"
    event.style.transition = "all 0.1s"
  })
})

window.addEventListener('scroll', () => {
    console.log('window.scroll', window.scrollY)
    if (window.scrollY >= 10000) {
      alert("stop scrolling")
    }
  })

const words = document.querySelectorAll('a')
    words.addEventListener('select', (event) => {
        event.target.style.backgroundColor = 'blue'
    })

const wordB = document.querySelectorAll('container nav-container')
    wordB.addEventListener('zoom', (e) => {
        e.target.style.backgroundColor = 'green'
        e.stopImmediatePropagation()
    })

const botBtns = document.querySelector('.btn')

    botBtns.addEventListener('mousedown', (e) => {
        e.target.style.backgroundcolor = 'green'
    })
