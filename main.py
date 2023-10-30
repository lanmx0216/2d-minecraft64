def on_overlap_tile(sprite, location):
    game.game_over(False)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile0
    """),
    on_overlap_tile)

def on_a_pressed():
    if me.vy == 0:
        me.vy = -125
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_overlap_tile2(sprite2, location2):
    me.set_velocity(0, 0)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile
    """),
    on_overlap_tile2)

def on_overlap_tile3(sprite3, location3):
    pause(100)
    game.splash("this game ", "is made by")
    game.splash("60705", "Maxi")
    game.game_over(True)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile3
    """),
    on_overlap_tile3)

def on_up_pressed():
    if me.vy == 0:
        me.vy = -125
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_overlap_tile4(sprite4, location4):
    game.game_over(False)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile5
    """),
    on_overlap_tile4)

def check_pw():
    global pwia
    if pwia == "0000":
        pass
    else:
        game.splash("Again")
        pwia = game.ask_for_string("Enter password ", 4)
        check_pw()
me: Sprite = None
Timer = 0
pwia = ""
pwia = game.ask_for_string("Enter password ", 4)
check_pw()
if game.ask_for_number("tm") == 1:
    Timer = 50
else:
    Timer = 30
game.splash("welcome to", "2D minecraft")
game.splash("are you ready")
scene.set_background_color(9)
me = sprites.create(img("""
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
    """),
    SpriteKind.player)
scene.camera_follow_sprite(me)
me.ay = 350
me.ax = 10000
pause(100)
me.ax = 0
tiles.set_current_tilemap(tilemap("""
    層級1
"""))
controller.move_sprite(me, 100, 0)
info.start_countdown(Timer)