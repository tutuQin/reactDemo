import React from 'react';
import {  Router,Route, Switch,Redirect, routerRedux } from 'dva/router';
import PropTypes from 'prop-types'
import { LocaleProvider } from 'antd';
import dynamic from 'dva/dynamic'
import IndexPage from './routes/IndexPage';

const { ConnectedRouter } = routerRedux
 function RouterConfig({history,app}){
     console.log('33',app)
    const error = dynamic({
        app,
        component: () => import('./routes/login'),
    })
    const routes = [
      {
        path: '/login',
        // models: () => [import('./models/IndexPage')],
        component: () => import('./routes/login/'),
      },
      {
        path: '/home',
        // models: () => [import('./models/login')],
        component: () => import('./routes/home/'),
      },
      {
        path: '/my',
        // models: () => [import('./models/login')],
        component: () => import('./routes/my/'),
      }
    ]
    return (
      <ConnectedRouter history={history}>
              <IndexPage>
                  <Switch>
                      {/* 启动后第一个加载的页面 */}
                      <Route exact path="/" render={() => (<Redirect to="/login" />)} /> 
                          {
                              routes.map(({ path, ...dynamics }, key) => (
                                  <Route
                                      key={key}
                                      exact
                                      path={path}
                                      component={dynamic({
                                          app,
                                          ...dynamics,
                                      })}
                                  />
                              ))
                          }
                      {/*<Route component={error} />*/}
                  </Switch>
              </IndexPage>
          </ConnectedRouter>
    )
}

// function RouterConfig({ history,app }) {
//     const error = dynamic({
//                 app,
//                 component: () => import('./routes/login'),
//             })
//             const routes = [
//               {
//                 path: '/login',
//                 // models: () => [import('./models/login')],
//                 component: () => import('./routes/login/'),
//               },
//               {
//                 path: '/home',
//                 // models: () => [import('./models/login')],
//                 component: () => import('./routes/home/'),
//               }
//             ]
//   return (
//     <IndexPage>
//         <Router history={history}>
//             <Switch>
//                 <Route path="/" exact component={IndexPage} />
//                 {
//                               routes.map(({ path, ...dynamics }, key) => (
//                                   <Route
//                                       key={key}
//                                       exact
//                                       path={path}
//                                       component={dynamic({
//                                           app,
//                                           ...dynamics,
//                                       })}
//                                   />
//                               ))
//                           }
//             </Switch>
//         </Router>
//     </IndexPage>

//   );
// }
RouterConfig.propTypes = {
  history: PropTypes.object,
  IndexPage: PropTypes.object,
}
export default RouterConfig;
