// menu
document.querySelectorAll('.nav-toggler').forEach((item) => {
  item.addEventListener('click', (event) => {
    document.getElementById('check').checked = false
  })
})

// Light & Dark Mode
let darkMode = localStorage.getItem('darkMode')

const darkModeToggle = document.querySelector('#dark-mode-toggle')

const enableDarkMode = () => {
  document.body.classList.add('darkmode')
  localStorage.setItem('darkMode', 'enabled')
}

const disableDarkMode = () => {
  document.body.classList.remove('darkmode')
  localStorage.setItem('darkMode', 'null')
}

if (darkMode == 'enabled') {
  enableDarkMode()
  document.getElementById('nav-img').src = 'assets/img/nav-logo.png'
}

darkModeToggle.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode')
  if (darkMode !== 'enabled') {
    enableDarkMode()
    document.getElementById('nav-img').src = 'assets/img/nav-logo.png'
  } else {
    disableDarkMode()
    document.getElementById('nav-img').src = 'assets/img/nav-logo-black.png'
  }
})

// Timers
var testDate1 = new Date('Jan 4, 2023 00:00:00').getTime()
var testDate2 = new Date('Jan 13, 2023 00:00:00').getTime()
var testDate3 = new Date('Jan 5, 2024 00:00:00').getTime()

function distance(value, id) {
  var now = new Date().getTime()

  var distance = value - now

  var days = Math.floor(distance / (1000 * 60 * 60 * 24))
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))

  document.getElementById(id).innerHTML =
    days + 'd ' + hours + 'h ' + minutes + 'm '
}

var t1 = setInterval(function () {
  distance(testDate1, 'test1')
}, 1000)
var t2 = setInterval(function () {
  distance(testDate2, 'test2')
}, 1000)
var t3 = setInterval(function () {
  distance(testDate3, 'test3')
}, 1000)
