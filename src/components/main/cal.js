import React, { Component } from 'react'
import { NavBar, Icon, Tabs, Card, SegmentedControl, InputItem, Button, WhiteSpace } from 'antd-mobile'
import Charts from './charts'
import './cal.css';
const tabs= [
  { title: '公积金贷款' },
  { title: '商业贷款' },
  { title: '组合贷款' },
]
const titleList = ['贷款方式', '贷款年限', '贷款利率']
const values = {
  0: ['按贷款总额', '按房间面积'],
  1: ['10', '20', '30'],
  2: ['3.25', '9', '9.5']
}
class Cal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue:''    
    }
  }
  backToMain = () => {
    const { history } = this.props
    history.goBack()
  }
  onChange = (e) => {
    console.log(`selectedIndex:${e.nativeEvent.selectedSegmentIndex}`);
  }
  onValueChange = (value) => {
    console.log(value);
  }
  changeInputValue = (v) => {
    this.setState({
      inputValue:v
    })
  }
  handleCal = () => {
    console.log('cal---');
  }
  render() {
    const calTemplate = titleList.map((item, i) => {
      return <Card.Header
          key={i}  
          title={titleList[i]}
          extra={<SegmentedControl
            values={values[i]}      
            onChange={this.onChange}
            onValueChange={this.onValueChange} />}
      />
      
    })   
    calTemplate.splice(1, 0,
      <Card.Header
        key={'input'}
        title={'贷款总额'}
        extra={<InputItem
          value={this.state.inputValue}
          onChange={this.changeInputValue}
          placeholder="0.00"
          extra="¥"
        />}
      />
      )
    return (
      <div>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => { this.backToMain() }}
        >
          <span>贷款利率计算</span>
        </NavBar>

        <Tabs tabs={tabs} initialPage={0} animated={true} useOnPan={true}>
          <div>
            <Card full>  
              {calTemplate}
            </Card>  
            <Button type="primary" onClick={this.handleCal}>计算</Button>
            <WhiteSpace size="lg" />
            <Charts />
          </div>
          <div>
            2
          </div>
          <div>
            3
          </div>
        </Tabs>
      </div>
    )
  }
}
export default Cal