class PlayScene extends Phaser.Scene {

    constructor() {
        super({
            key: "play",
            system: "Impact",
            gravity: 100
        });
    }

    preload() {
        this.load.image("tile_image", "assets/jungle tileset.png");
        this.load.tilemapTiledJSON("map", "assets/new.json");
        this.load.spritesheet("run_sheet", "assets/run.png", {frameWidth:21 , frameHeight: 33});
    }

    create() {
       var map = this.add.tilemap("map");
       var player = this.physics.add.sprite(300, 100, "run_sheet");
       var tileset = map.addTilesetImage("jungle", "tile_image");
       var layer = map.createStaticLayer("Tile Layer 1", tileset);

       var items = map.createFromObjects("Object Layer 1", 10, {}, this);
    }

}