import './style.css'
import { background } from './entities'


function animationLoop() {

  background.update()

  requestAnimationFrame(animationLoop)
}

requestAnimationFrame(animationLoop)