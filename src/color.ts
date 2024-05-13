import chroma from 'chroma-js'

class Color {
  color: chroma.Color

  constructor (color: chroma.Color) {
    this.color = color
  }

  rgb = () => this.color.rgb()

  rgba = () => this.color.rgba()

  hex = () => this.color.hex()

  alpha = (value: number) => new Color(this.color.alpha(value))

  darken = (value: number) => new Color(this.color.darken(value))

  brighten = (value: number) => new Color(this.color.brighten(value))
}

const colorBuilder = (color: string) => new Color(chroma(color))

export default colorBuilder
