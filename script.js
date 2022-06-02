const openNavBtn = document.querySelector('.open-nav-btn')
const closeNavBtn = document.querySelector('.close-nav-btn')
const nav = document.querySelectorAll('.nav')
const overlayLeft = document.querySelector('.overlay-left')

openNavBtn.addEventListener('click', () => {
  nav.forEach(navElement => 
    navElement.classList.add('visible')
  )

  overlayLeft.style.display = 'block'
})

closeNavBtn.addEventListener('click', () => {
  nav.forEach(navElement => 
    navElement.classList.remove('visible')
  )

  overlayLeft.style.display = 'none'
})

overlayLeft.addEventListener('click', () => {
  nav.forEach(navElement => 
    navElement.classList.remove('visible')
  )

  overlayLeft.style.display = 'none'
})
