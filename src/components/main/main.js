import React, { Component } from 'react'
import axios from '../../utils/axios'
import { Flex, WhiteSpace, SearchBar, Carousel, WingBlank, Grid, NoticeBar, Card, Badge } from 'antd-mobile';
import './main.css'

const BadgeStyle = {
  marginLeft: 12,
  margin:'3px 5px',
  padding: '0 3px',
  backgroundColor: '#fff',
  borderRadius: 2,
  color: '#21b68a',
  border: '1px solid #21b68a',
}
const titleStyle = {
  margin: 12
}
class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imgHeight: 176,
      data: Array.from(new Array(8)).map((_val, i) => ({
        icon:
          'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
        text: `name${i}`
      })),
      list: [],
      menu: [],
      info: [],
      faq: [],
      homes: [],
      homeList: []
    }
  }

  getData = async (path) => {
    const res = await axios.post(`${path}`)
    const { meta, data } = res
    if (meta.status === 200) {
      return data.list
    }
  }
  fn = (arr,...rest) => {
    let arrNew = []
    for (var i = 0; i < rest.length; i++){
      arrNew.push(arr.splice(0,rest[i]))
    }
    return arrNew
  }
  handleMenu = () => {
    
  }
  componentDidMount = async () => {
    const result = await Promise.all([
      this.getData(`homes/swipe`),
      this.getData(`homes/menu`),
      this.getData(`homes/info`),
      this.getData(`homes/faq`),
      this.getData(`homes/house`),
      this.getData(`homes/list`)
    ])
    console.log(result);
    this.setState({
      list: result[0],
      menu: result[1],
      info: result[2],
      faq: result[3],
      homes: result[4],    
    }, () => {
      const data = this.state.menu.map((item, i) => ({
        icon: `http://127.0.0.1:8086/public/0${i + 1}.png`,
        text: item.menu_name,
      }));
      let homeList = this.fn(this.state.homes,2,2,3)
      this.setState({
        data,
        homeList,
      })
    })
  }

  render() {
    const CarouselTemplate = this.state.list.map((item, i) => {
      return <a
        key={i}
        href="#"
        style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
      >
        <img
          src={item.original}
          alt="loading"
          style={{ width: '100%', verticalAlign: 'top' }}
          onLoad={() => {
            // fire window resize event to change height
            window.dispatchEvent(new Event('resize'));
            this.setState({ imgHeight: 'auto' });
          }} />
      </a>
    })
    const NoticeTemplate = this.state.info.map((item, i) => {
      return <NoticeBar key={i} mode="link" marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
        {item.info_title}
      </NoticeBar>
    })
    const faqTemplate = this.state.faq.map((item, i) => {
      return <Card key={i}>
        <Card.Header
          title={item.question_name}
          thumb={<Badge text={'?'} hot />}
        />
        <Card.Body>
          <div>
            <Badge text={item.question_tag} style={BadgeStyle} />
            <Badge text={item.atime} style={BadgeStyle} />
            <Badge text={item.qnum} style={BadgeStyle} />
          </div>
        </Card.Body>
      </Card>
    })
    const homeTemplate = this.state.homeList.map((item, i) => {
      const homeTemplateItem = item.map((val, j) => {
        return <Card key={j}>
          <Card.Header
            thumb='http://127.0.0.1:8086/public/home.png'
            extra={<div style={{textAlign:'left',padding:'10px'}}>
              <Badge text={val.home_desc} style={BadgeStyle} />
              <Badge text={val.home_name} style={BadgeStyle} />
              <Badge text={val.home_price} style={BadgeStyle} />
              <Badge text={val.home_tags} style={BadgeStyle} />
            </div>} />
        </Card>
      })
      let title = ['最新开盘', '二手精选', '租个家']
      return (
        <div key={i}>
          <b style={titleStyle}>{title[i]}</b>
          {homeTemplateItem}
        </div>
      )
    })
    return (
      <div>
        <SearchBar placeholder="搜房源" />
        <WingBlank size="sm">
          {/* 轮播图   */}
          <Carousel autoplay={true} infinite>{CarouselTemplate}</Carousel>
          {/* 菜单宫格 */}
          <Grid data={this.state.data} isCarousel onClick={() => {
            this.handleMenu()
          }} />
          <WhiteSpace size="sm" />
          {/* 好客资讯 */}
          {NoticeTemplate}
          {/* 好客问答 */}
          <WhiteSpace size="md" />
          <b style={titleStyle}>好客问答</b>
          {faqTemplate}
          {/* 房屋列表 */}
          <WhiteSpace size="md" />          
          {homeTemplate}
        </WingBlank>
      </div>
    )
  }
}
export default Main