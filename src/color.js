import chroma from 'chroma-js'

/**
 * @class Color
 * @classdesc A class to handle color operations
 *
 * @param {chroma.Color} color - The color to handle
 */
class Color {
  /**
   * @param {chroma.Color} color
   */
  constructor (color, bg) {
    this.color = color
  }

  rgb = () => this.color.rgb()

  rgba = () => this.color.rgba()

  hex = () => this.color.hex()

  alpha = (value) => new Color(this.color.alpha(value))

  darken = (value) => new Color(this.color.darken(value))

  brighten = (value) => new Color(this.color.brighten(value))
}

const colorBuilder = color => new Color(chroma(color))

export default colorBuilder
