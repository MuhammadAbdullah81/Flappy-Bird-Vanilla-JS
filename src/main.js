import './style.css'
import { city } from './entities'

export let hasStarted = true

function animationLoop() {

  city.update(hasStarted)

  requestAnimationFrame(animationLoop)
}

requestAnimationFrame(animationLoop)
