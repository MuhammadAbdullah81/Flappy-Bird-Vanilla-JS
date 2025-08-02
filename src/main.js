import './style.css'
import { city, base, bird, pipes } from './entities'
import { collisionDetection } from './collisionDetection'

export let hasStarted = false

const show_hide_controls = document.querySelector("button")

let lastTime = null

function animationLoop(timeStamp) {
  if (!lastTime) lastTime = timeStamp
  let deltaTime = (timeStamp - lastTime) / 1000
  if (deltaTime > 0.1) deltaTime = 0.1
  lastTime = timeStamp

  console.log(deltaTime)

  collisionDetection({ player: bird, obstacle: pipes })


  city.update(hasStarted, bird.states.isAlive, deltaTime)
  pipes.update(hasStarted, bird.states.isAlive, deltaTime)
  base.update(hasStarted, bird.states.isAlive, deltaTime)
  bird.update(hasStarted, bird.states.isAlive, deltaTime)


  if (bird.states.isFlappying && hasStarted) {
    bird.flap()
  }

  requestAnimationFrame(animationLoop)
}

requestAnimationFrame(animationLoop)


// User Inputs

window.addEventListener("keydown", (e) => {

  if (e.key.trim().toLocaleLowerCase() == 'f') {
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

  if (e.key.trim().toLocaleLowerCase() == 'f') {
    bird.states.isFlappying = false
  }

})

show_hide_controls.addEventListener("click", () => {
  const controls = document.querySelector(".wrapper")
  controls.classList.toggle("show")
})