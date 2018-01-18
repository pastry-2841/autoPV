import 'babel-polyfill'
import dva from 'dva'
import createHistory from 'history/createBrowserHistory'

const app = dva({
  history: createHistory(),
  onError(e) {
    console.log(e)
  },
})

app.model(require('./models/users').default)
app.model(require('./models/uiModel').default)
app.model(require('./models/errorModel').default)
app.router(require('./router').default)
app.start('#app')
