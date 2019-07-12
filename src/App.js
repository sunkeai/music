import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    NavLink,
    Route,
    Switch
} from 'react-router-dom';
//路由
import router from './router'
import GuardRouterMore from './guardCom/GuardRouterMore'
//组件
import TabExample from './views/Common/TabBarExample';
//视图组件
import Login from './views/Common/Login'
// import Video from './views/Video/Video'
// import Mine from './views/Mine/Mine'
// import Friend from './views/Friend/Friend'
// import Account from './views/Account/Account'

require('./css/public.css');
function App() {
  return (
      <Router>
          {
              router.map((v,i)=>{
                  return (
                      <Route key={i} exact={v.exact} path={v.path} render={()=><GuardRouterMore {...v}></GuardRouterMore>}></Route>
                  )
              })
          }
      </Router>
  );
}

export default App;
