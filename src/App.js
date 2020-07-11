import React from 'react';
import Plan from './Component/Plan/Plan'
import {BrowserRouter, Switch,Route, Link} from 'react-router-dom'
import Search from './Component/Search/Search';
import 'antd/dist/antd.css'
import { Layout, Menu } from 'antd';
import "./style.css"

const {  Content,  Sider } = Layout;

class App extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
      <BrowserRouter>
        <Sider >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1"><Link to="/">Plan</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/search">Search</Link></Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Content>
             <Switch>
                <Route path="/" exact={true} component={Plan} />
               <Route path="/search" component={Search} />
             </Switch>
          </Content>
        </Layout>
        </BrowserRouter>
      </Layout>
    );
  }
}
export default App