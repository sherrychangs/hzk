import React, { Component } from 'react'
import { NavBar, Tabs } from 'antd-mobile';
const TabStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '250px',
  backgroundColor: '#fff'
}
class News extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    const tabs = [
      { title: '资讯' },
      { title: '头条' },
      { title: '问答' },
    ]
    return (
      <div>
        <NavBar mode="dark">资讯</NavBar>
        <Tabs tabs={tabs} initialPage={2} animated={false} useOnPan={false}>
          <div style={TabStyle}>
            Content of first tab
          </div>
          <div style={TabStyle}>
            Content of second tab
          </div>
          <div style={TabStyle}>
            Content of third tab
          </div>
        </Tabs>
      </div>
    )
  }
}
export default News