import React, { Component } from 'react'
import ReactEcharts from 'echarts-for-react'

class Charts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      option:{}
    }
  }
  getOption = () => {
    let option = {
      title: {
        text: '贷款数据统计',
        subtext: '',
        x: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: ['贷款利息', '贷款本金']
      },
      series: [
        {
          name: '贷款数据统计',
          type: 'pie',
          radius: '55%',
          center: ['50%', '60%'],
          data: [
            { value: 335, name: '贷款利息' },
            { value: 1548, name: '贷款本金' }
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    }
    return option
  }
  componentDidMount = () => {
    const option = this.getOption()
    this.setState({
      option
    })
  }
  render() {
    return <ReactEcharts option={this.getOption()} />
  }
}
export default Charts