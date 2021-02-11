document.getElementById('click-me') .addEventListener('click',secondButton)

document.getElementById('button-two') .addEventListener('click',buttonOn)

function secondButton () {
  document.getElementById('paragraph').innerHTML = 'Done!'
  document.getElementById('picture').src =
  './images/images.jpeg'
  document.getElementById('background').style.backgroundColor = 'green'
  document.getElementById('paragraph').display = 'none'
}

function buttonOn () {
  document.getElementById('paragraph').innerHTML = 'Done!'
  document.getElementById('picture').src = './images/images.jpeg'
  document.getElementById('background').style.backgroundColor = 'blue'
  document.getElementById('paragraph').display = 'none'
}
