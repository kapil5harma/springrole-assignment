import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  h2 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 15px;
  }
  .container {
    width: 100%;
    margin-bottom: 20px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
    .multiple {
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      position: relative;
      @media (min-width: 768px) {
        align-items: flex-end;
      }
      .position-info {
        display: flex;
        width: calc(100% - 55px);
        border: solid #efefef;
        border-width: 0 0 0 1px;
        justify-content: space-between;
        position: relative;
        min-height: 115px;
        flex-wrap: wrap;
        margin-left: 10px;
      }
    }
    .detail {
      background-color: #fff;
      border-bottom: 1px solid #efefef;
      &.multiple {
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        position: relative;
        @media (min-width: 768px) {
          align-items: flex-end;
        }
      }
      .detail-container {
        min-height: 120px;
        flex-wrap: wrap;
        display: flex;
        padding-left: 20px;
        justify-content: space-between;
        .company-logo {
          height: 60px;
          border-radius: 10px;
          width: 60px;
          background-repeat: no-repeat;
          background-position: center;
          background-size: contain;
          margin-top: 20px;
          &.verified {
            border: 7px solid #ecf5ff;
          }
        }
        .university-logo {
          background-image: url('https://frontend.springrole.com/66995ea0a66c78113bc7930e926104fe.png');
          height: 80px;
          margin-top: 20px;
          width: 80px;
          background-repeat: no-repeat;
          background-position: center;
          background-size: contain;
        }
        .description {
          /* padding: 20px 15px 0 25px; */
          padding: 20px 15px 0 0px;
          width: calc(100% - 251px);
          font-size: 1.2rem;
          h3 {
            color: #959595;
            font-size: 12px;
            font-weight: 400;
            margin-bottom: 4px;
          }
          .name-header {
            width: fit-content;
            border-radius: 15px;
            font-size: 12px;
            padding: 4px 8px;
            color: #4a4a4a;
            position: relative;
            left: -7px;
          }
          .name {
            color: #4a4a4a;
            font-size: 16px;
            font-weight: 600;
          }
        }
        .university-desc {
          width: calc(100% - 121px) !important;
          padding: 25px 15px 0 0px;
        }
        .verification {
          max-width: 130px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          .sub-verification {
            padding: 10px 0;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            text-align: left;
            i {
              font-size: 1.6rem;
              -webkit-text-fill-color: green;
            }
            .description-text {
              font-size: 10px;
              color: #959595;
              margin-top: 5px;
              padding: 0 15px 0 5px;
            }
          }
        }
      }

      &.active {
        background: #ecf5ff;
      }

      .worked-on-description {
        background: white;
        flex-direction: column;
        color: #959595;
        display: flex;
        line-height: 16px;
        justify-content: center;
        align-items: flex-start;
        padding-left: 120px;
        font-size: 12px;
        .worked-on {
          margin: 10px 0;
          font-size: 10px;
          span {
            border-radius: 21.29px;
            padding: 5px 8px;
            background-color: #efefef;
            position: relative;
            font-size: 12px;
            font-weight: 700;
            display: inline-block;
            color: #4a4a4a;
            margin: 0 7px;
            text-transform: capitalize;
          }
        }
        .work-done {
          margin: 10px 0px;
          max-width: 450px;
        }
      }
    }
  }
`;

export default function Education({ education }) {
  return (
    <Container>
      <h2>Education</h2>
      <div className='container education'>
        {education &&
          education.length > 0 &&
          education.map((exp, index) => {
            return (
              <div className={'detail'} key={exp.id}>
                <div className='detail-container'>
                  <div className='university-logo verified' />
                  <div className='description university-desc'>
                    <h3 className='name'>{exp.institution_name}</h3>
                    {exp.department && <h3 className='title'>{exp.department}</h3>}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </Container>
  );
}
