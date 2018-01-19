import React from 'react'
import { connect } from 'dva'
import style from './canvas.less'

class App extends React.Component {


  componentDidMount() {
    const { canvas } = this.refs
    const ctx = canvas.getContext('2d')
    this.renderCanvas(ctx, window.testData)
  }
  renderCanvas(ctx, data) {
    console.log(data)
    const list = data
    list.forEach(node => {
      const { nodeType, nodeValue, style, x, y, width, height } = node
      const {
        color, backgroundColor,
        border, borderColor, borderWidth,
        fontFamily, fontSize, fontWeight
    } = style
      if (nodeType !== 3) {
        ctx.restore()
        ctx.save()

        if (backgroundColor) {
          ctx.fillStyle = backgroundColor
          ctx.fillRect(x, y, width, height)
        }
        if (color) {
          ctx.strokeStyle = color || ctx.strokeStyle
        }
        if (borderColor) {
          ctx.save()
          const bdWidth = borderWidth.match(/[0-9]+/)[0]
          if (bdWidth > 0) {
            ctx.strokeRect(x, y, width, height)
          }
          ctx.restore()
        }
        ctx.font = `${fontWeight} ${fontSize} ${fontFamily}`

      } else {
        ctx.save()

        ctx.textBaseline = 'top'
        ctx.fillStyle = ctx.strokeStyle

        ctx.fillText(nodeValue, x, y)
        ctx.restore()
      }
    })
  }
  render() {
    const { width, height } = this.props
    return <canvas className='canvas' width={width} height={height} ref='canvas'></canvas>
  }
}
function mapStateToProps(state) {
  return {
  }
}
export default connect(mapStateToProps)(App)