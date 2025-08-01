import './style.css'
import { city, base, bird, pipes } from './entities'
import { collisionDetection } from './collisionDetection'

export let hasStarted = false

function animationLoop() {

  city.update(hasStarted)
  pipes.update(hasStarted)
  base.update(hasStarted)
  bird.update(hasStarted)


  if (bird.states.isFlappying) {
    bird.flap()
  }

  collisionDetection({ player: bird, obstacle: pipes })

  requestAnimationFrame(animationLoop)
}

requestAnimationFrame(animationLoop)

window.addEventListener("click", () => { hasStarted = !hasStarted })

window.addEventListener("keydown", (e) => {

  if (e.keyCode == 32) {
    bird.states.isFlappying = true
  }

})

window.addEventListener("keyup", (e) => {

  if (e.keyCode == 32) {
    bird.states.isFlappying = false
  }

})