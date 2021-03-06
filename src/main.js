import 'babel-polyfill'
import dva from 'dva'
import createHistory from 'history/createBrowserHistory'

const app = dva({
  history: createHistory(),
  onError(e) {
    console.log(e)
  },
})

window.testData = [
  { "path": "root/DIV_0", "isTarget": false, "nodeType": 1, "nodeValue": null, "width": 402, "height": 269, "x": 8, "y": 8, "style": { "color": "rgb(0, 0, 0)", "backgroundColor": "rgb(255, 192, 203)", "border": "1px solid rgb(0, 0, 0)", "borderColor": "rgb(0, 0, 0)", "borderWidth": "1px", "fontFamily": "\"PingFang SC\"", "fontSize": "16px", "fontWeight": "400" } }, 
  { "path": "root/DIV_0/DIV_1", "isTarget": false, "nodeType": 1, "nodeValue": null, "width": 380, "height": 22, "x": 29, "y": 9, "style": { "color": "rgb(255, 255, 0)", "backgroundColor": "rgba(0, 0, 0, 0)", "border": "0px none rgb(255, 255, 0)", "borderColor": "rgb(255, 255, 0)", "borderWidth": "0px", "fontFamily": "\"PingFang SC\"", "fontSize": "16px", "fontWeight": "400" } }, 
  { "path": "root/DIV_0/DIV_1/#text_0", "isTarget": false, "nodeType": 3, "nodeValue": "N/A", "x": 29, "y": 9, "style": {} }, 
  { "path": "root/DIV_0/DIV_3", "isTarget": false, "nodeType": 1, "nodeValue": null, "width": 400, "height": 225, "x": 9, "y": 51, "style": { "color": "rgb(0, 0, 0)", "backgroundColor": "rgba(0, 0, 0, 0)", "border": "0px none rgb(0, 0, 0)", "borderColor": "rgb(0, 0, 0)", "borderWidth": "0px", "fontFamily": "\"PingFang SC\"", "fontSize": "16px", "fontWeight": "400" } }, 
  { "path": "root/DIV_0/DIV_3/H2_1", "isTarget": false, "nodeType": 1, "nodeValue": null, "width": 400, "height": 33, "x": 9, "y": 51, "style": { "color": "rgb(0, 0, 0)", "backgroundColor": "rgba(0, 0, 0, 0)", "border": "0px none rgb(0, 0, 0)", "borderColor": "rgb(0, 0, 0)", "borderWidth": "0px", "fontFamily": "\"PingFang SC\"", "fontSize": "24px", "fontWeight": "700" } }, 
  { "path": "root/DIV_0/DIV_3/H2_1/A_1", "isTarget": true, "nodeType": 1, "nodeValue": null, "width": 54, "height": 33, "x": 9, "y": 51, "style": { "color": "rgb(0, 0, 0)", "backgroundColor": "rgba(0, 0, 0, 0)", "border": "0px none rgb(0, 0, 0)", "borderColor": "rgb(0, 0, 0)", "borderWidth": "0px", "fontFamily": "\"PingFang SC\"", "fontSize": "24px", "fontWeight": "700" } }, 
  { "path": "root/DIV_0/DIV_3/H2_1/A_1/#text_0", "isTarget": false, "nodeType": 3, "nodeValue": "title1", "x": 9, "y": 51, "style": {} }, 
  { "path": "root/DIV_0/DIV_3/H2_3", "isTarget": false, "nodeType": 1, "nodeValue": null, "width": 400, "height": 33, "x": 9, "y": 104, "style": { "color": "rgb(0, 0, 0)", "backgroundColor": "rgba(0, 0, 0, 0)", "border": "0px none rgb(0, 0, 0)", "borderColor": "rgb(0, 0, 0)", "borderWidth": "0px", "fontFamily": "\"PingFang SC\"", "fontSize": "24px", "fontWeight": "700" } }, 
  { "path": "root/DIV_0/DIV_3/H2_3/A_1", "isTarget": true, "nodeType": 1, "nodeValue": null, "width": 58, "height": 33, "x": 9, "y": 104, "style": { "color": "rgb(0, 0, 0)", "backgroundColor": "rgba(0, 0, 0, 0)", "border": "0px none rgb(0, 0, 0)", "borderColor": "rgb(0, 0, 0)", "borderWidth": "0px", "fontFamily": "\"PingFang SC\"", "fontSize": "24px", "fontWeight": "700" } }, 
  { "path": "root/DIV_0/DIV_3/H2_3/A_1/#text_0", "isTarget": false, "nodeType": 3, "nodeValue": "title2", "x": 9, "y": 104, "style": {} }, 
  { "path": "root/DIV_0/DIV_3/DIV_5", "isTarget": false, "nodeType": 1, "nodeValue": null, "width": 400, "height": 99, "x": 9, "y": 157, "style": { "color": "rgb(0, 0, 0)", "backgroundColor": "rgba(0, 0, 0, 0)", "border": "0px none rgb(0, 0, 0)", "borderColor": "rgb(0, 0, 0)", "borderWidth": "0px", "fontFamily": "\"PingFang SC\"", "fontSize": "16px", "fontWeight": "400" } }, 
  { "path": "root/DIV_0/DIV_3/DIV_5/A_1", "isTarget": true, "nodeType": 1, "nodeValue": null, "width": 32, "height": 22, "x": 9, "y": 157, "style": { "color": "rgb(0, 0, 0)", "backgroundColor": "rgba(0, 0, 0, 0)", "border": "0px none rgb(0, 0, 0)", "borderColor": "rgb(0, 0, 0)", "borderWidth": "0px", "fontFamily": "\"PingFang SC\"", "fontSize": "16px", "fontWeight": "400" } }, 
  { "path": "root/DIV_0/DIV_3/DIV_5/A_1/#text_0", "isTarget": false, "nodeType": 3, "nodeValue": "link1", "x": 9, "y": 157, "style": {} }, 
  { "path": "root/DIV_0/DIV_3/DIV_5/DIV_3", "isTarget": false, "nodeType": 1, "nodeValue": null, "width": 400, "height": 61, "x": 9, "y": 195, "style": { "color": "rgb(0, 0, 0)", "backgroundColor": "rgba(0, 0, 0, 0)", "border": "0px none rgb(0, 0, 0)", "borderColor": "rgb(0, 0, 0)", "borderWidth": "0px", "fontFamily": "\"PingFang SC\"", "fontSize": "16px", "fontWeight": "400" } }, 
  { "path": "root/DIV_0/DIV_3/DIV_5/DIV_3/P_1", "isTarget": false, "nodeType": 1, "nodeValue": null, "width": 400, "height": 22, "x": 9, "y": 195, "style": { "color": "rgb(0, 0, 0)", "backgroundColor": "rgba(0, 0, 0, 0)", "border": "0px none rgb(0, 0, 0)", "borderColor": "rgb(0, 0, 0)", "borderWidth": "0px", "fontFamily": "\"PingFang SC\"", "fontSize": "16px", "fontWeight": "400" } }, 
  { "path": "root/DIV_0/DIV_3/DIV_5/DIV_3/P_1/#text_0", "isTarget": false, "nodeType": 3, "nodeValue": "testtesttesttestesaeqweqwedasdasd", "x": 9, "y": 195, "style": {} }, 
  { "path": "root/DIV_0/DIV_3/DIV_5/DIV_3/DIV_3", "isTarget": false, "nodeType": 1, "nodeValue": null, "width": 400, "height": 23, "x": 9, "y": 233, "style": { "color": "rgb(0, 0, 0)", "backgroundColor": "rgba(0, 0, 0, 0)", "border": "0px none rgb(0, 0, 0)", "borderColor": "rgb(0, 0, 0)", "borderWidth": "0px", "fontFamily": "\"PingFang SC\"", "fontSize": "16px", "fontWeight": "400" } }, 
  { "path": "root/DIV_0/DIV_3/DIV_5/DIV_3/DIV_3/SPAN_1", "isTarget": false, "nodeType": 1, "nodeValue": null, "width": 35, "height": 22, "x": 9, "y": 233, "style": { "color": "rgb(0, 0, 0)", "backgroundColor": "rgba(0, 0, 0, 0)", "border": "0px none rgb(0, 0, 0)", "borderColor": "rgb(0, 0, 0)", "borderWidth": "0px", "fontFamily": "\"PingFang SC\"", "fontSize": "16px", "fontWeight": "400" } }, 
  { "path": "root/DIV_0/DIV_3/DIV_5/DIV_3/DIV_3/SPAN_1/#text_0", "isTarget": false, "nodeType": 3, "nodeValue": "label", "x": 9, "y": 233, "style": {} }, 
  { "path": "root/DIV_0/DIV_3/DIV_5/DIV_3/DIV_3/BUTTON_3", "isTarget": true, "nodeType": 1, "nodeValue": null, "width": 87, "height": 20, "x": 49, "y": 236, "style": { "color": "rgb(0, 0, 0)", "backgroundColor": "rgb(255, 255, 255)", "border": "", "borderColor": "rgb(216, 216, 216) rgb(209, 209, 209) rgb(186, 186, 186)", "borderWidth": "1px", "fontFamily": "system-ui", "fontSize": "12px", "fontWeight": "400" } }, 
  { "path": "root/DIV_0/DIV_3/DIV_5/DIV_3/DIV_3/BUTTON_3/#text_0", "isTarget": false, "nodeType": 3, "nodeValue": "button111111", "x": 49, "y": 236, "style": {} }, 
  { "path": "root/DIV_0/DIV_3/BUTTON_7", "isTarget": true, "nodeType": 1, "nodeValue": null, "width": 56, "height": 20, "x": 9, "y": 256, "style": { "color": "rgb(0, 0, 0)", "backgroundColor": "rgb(255, 255, 255)", "border": "", "borderColor": "rgb(216, 216, 216) rgb(209, 209, 209) rgb(186, 186, 186)", "borderWidth": "1px", "fontFamily": "system-ui", "fontSize": "12px", "fontWeight": "400" } }, 
  { "path": "root/DIV_0/DIV_3/BUTTON_7/#text_0", "isTarget": false, "nodeType": 3, "nodeValue": "btn222", "x": 9, "y": 256, "style": {} }
]
window.testData.map( node => {
  if (node.isTarget) {
    node.click = Math.floor(Math.random() * 20)
  }
})


app.model(require('./models/users').default)
app.model(require('./models/uiModel').default)
app.model(require('./models/errorModel').default)
app.router(require('./router').default)
app.start('#app')

