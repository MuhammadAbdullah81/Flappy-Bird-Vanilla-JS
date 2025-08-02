export function collisionDetection({ player, obstacle }) {
    if (
        (player.position.x + player.aspectRatio.w - 5) >= (obstacle.positionPipeDown.x) &&
        (player.position.x + player.aspectRatio.w - 5) <= (obstacle.positionPipeDown.x + obstacle.aspectRatio.w) &&
        (
            (player.position.y) <= (obstacle.positionPipeDown.y + obstacle.aspectRatio.h) ||
            (player.position.y + player.aspectRatio.h) >= (obstacle.positionPipeUp.y)
        )
    ) {
        player.states.isAlive = false
    }
}