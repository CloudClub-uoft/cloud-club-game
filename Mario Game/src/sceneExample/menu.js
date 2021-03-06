var keyReset = false;

var Mario_Game = {};
Mario_Game.Menu = function(game) {

};

Mario_Game.Menu.prototype = {
    preload: function() {
        game.load.image('start_screen', '../../assets/menu_screen_2.png')
    },

    create: function() {
        game.add.tileSprite(0, 0, 800, 600, 'start_screen')
        console.log(game)
    },

    update: function() {
        if (game.input.keyboard.justPressed(Phaser.Keyboard.ENTER) && !keyReset) {
            keyReset = true;
            this.level_1();
        }
        if (game.input.keyboard.justReleased(Phaser.Keyboard.ENTER)) {
            keyReset = false;
        }

        if (game.input.mousePointer.x > 313 && game.input.mousePointer.x < 481) {
            if (game.input.mousePointer.y > 214 && game.input.mousePointer.y < 260) {
                if (game.input.activePointer.isDown) {
                    this.level_1()
                }
            }
        }
    },

    level_1: function() {
        console.log("Start Level 1");
        this.state.start("Level_1");
    }
}