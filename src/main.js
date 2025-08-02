import './style.css'
import { city, base, bird, pipes } from './entities'
import { collisionDetection } from './collisionDetection'

export let hasStarted = false

const show_hide_controls = document.querySelector("button")

function animationLoop() {

  collisionDetection({ player: bird, obstacle: pipes })


  city.update(hasStarted, bird.states.isAlive)
  pipes.update(hasStarted, bird.states.isAlive)
  base.update(hasStarted, bird.states.isAlive)
  bird.update(hasStarted, bird.states.isAlive)


  if (bird.states.isFlappying && hasStarted) {
    bird.flap()
  }

  requestAnimationFrame(animationLoop)
}

requestAnimationFrame(animationLoop)


// User Inputs

window.addEventListener("keydown", (e) => {

  if (e.keyCode == 32) {
    bird.states.isFlappying = true
  }
  else if (e.key.trim().toLocaleLowerCase() == 's') {
    hasStarted = !hasStarted
  }
  else if (e.key.trim().toLocaleLowerCase() == 'r') {
    city.restart()
    pipes.restart()
    base.restart()
    bird.restart()
    hasStarted = true
  }

})

window.addEventListener("keyup", (e) => {

  if (e.keyCode == 32) {
    bird.states.isFlappying = false
  }

})

show_hide_controls.addEventListener("click", () => {
  const controls = document.querySelector(".wrapper")
  controls.classList.toggle("show")
})