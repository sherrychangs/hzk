import React, { Component } from 'react'
import { NavBar, Icon, Card, Badge} from 'antd-mobile'
import axios from '../../utils/axios'

const BadgeStyle = {
  marginLeft: 12,
  margin: '3px 5px',
  padding: '0 3px',
  backgroundColor: '#fff',
  borderRadius: 2,
  color: '#21b68a',
  border: '1px solid #21b68a',
}
class Detail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id:'',
      text: '',
      list:[]
    }
  }
  componentDidMount = async () => {
    console.log(this.props);
    const { text, id } = this.props.location.state.query.params
    const { data, meta } = await axios.post(`homes/list`, { home_type: id })
    console.log(data);
    
    this.setState({
      id,
      text,
      list:data
    })
    
  }
  backToMain = () => {
    const { history } = this.props
    history.goBack()
  }
  render() {    
      const homeTemplate = this.state.list.map((item, i) => {
        return <Card key={i}>
          <Card.Header
            thumb='http://127.0.0.1:8086/public/home.png'
            extra={<div style={{ textAlign: 'left', padding: '10px' }}>
              <Badge text={item.home_name} style={BadgeStyle} />
              <Badge text={item.home_desc} style={BadgeStyle} />
              <Badge text={item.home_price} style={BadgeStyle} />
              <Badge text={item.home_tags} style={BadgeStyle} />
            </div>} />
        </Card>
      })   
    return (
      <div>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={()=> {this.backToMain()}}
        >
          <span>{this.state.text}</span>  
        </NavBar>
        {homeTemplate}
      </div>
    )
  }
}
export default Detail