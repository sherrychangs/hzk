import React, { Component } from 'react'
import { TabBar } from 'antd-mobile';
import Main from "../main/main";
import News from "../news/news";
import Chat from "../chat/chat";
import Mine from "../mine/mine";

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 'blueTab',
      hidden: false,
      fullScreen: true,
    }
  }
  renderContent(pageText) {
    if (pageText === 'Main') {
      return <Main /> 
    } else if (pageText === 'News') {
      return <News />
    } else if (pageText === 'Chat') {
      return <Chat />
    } else {
      return <Mine />
    }
  }
  render() {
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
          tabBarPosition="bottom"
        >
          <TabBar.Item
            title="主页"
            key="Main"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(http://127.0.0.1:8086/public/home-empty.png) center center /  21px 21px no-repeat'
            }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(http://127.0.0.1:8086/public/home-fill.png) center center /  21px 21px no-repeat'
            }}
            />
            }
            selected={this.state.selectedTab === 'blueTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
            >
            {this.renderContent('Main')}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat'
              }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat'
              }}
              />
            }
            title="资讯"
            key="News"
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
            >
            {this.renderContent('News')}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(http://127.0.0.1:8086/public/wechat.png) center center /  21px 21px no-repeat'
              }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(http://127.0.0.1:8086/public/wechat-fill.png) center center /  21px 21px no-repeat'
              }}
              />
            }
            title="微聊"
            key="Chat"
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
            >
            {this.renderContent('Chat')}
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: 'http://127.0.0.1:8086/public/user.png' }}
            selectedIcon={{ uri: 'http://127.0.0.1:8086/public/user1.png' }}
            title="我的"
            key="Mine"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
            >
            {this.renderContent('Mine')}
          </TabBar.Item>
        </TabBar>
      </div>
    )
  }
}
export default Home