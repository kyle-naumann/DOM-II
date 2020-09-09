// Your code goes here

// `    mouseover`
//   * `keydown`
//   * `wheel`
//   * `load`
//   * `focus`
//   * `resize`
//   * `scroll`
//   * `select`
//   * `dblclick`

// let Button = document.querySelector('.container .button');
// Button.addEventListener('click', (event) => {
//   event.target.style.backgroundColor = 'green';
// })

// BUS IMAGE HEADER
const busImg = document.querySelector(".intro img")
busImg.addEventListener("mouseover", () => {
    busImg.style.transform ="scale(1.1)";
    busImg.style.transition = "all 0.1s"
})

busImg.addEventListener("mouseleave", () => {
    busImg.style.transform ="scale(1)";
})

const logo = document.querySelector(".logo-heading")
logo.addEventListener("click", (event) => {
    event.target.style.color = "#c9a522";
})
// 
const titles = document.querySelectorAll('h2')
titles.forEach(title => {
    title.addEventListener('dblclick', (event) => {
    event.target.style.color = 'purple'
  })
})

const pics = document.querySelectorAll('.img-content')
pics.forEach(pic => {
    pic.addEventListener('keydown', (event) => {
    event.style.transform = "scale(1.1)"
    event.style.transition = "all 0.1s"
  })
})

pics.forEach(pic => {
    pic.addEventListener('keyup', (event) => {
    event.style.transform = "scale(1)"
    event.style.transition = "all 0.1s"
  })
})

window.addEventListener('scroll', () => {
    console.log('window.scrollY', window.scrollY)
    if (window.scrollY >= 5000) {
      alert("scrolled")
    }
  })

const words = document.querySelectorAll('a')
    word.addEventListener('select', (event) => {
        event.target.style.backgroundColor = 'blue'
    })

const words = document.querySelectorAll('container nav-container')
    word.addEventListener('zoom', (e) => {
        e.stopPropagation();
        alert("Not the NAV!!!")
    })

    const words = document.querySelectorAll('a')
    word.addEventListener('click', (event) => {
        event.preventDefault();
    })
