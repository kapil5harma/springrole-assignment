import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  background-color: #6a819b;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  padding: 18px 30px;
  color: #fff;
  transition: all 0.3s;
  transition-timing-function: ease-in-out;
  opacity: 1;
  height: auto;
  .left {
    max-width: 500px;
    width: 50%;
    line-height: 19px;
    font-weight: 100;
    span {
      font-weight: 600;
      padding-right: 5px;
    }
  }
  .right {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .signup-btn {
      border-width: 0px;
      background-color: #fff;
      font-weight: 600;
      :hover {
        background-color: #004fc1;
        color: #fff;
      }
    }
    .login-btn {
      border-color: #fff;
      color: #fff;
      font-weight: 600;
    }
    i {
      cursor: pointer;
      color: #fff;
      margin-left: 30px;
      font-size: 1.9rem;
    }
  }
  @media (max-width: 767px) {
    flex-direction: column;
    .left {
      width: 100%;
      text-align: center;
      margin-bottom: 15px;
    }
    .right {
      width: 100%;
      justify-content: center;
      position: relative;
      i {
        top: -52px;
        position: absolute;
        right: -15px;
      }
    }
  }
`;

export default function LoggedOutBanner() {
  return (
    <Container className='logged-out-banner '>
      <div className='left'>
        <span>Join Kartik on SpringRole -</span>A verified professional network powered by the blockchain
      </div>
      <div className='right'>
        <div className='button signup-btn'>
          <div className=''>Join SpringRole</div>
        </div>
        <div className='button login-btn'>
          <div className=''>Login</div>
        </div>
        <i className='fas fa-times' />
      </div>
    </Container>
  );
}
