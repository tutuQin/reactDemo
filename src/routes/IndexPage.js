import { connect } from 'dva';
import styles from './IndexPage.css';

import React, { Component } from 'react'
import { routerRedux } from 'dva/router'
import { BackTop, Layout, Modal, Button, Form, Input, Row, Col, Radio } from 'antd'
import { withRouter } from 'dva/router'
import { Menu, Icon } from 'antd';
import { Helmet } from 'react-helmet'
import Login from './login/index';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const logo = './yay.jpg'
 class IndexPage extends Component {
  componentDidMount = () => {
    console.log('1')
    this.props.dispatch({
        type: "indexPage/getTest",
        payload: {
          appRequest: true, 
          companyId: "bxjt",
          sellerId: "kmff"
        }
    });
  
  }
  
  go = (value)=>{
    if(value == 1){
      this.props.dispatch(routerRedux.push({
        pathname:  '/home',
      }))
    }else{
      this.props.dispatch(routerRedux.push({
        pathname:  '/my',
      }))
    }
    
  }

  render() {
    const {children} = this.props
    console.log('children',children)
    return (
      <div>
       
        <span onClick={this.go.bind(this,1)}>首页</span>
        <span onClick={this.go.bind(this,2)}>我的</span>
        <div className={styles.content}>{children}</div>
        {/* <Login></Login> */}
      </div>
    )
  }
}


// function IndexPage() {

//   return (
//     <div className={styles.normal}>
//       <h1 className={styles.title}>Yay! Welcome to dva!</h1>
//       <div className={styles.welcome} />
//       <ul className={styles.list}>
//         <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
//         <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
//       </ul>
//     </div>
//   );
// }

IndexPage.propTypes = {
};

// export default connect()(IndexPage);
export default withRouter(connect(({ indexPage, loading }) => ({ indexPage, loading }))(Form.create()(IndexPage)))
