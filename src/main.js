import './style.css'
import { city, base, bird, pipes } from './entities'

export let hasStarted = false

function animationLoop() {

  city.update(hasStarted)
  pipes.update(hasStarted)
  base.update(hasStarted)
  bird.update(hasStarted)

  requestAnimationFrame(animationLoop)
}

requestAnimationFrame(animationLoop)

window.addEventListener("click", () => { hasStarted = !hasStarted })