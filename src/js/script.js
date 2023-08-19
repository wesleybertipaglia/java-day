// mobile menu
let menu = document.querySelector('.mobile-menu')
let navList = document.querySelector('.nav-list')
let navItem = document.querySelectorAll('.nav-list li')

menu.addEventListener('click', responsive)

for (let i = 0; i <= navItem.lenght; i++) {
  navItem[i].addEventListener('click', responsive) 
}

function responsive() {
  navList.classList.toggle('active')
}

// section tabs
const controls = document.querySelectorAll(".tab-control")
const tabs = document.querySelectorAll(".tab-content")

// display none for 1-length tabs
for (let i = 1; i < tabs.length; i++) {
  tabs[i].style.display = "none"
}

// set value for all tabs
for (let i = 0; i < tabs.length; i++) {
  tabs[i].setAttribute("value", i)
}

// add event listener for all controls
for (let i = 0; i < controls.length; i++) {
  controls[i].setAttribute("value", i)
  controls[i].addEventListener("click", function() {
    displayTab(i)
  })
}

// display tab function
function displayTab(index) {
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none"
    controls[i].removeAttribute("id")
    controls[i].classList.remove("tab-active")
  }
  tabs[index].style.display = "flex"
  controls[index].classList.add("tab-active")
}

function initializeTabs() {
  tabs[0].style.display = "block"
}
