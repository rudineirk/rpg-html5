'use strict'

const BootScene = new Phaser.Class({
  Extends: Phaser.Scene,
  initialize() {
    Phaser.Scene.call(this, {key: 'BootScene'})
  },
  preload() {
    // map tiles
    this.load.image('tiles', 'assets/map/spritesheet.png');

    // map in json format
    this.load.tilemapTiledJSON('map', 'assets/map/map.json');

    // our two characters
    this.load.spritesheet('player', 'assets/RPG_assets.png', { frameWidth: 16, frameHeight: 16 });
  },
  create() {
    this.scene.start('WorldScene')
  }
})

const WorldScene = new Phaser.Class({
  Extends: Phaser.Scene,
  initialize() {
    Phaser.Scene.call(this, {key: 'WorldScene'})
  },
  preload() {
    // load resources
  },
  create() {
    // create world
  }
})

const config = {
  type: Phaser.AUTO,
  parent: 'content',
  width: 320,
  height: 240,
  zoom: 2,
  pixelArt: true,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {y: 0},
    },
  },
  scene: [
    BootScene,
    WorldScene
  ]
}

const game = new Phaser.Game(config)
