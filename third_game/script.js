let road;
let car;
let cursors;

class Scene extends Phaser.Scene {

    preload() {
        this.load.image('road', 'road.png');
        this.load.image('car', 'car4.png');
    }

    create() {
        road = this.add.tileSprite(0, 0, 2800, 1800, 'road');
        car = this.physics.add.sprite(100, 100, 'car');

        cursors = this.input.keyboard.createCursorKeys();
        console.log(cursors);
    }

    update() {

        road.tilePositionX += 20;

        if(cursors.up.isDown) {
            console.log("moving up");
            this.moveCarUp();
            cursors.up.isDown = false;
        }

        if(cursors.down.isDown) {
            console.log("moving down");
            this.moveCarDown();
            cursors.down.isDown = false;
        }

        if(cursors.right.isDown) {
            console.log("moving right");
            this.moveCarRight();
            cursors.right.isDown = false;
        }

        if(cursors.left.isDown) {
            console.log("moving left");
            this.moveCarLeft();
            cursors.left.isDown = false;
        }
    }

    moveCarUp() {
        car.y -= 150;
    }

    moveCarDown() {
        car.y += 150;
    }

    moveCarRight() {
        car.x += 100;
    }

    moveCarLeft() {
        car.x -= 100;
    }
    render() {

    }
}