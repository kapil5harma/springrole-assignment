import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 22px;
  background-color: #fff;
  margin: 0 0 15px 0;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  .button-container {
    display: flex;
    .button {
      margin-right: 22px;
      font-weight: 500;
    }
    .blue-btn {
      background-color: #004fc1;
      color: #fff;
      :hover {
        background-color: #fff;
        color: #004fc1;
      }
    }
  }
  .experience-container {
    display: flex;
    color: #959595;
    font-size: 10px;
    .experience-bars {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .bars {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        height: 32px;
        width: 34px;
        margin-bottom: 5px;
        transition: all 1s;
        transition-delay: 1s;
        .text {
          font-size: 18px;
          color: #4a4a4a;
          font-weight: 600;
          top: -9px;
          position: absolute;
          left: -8px;
          span {
            font-size: 8px;
            position: absolute;
            top: -2px;
          }
        }
        .bar-1,
        .bar-2,
        .bar-3 {
          background-color: #efefef;
          width: 10px;
          transition: all 0.4s;
        }
        .bar-1 {
          height: 33%;
          transition-delay: 1s;
          &.active {
            background-color: #f7be6c;
          }
        }
        .bar-2 {
          transition-delay: 1.4s;
          height: 66%;
          &.active {
            background-color: #ff8100;
          }
        }
        .bar-3 {
          transition-delay: 1.8s;
          height: 100%;
          &.active {
            background-color: #d86d00;
          }
        }
      }
      .experience-text {
        color: #959595;
        font-size: 10px;
        line-height: 1.2;
        font-weight: 600;
      }
    }
  }
  .verified-percentile-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
    padding-left: 20px;
    border-left: 1px solid #cbcbcb;
    font-weight: 600;
    .verified-graphic {
      border: 2px dashed #2bc060;
      color: #2bc060;
      height: 3.5rem;
      width: 3.5rem;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 5px;
    }
    .verified-text {
      span {
        position: absolute;
        top: 0px;
        left: 35px;
      }
    }
  }
  @media (max-width: 767px) {
    flex-direction: column-reverse;
    .button-container {
      flex-direction: column;
      .button {
        margin: 20px 0 0 0;
      }
    }
  }
`;

export default function EndorseAndExperience() {
  return (
    <Container className='user-endorse-and-experience-container'>
      <div className='button-container'>
        <div className='button'>
          <div className=''>Endorse +</div>
        </div>
        <div className='button blue-btn'>
          <div className=''>Verify Experience</div>
        </div>
      </div>
      <div>
        <div className='experience-container'>
          <div className='experience-bars'>
            <div className='bars'>
              <div className='text'>
                10+<span>yrs</span>
              </div>
              <div className='bar-1 active ' />
              <div className='bar-2 active ' />
              <div className='bar-3 active ' />
            </div>
            <div className='experience-text'>Experience</div>
          </div>
          <div className='verified-percentile-container'>
            <div className='verified-graphic '>
              <div>50%</div>
            </div>
            <div className='verified-text '>
              Verified <span> ✔ </span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
