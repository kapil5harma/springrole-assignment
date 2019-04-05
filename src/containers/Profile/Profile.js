import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Creators } from './store';
import styled from 'styled-components';
import { Content } from '../../components/StyledComponents';

const ProfileContainer = styled.div`
  font-size: 1.4rem;
  display: flex;
  justify-content: center;
  padding: 0 15px;
  margin: 15px 0;
  .content {
    flex-direction: column;
  }
  .logged-out-banner {
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
  }
  .user-info {
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
  }

  /* user-endorse-and-experience-container */
  .user-endorse-and-experience-container {
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
  }

  /* Tagline */
  .tagline {
    width: 100%;
    padding: 20px 0;
    text-align: center;
    background-color: #fff;
    margin: 0 0 15px 0;
    font-style: italic;
    font-size: 22px;
    font-weight: 400;
  }

  /* Experience Education Skills */
  .experience-education-skills {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    margin: auto;
    max-width: 970px;
    @media (min-width: 1200px) {
      max-width: 1170px;
    }
    .left {
      width: 67%;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
      position: relative;
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
    }
    .right {
      @media (min-width: 768px) {
        width: calc(33% - 20px);
      }
      .skills-container {
        width: 100%;
        margin-bottom: 20px;
        @media (min-width: 768px) {
          margin-left: 20px;
        }
        h2 {
          font-size: 18px;
          font-weight: 500;
          margin-bottom: 15px;
        }
        .skills-inner {
          background-color: #fff;
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
          .head {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 114px;
            background-color: #ecf5ff;
            .thumbs-up {
              transition: all 0.5s;
              transition-timing-function: ease-in-out;
              height: 100%;
              width: 90px;
              background-image: url('https://frontend.springrole.com/a012b4ff3172ae65b8df1d6b0ccc1d56.png');
              background-size: 100%;
              background-position: center;
              position: absolute;
              right: 0px;
              background-repeat: no-repeat;
            }
            .head-text {
              color: #81a0b8;
              font-weight: 300;
              font-size: 18px;
            }
            a {
              display: flex;
              justify-content: center;
              align-items: center;
              text-decoration: none;
              width: 104px;
              height: 30px;
              background-color: #fff;
              color: #004fc1;
              margin-top: 14px;
              border-radius: 15px;
              font-size: 12px;
              font-weight: 500;
            }
          }
          .list {
            padding: 20px 20px 0px 20px;
            .skill-experience-container {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              .skill-name {
                color: #4a4a4a;
                font-size: 18px;
                font-weight: 400;
                margin-bottom: 8px;
              }
              .meter {
                display: flex;
                justify-content: center;
                margin-bottom: 10px;
                .meter-pellet {
                  width: 39px;
                  height: 8px;
                  margin: 0 1px 0 0;
                }
                .meter-pellet-1 {
                  border-radius: 8px 0 0 8px;
                  background-color: #f6efed;
                }
                .meter-pellet-2 {
                  background-color: #ffe1be;
                }
                .meter-pellet-3 {
                  background-color: #f7be6c;
                }
                .meter-pellet-4 {
                  background-color: #ff8100;
                }
                .meter-pellet-5 {
                  background-color: #d86d00;
                  border-radius: 0 8px 8px 0;
                }
                .meter-active-pellet {
                  border-radius: 8px !important;
                  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.3);
                  height: 13px;
                  width: 42px;
                  border: 1px solid #fff;
                  position: absolute;
                  top: -3px;
                  left: 0px;
                  transition: all 1.2s;
                  transition-delay: 0.5s;
                  transition-timing-function: ease-out;
                }
              }
              .endorsed-by {
                font-size: 10px;
                color: #4a4a4a;
                font-weight: 400;
                padding-bottom: 20px;
                margin-bottom: 20px;
                border-bottom: 1px solid #d2d2d2;
                text-align: center;
                width: 100%;
              }
            }
          }
          .note {
            color: #4a4a4a;
            padding: 7px 0;
            font-size: 10px;
            background-color: #f7f7f7;
            text-align: center;
            a {
              margin: 0 3px;
              text-decoration: none;
              color: #004fc1;
              font-weight: 500;
            }
          }
        }
      }
    }
  }
`;

class Profile extends Component {
  componentDidMount = () => {
    this.props.fetchWorkExperience();
    this.props.fetchEducation();
    this.props.fetchSkills();
  };

  render() {
    const { workExperience, education, skills } = this.props;

    return (
      <ProfileContainer className='profile-container'>
        <Content className='content'>
          <div className='logged-out-banner '>
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
          </div>

          <div className='user-info'>
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
          </div>

          {/* user-endorse-and-experience-container */}
          <div className='user-endorse-and-experience-container'>
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
          </div>

          {/* Tagline */}
          <div className='tagline '>Building the protocol for professional attestations on the blockchain.</div>

          {/* Experience, Education and Skills */}
          <div className='experience-education-skills'>
            <div className='left'>
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
            </div>

            <div className='right'>
              <div className='skills-container'>
                <h2>Skills</h2>
                <div className='skills-inner'>
                  <div className='head'>
                    <div className='thumbs-up' />
                    <div className='head-text'>Introducing</div>
                    <div className='head-text'>Endorsements</div>
                    <a
                      href='https://springrole.freshdesk.com/support/solutions/articles/43000433785-what-do-the-endorsement-colors-mean-'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Learn More
                    </a>
                  </div>

                  <div className='list  '>
                    {skills &&
                      skills.length > 0 &&
                      skills.map((skill, index) => {
                        return (
                          <div className='skill-experience-container' key={skill.id}>
                            <div className='skill-name '>{skill.skill_name}</div>
                            <div className='meter'>
                              <div className='meter-pellet meter-pellet-1' />
                              <div className='meter-pellet meter-pellet-2' />
                              <div className='meter-pellet meter-pellet-3' />
                              <div className='meter-pellet meter-pellet-4' />
                              <div className='meter-pellet meter-pellet-5' />
                              <div
                                className={`meter-active-pellet meter-pellet-${skill.percentile_group}`}
                                style={{
                                  left:
                                    skill.percentile_group === 5
                                      ? '159px'
                                      : skill.percentile_group === 4
                                      ? '119px'
                                      : null
                                }}
                              />
                            </div>
                            <div className='endorsed-by '>
                              Endorsed by {skill.endorsed_by.users.map(user => `${user.name.full}, `)} and{' '}
                              {skill.endorsed_by.total_count - 3} others
                            </div>
                          </div>
                        );
                      })}
                  </div>

                  <div className='note'>
                    The darker the color, the higher the proficiency at a particular skill.
                    <a
                      href='https://springrole.freshdesk.com/support/solutions/articles/43000433785-what-do-the-endorsement-colors-mean-'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Know More &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Content>
      </ProfileContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.profile.loading,
    workExperience: state.profile.workExperience,
    education: state.profile.education,
    skills: state.profile.skills
  };
};

const mapDispatchToProps = dispatch => ({
  fetchWorkExperience: () => dispatch(Creators.fetchWorkExperience()),
  fetchEducation: () => dispatch(Creators.fetchEducation()),
  fetchSkills: () => dispatch(Creators.fetchSkills())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
