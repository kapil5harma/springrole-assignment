import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Content } from '../StyledComponents';
import Footer from './Footer';

const Header = styled.header`
  width: 100%;
  height: 60px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.16);
  padding: 0 15px;
  box-sizing: border-box;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 22px;
    width: 117px;
  }
`;

const Main = styled.main`
  width: 100%;
`;

class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Header className='header'>
          <Content className='content'>
            <Link to=''>
              <img src={`https://springrole.com/images/sr_logo_updated.png`} alt='' />
            </Link>
          </Content>
        </Header>
        <Main>{this.props.children}</Main>
        <Footer />
      </Fragment>
    );
  }
}

export default Layout;
