import React from 'react';

import { Route } from 'react-router-dom';

import News from '../News';
import Index from '../Index';
import HouseList from '../HouseList';
import Profile from '../Profile';

import { TabBar } from 'antd-mobile';

import './index.css'

// TabBar数据
const tabItems =[
    {
        title:'首页',
        icon:'icon-ind',
        path:'/home/index'
    },
    {
        title:'找房',
        icon:'icon-findHouse',
        path:'/home/list'
    },
    {
        title:'咨询',
        icon:'icon-infom',
        path:'/home/news'
    },
    {
        title:'我的',
        icon:'icon-my',
        path:'/home/profile'
    }
]

export default class Home extends React.Component {
    state = {
        // 默认选中的TabBar菜单项
        selectedTab: this.props.location.pathname
        
    };

    // 渲染TabBar.Item
    renderTabBarItem(){
        return tabItems.map(item => <TabBar.Item
            title={item.title}
            key={item.title}
            icon={<i className={`iconfont ${item.icon}`}/>}
            selectedIcon={<i className={`iconfont ${item.icon}`}/>}
            selected={this.state.selectedTab === item.path}
            
            onPress={() => {
              this.setState({
                selectedTab: item.path,
              });

            //   路由切换
              this.props.history.push(item.path)
            }}
          />)
    }

    // 渲染每个TabBar.Item的内容
    renderContent(pageText) {
        return (
          <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
            <div style={{ paddingTop: 60 }}>Clicked “{pageText}” tab， show “{pageText}” information</div>
            <a style={{ display: 'block', marginTop: 40, marginBottom: 20, color: '#108ee9' }}
              onClick={(e) => {
                e.preventDefault();
                this.setState({
                  hidden: !this.state.hidden,
                });
              }}
            >
              Click to show/hide tab-bar
            </a>
            <a style={{ display: 'block', marginBottom: 600, color: '#108ee9' }}
              onClick={(e) => {
                e.preventDefault();
                this.setState({
                  fullScreen: !this.state.fullScreen,
                });
              }}
            >
              Click to switch fullscreen
            </a>
          </div>
        );
      }

    render(){
        // console.log(this.props.location.pathname)
        return(
            <div className="home">
                {/* 渲染子路由 */}
                <Route path="/home/news" component={News} />
                <Route exact path="/home" component={Index} />
                <Route path="/home/list" component={HouseList} />
                <Route path="/home/profile" component={Profile} />
                {/* TabBar */}
                
                <TabBar tintColor="#21b97a" noRenderContent={true} barTintColor="white" >
                    {this.renderTabBarItem()}
                </TabBar>
            </div>
        )
    }
}