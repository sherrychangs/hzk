import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile'
import './map.css'

class Map extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      H:''
    }
  }
  initMap = () => {
    const BMap = window.BMap
    let map = new BMap.Map("container")
    map.addControl(new BMap.NavigationControl()) // 平移缩放控件
    map.addControl(new BMap.ScaleControl()) // 比例尺
    map.addControl(new BMap.OverviewMapControl()) // 缩略地图
    map.addControl(new BMap.MapTypeControl()) // 地图类型
    map.setCurrentCity('北京') // 仅当设置城市信息时，MapTypeControl的切换功能才能可用
    // // 创建地图实例
    let point = new BMap.Point(116.404, 39.915)
    // // 创建点坐标
    map.centerAndZoom(point, 15)
  }
  componentDidMount = () => {
    this.initMap()
    const H = document.documentElement.clientHeight
    this.setState({
      H:H-45
    })
    
  }
  backToMain = () => {
    const { history } = this.props
    history.goBack()
  }
  
  render() {
    return (
      <div>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => { this.backToMain() }}
        >
          <span>地图找房</span>
        </NavBar>
        <div id='container' style={{ height: this.state.H }}></div>
      </div>
    )
  }
}
export default Map