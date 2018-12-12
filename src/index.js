import dva from 'dva';
import './index.css';
import createHistory from 'history/createBrowserHistory'
// import createLoading from 'dva-loading'


// 1. Initialize
const app = dva(
    {
        // ...createLoading({
        //   effects: true,
        // }),
        history: createHistory(),
        onError (error) {
          //message.error(error.message)
        },
  }
);

// 2. Plugins
app.use({});

// 3. Model
app.model(require('./models/IndexPage').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
