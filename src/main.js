import './style.css'
import { background } from './entities'

export let hasStarted = false

function animationLoop() {

  background.update(hasStarted)

  requestAnimationFrame(animationLoop)
}

requestAnimationFrame(animationLoop)

window.addEventListener("click", () => {
  hasStarted = true
})
