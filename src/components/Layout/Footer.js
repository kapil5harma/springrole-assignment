import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
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
  @media (max-width: 767px) {
    padding-top: 0;
    .content {
      display: block;
      width: 100%;
      .column {
        width: 100%;
        display: block;
        .heading {
          font-size: 12px;
          text-align: center;
        }
        .body {
          display: flex;
          justify-content: space-evenly;
          a {
            font-size: 10px;
          }
        }
        .branding {
          width: auto;
          height: 15px;
          margin: 0;
          margin-bottom: 20px;
        }
        .row {
          justify-content: center;
          a {
            max-width: 148px;
            line-height: 2.5;
          }
        }
        hr {
          display: block;
          width: 80%;
          margin: 0 auto;
          margin-bottom: 10px;
          border: solid 0.5px #d2d2d2;
          opacity: 0.2;
          margin-bottom: 20px;
          margin-top: 20px;
        }
      }
    }
    .copyrights {
      padding-bottom: 40px;
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
    hr {
      display: none;
    }
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
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
          <hr />
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
          <hr />
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
          <hr />
        </div>
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
    </StyledFooter>
  );
}
