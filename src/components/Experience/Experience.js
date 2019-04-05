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
  @media (max-width: 767px) {
    .description {
      width: calc(100%);
    }
  }
`;

export default function Experience({ workExperience }) {
  return (
    <Container>
      <h2>Work Experience</h2>
      <div className='container'>
        {workExperience &&
          workExperience.length > 0 &&
          workExperience.map((exp, index) => {
            return (
              <div className={index === 0 ? 'detail active' : 'detail'} key={exp.id}>
                <div className={'detail-container active'}>
                  <div
                    className='company-logo verified'
                    style={{
                      backgroundImage: `url(${exp.company.logo_url})`
                    }}
                  />
                  <div className='description'>
                    <h3 className='name-header verified'>{exp.company.name}</h3>
                    <h3 className='name'>{exp.designation}</h3>
                    {exp.location_name && <h3 className='title'>{exp.location_name}</h3>}
                    <h3 className='position-duration'>{exp.duration}</h3>
                  </div>
                  <div className='verification'>
                    <div className='sub-verification'>
                      <i className='fas fa-user-check' />
                      <div className='description-text'>Peer Verified</div>
                    </div>
                    <div className='sub-verification'>
                      <i className='fas fa-check-circle' />
                      <div className='description-text'>Company Verified</div>
                    </div>
                  </div>
                </div>
                {exp.skills_data.length > 0 && (
                  <div className='worked-on-description'>
                    <div className='worked-on'>
                      WORKED ON:
                      {exp.skills_data.map(skill => {
                        return <span key={skill.id}>{skill.skill_name}</span>;
                      })}
                    </div>
                  </div>
                )}
                {exp.description && (
                  <div className='worked-on-description'>
                    <div className='work-done' dangerouslySetInnerHTML={{ __html: exp.description }} />
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </Container>
  );
}
