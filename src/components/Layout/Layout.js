import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Content } from '../StyledComponents';

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

const Footer = styled.footer`
  width: 100%;
  background-color: #0b1547;
  border-top: 10px solid #437bcb;
  padding-top: 60px;
  color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  .copyrights {
    padding: 12px;
    text-align: right;
    margin-right: 20%;
    margin-top: 135px;
    width: 80%;
    a {
      font-weight: 100;
      color: #fff;
      font-size: 10px;
      padding: 0 5px 0 10px;
      text-decoration: none;
      border-right: solid 2px #97979780;
      :last-child {
        border-right: none;
      }
    }
  }
  .content {
    padding-top: 30px;
    display: flex;
    width: 68%;
    justify-content: center;
    .column {
      font-weight: 300;
      display: flex;
      flex: 1;
      flex-direction: column;
      color: #fff;
      .heading {
        font-size: 18px;
        font-weight: 500;
        margin-bottom: 20px;
        color: #fff;
      }
      .body {
        a {
          text-decoration: none;
          font-size: 12px;
          padding: 8px 0;
          color: #f7f7f7;
          max-width: 220px;
          display: block;
        }
      }
      .branding {
        height: 21px;
        width: 118px;
        background-image: url('https://frontend.springrole.com/5c5bff190798b29920e213079e2eeef3.png');
        background-position: center;
        background-size: contain;
        margin: 0 0 20px 15px;
        background-repeat: no-repeat;
      }
      .row {
        display: flex;
        i {
          margin: 8px 15px;
          font-size: 1.5rem;
        }
        a {
          text-decoration: none;
          font-size: 12px;
          padding: 8px 0;
          color: #f7f7f7;
          max-width: 220px;
          display: block;
        }
      }
    }
  }
  @media (min-width: 768px) {
    .content .copyrights-ctr {
      padding: 12px;
      text-align: right;
      margin-right: 20%;
      margin-top: 135px;
      width: 80%;
    }
  }
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
        <Footer>
          <div className='content'>
            <div className='column'>
              <div className='heading'>Connect</div>
              <div className='body'>
                <a target='_blank' rel='noopener noreferrer' href='https://springrole.com/pages/about-us'>
                  About Us
                </a>
                <a target='_blank' rel='noopener noreferrer' href='https://springrole.com/pages/career'>
                  Careers
                </a>
                <a target='_blank' rel='noopener noreferrer' href='https://springrole.com/pages/about-us'>
                  Contact Us
                </a>
              </div>
            </div>
            <div className='column'>
              <div className='heading'>Explore</div>
              <div className='body'>
                <a target='_blank' rel='noopener noreferrer' href='https://springrole.com/pages/spring-token'>
                  Spring Token
                </a>
                <a target='_blank' rel='noopener noreferrer' href='https://blog.springrole.com/'>
                  Blog
                </a>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://springrole.freshdesk.com/support/solutions/folders/43000341674'
                >
                  FAQ
                </a>
              </div>
            </div>
            <div className='column'>
              <div className='branding' />
              <div className='row address'>
                <i className='fas fa-envelope' />
                <a href='https://springrole.com/kartik'>communications@springrole.com</a>
              </div>
              <div className='row address'>
                <i className='fas fa-map-marker-alt' />
                <a href='https://springrole.com/kartik'>
                  No.19, 2nd Floor Amar Plaza, Krishnanagar Industrial Layout Hosur Rd, Bengaluru, Karnataka 560029
                </a>
              </div>
            </div>
            {/* <hr /> */}
          </div>

          <div className='copyrights'>
            <a
              href='https://springrole.com/SpringRole-Terms-of-Service.pdf'
              target='_blank'
              rel='noopener noreferrer'
              className='copyright-content'
            >
              Terms &amp; conditions
            </a>
            <a
              href='https://www.iubenda.com/privacy-policy/94068001'
              target='_blank'
              rel='noopener noreferrer'
              className='copyright-content'
            >
              Privacy policy
            </a>
            <a
              href='https://beta.springrole.com/company/springrole'
              target='_blank'
              rel='noopener noreferrer'
              className='copyright-content'
            >
              © SpringRole 2019
            </a>
          </div>
        </Footer>
      </Fragment>
    );
  }
}

export default Layout;
