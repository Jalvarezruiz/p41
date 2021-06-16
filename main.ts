input.onGesture(Gesture.Shake, function () {
    luz.turn(Direction.Right, 45)
})
let luz: game.LedSprite = null
luz = game.createSprite(2, 2)
basic.forever(function () {
    luz.move(1)
    luz.ifOnEdgeBounce()
    basic.pause(100)
})
