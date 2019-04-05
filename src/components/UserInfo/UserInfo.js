import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  border-radius: 4px;
  display: flex;
  margin: 15px 0;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  position: relative;
  .message-btn {
    position: absolute;
    top: 15px;
    right: 15px;
    z-index: 1;
    i {
      margin-left: 5px;
    }
  }
  .info-container {
    width: calc(100% - 200px);
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 0px;
    position: relative;
    .user-personal {
      h1 {
        font-size: 24px;
        font-weight: 600;
      }
      h4 {
        margin: 5px 0;
        color: #2b2e43;
        opacity: 0.4;
        font-weight: 600;
      }
    }
    .user-proficiency {
      display: flex;
      flex-wrap: wrap;
      .skill-widget-container {
        height: 31px;
        background-color: #f1f1f1;
        background: #f1f1f1;
        line-height: 31px;
        padding: 0 41px 0 10px;
        border-radius: 21px;
        display: flex;
        align-items: center;
        position: relative;
        font-size: 12px;
        margin-right: 10px;
        .circle {
          background-color: #d86d00;
          border: 2px solid #ffffff;
          height: 100%;
          width: 31px;
          position: absolute;
          right: 0px;
          cursor: pointer;
          box-sizing: border-box;
          border-radius: 50%;
        }
        .light {
          background: #ff8100;
        }
      }
    }
    .user-profile-url {
      padding: 10px 0;
      background-color: #fafafa;
      display: flex;
      align-items: center;
      .url {
        color: #808080;
        font-weight: 500;
      }
      i {
        font-size: 1.1rem;
        margin-left: 5px;
      }
    }
  }
  @media (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    .message-btn {
      top: 260px;
      left: 50%;
      transform: translateX(-50%);
    }
    .info-container {
      padding: 15px 0 0 0;
      width: 100%;
      h1 {
        margin-bottom: 80px;
      }
      .user-proficiency {
        justify-content: center;
        margin: 15px 0;
      }
      .user-profile-url {
        justify-content: center;
      }
    }
  }
`;

export default function UserInfo() {
  return (
    <Container className='user-info'>
      <div className='button message-btn'>
        <div className=''>Message</div>
        <i className='fas fa-comments' />
      </div>
      <img
        src='https://springrole-assets.imgix.net/user/3/profile/f686d37a-3ea5-4c3b-a2b1-c0f67cc18d5f.jpg'
        delay='25'
        width='200'
        height='200'
        style={{ objectFit: 'cover' }}
        alt='profile-img'
      />
      <div className='info-container'>
        <div className='user-personal'>
          <h1>Kartik Mandaville</h1>
          <h4>{''}</h4>
          <h4>CEO at SpringRole</h4>
          <h4>India</h4>
        </div>
        <div className='user-proficiency'>
          <div className='skill-widget-container '>
            <div className=''>Solidity</div>
            <div className='circle' />
          </div>
          <div className='skill-widget-container '>
            <div className=''>Entrepreneurship</div>
            <div className='circle' />
          </div>
          <div className='skill-widget-container '>
            <div className=''>Technology</div>
            <div className='circle light' />
          </div>
        </div>
        <div className='user-profile-url'>
          <div className='url '>
            https://www.springrole.com/kartik <i className='fas fa-link' />
          </div>
        </div>
      </div>
    </Container>
  );
}
