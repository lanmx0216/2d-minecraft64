controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (me.vy == 0) {
        me.vy = -125
    }
})
function check_pw () {
    if (pwia == "0000") {
    	
    } else {
        game.splash("Again")
        pwia = game.askForString("Enter password ", 4)
        check_pw()
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`fire2`, function (sprite4, location4) {
    game.splash("this game ", "is made by")
    game.splash("60705", "Maxi")
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`lava`, function (sprite4, location4) {
    game.splash("this game ", "is made by")
    game.splash("60705", "Maxi")
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`fire0`, function (sprite4, location4) {
    game.splash("this game ", "is made by")
    game.splash("60705", "Maxi")
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`fire`, function (sprite4, location4) {
    game.splash("this game ", "is made by")
    game.splash("60705", "Maxi")
    game.gameOver(false)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (me.vy == 0) {
        me.vy = -125
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`fire1`, function (sprite4, location4) {
    game.splash("this game ", "is made by")
    game.splash("60705", "Maxi")
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`water`, function (sprite2, location2) {
    me.setVelocity(0, 0)
})
scene.onOverlapTile(SpriteKind.Player, img`
            myTile0
        `, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile8`, function (sprite3, location3) {
    pause(100)
    game.splash("this game ", "is made by")
    game.splash("60705", "Maxi")
    game.gameOver(true)
})
let me: Sprite = null
let Timer = 0
let pwia = ""
pwia = game.askForString("Enter password ", 4)
check_pw()
if (game.askForNumber("tm") == 1) {
    Timer = 50
} else {
    Timer = 30
}
game.splash("welcome to", "2D minecraft")
game.splash("are you ready")
scene.setBackgroundColor(9)
me = sprites.create(img`
    . . . . . . . c c . . . . . . . 
    . . . . . . c 5 c . . . . . . . 
    . . . . c c 5 5 5 c c c . . . . 
    . . c c c c 5 5 5 5 c b c c . . 
    . c b b 5 b 5 5 5 5 b 5 b b c . 
    . c b 5 5 b b 5 5 b b 5 5 b c . 
    . . c 5 5 5 b b b b 5 5 5 f . . 
    . . . f 5 5 5 5 5 5 5 5 f f . . 
    . . . . f e e e f b e e f f . . 
    . . . . f e b b f 1 b f f f . . 
    . . . . f b b b b b b f f . . . 
    . . . . . f e e e e f e e . . . 
    . . . . . f 5 b b e b b e . . . 
    . . . . f 5 5 5 5 e b b e . . . 
    . . . . c b 5 5 5 5 e e . . . . 
    . . . . . f f f f f f . . . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(me)
me.ay = 350
me.ax = 10000
pause(100)
me.ax = 0
tiles.setCurrentTilemap(tilemap`層級3`)
controller.moveSprite(me, 100, 0)
info.startCountdown(Timer)
