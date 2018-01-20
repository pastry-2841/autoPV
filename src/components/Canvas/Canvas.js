import React from 'react'
import { connect } from 'dva'
import style from './canvas.less'

class App extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.selectedTarget !== this.props.selectedTarget) {
      if (this.ctx === undefined) { return false}
      if (nextProps.selectedTarget === undefined) { return false }
      this.clearCanvas()
      this.renderCanvas(this.ctx, this.props.data)
      this.renderHighlight(this.ctx, nextProps.selectedTarget)
      return false
    }
    return true
  }
  componentDidMount() {
    const { canvas } = this.refs
    this.ctx = canvas.getContext('2d')
    this.renderCanvas(this.ctx, this.props.data)
    this.renderHighlight(this.ctx, this.props.selectedTarget)
  }
  clearCanvas(ctx, width, height) {
    this.ctx.clearRect(0, 0, width, height)
  }
  renderCanvas(ctx, data) {
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
  renderHighlight(ctx, node) {
    if (node === undefined) { return false}
    const { x, y, width, height } = node
    ctx.save()
    ctx.strokeStyle = '#1890ff'
    ctx.strokeRect(x, y, width, height)
    ctx.restore()
    console.log(node)
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