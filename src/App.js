import React from 'react';
import {Button} from 'antd-mobile';

import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom'

import Home from './pages/Home'
import CityList from './pages/CityList'


function App() {
  return (
    <Router>
       <div className="App">
         {/* 默认路由匹配时，跳转到/home 实现路由重定向到首页 */}
        <Route path="/" exact render={() => <Redirect to="/home"/>}></Route>
        {/* 配置路由 */}
        <Route path="/home" component={Home} />
        <Route path="/citylist" component={CityList} />
       </div>
    </Router>
  );
}

export default App;
