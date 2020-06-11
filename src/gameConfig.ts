import { AUTO, Scale, Types } from 'phaser'

import Demo from './scenes/demo'

const config: Types.Core.GameConfig = {
  scene: [Demo],
  type: AUTO,
  parent: 'game-container',
  width: 800,
  height: 600,
  render: {
    pixelArt: true
  },
  scale: {
    autoCenter: Scale.CENTER_BOTH,
    mode: Scale.RESIZE
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { x: 0, y: 0 }
    }
  }
}

export default config
