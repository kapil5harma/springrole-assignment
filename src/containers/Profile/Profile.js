import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Creators } from './store';
import styled from 'styled-components';
import { Content } from '../../components/StyledComponents';
import LoggedOutBanner from '../../components/LoggedOutBanner/LoggedOutBanner';
import UserInfo from '../../components/UserInfo/UserInfo';
import EndorseAndExperience from '../../components/EndorseAndExperience/EndorseAndExperience';
import Experience from '../../components/Experience/Experience';
import Education from '../../components/Education/Education';
import Skills from '../../components/Skills/Skills';

const ProfileContainer = styled.div`
  font-size: 1.4rem;
  display: flex;
  justify-content: center;
  padding: 0 15px;
  margin: 15px 0;
  .content {
    flex-direction: column;
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
    @media (max-width: 767px) {
      width: calc(100% - 30px);
      margin: 15px;
      font-size: 15px;
    }
  }

  /* Experience Education Skills */
  .experience-education-skills {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    margin: auto;
    max-width: 970px;
    .left {
      width: 67%;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
      position: relative;
    }
    .right {
      @media (min-width: 768px) {
        width: calc(33% - 20px);
      }
    }
    @media (min-width: 1200px) {
      max-width: 1170px;
    }
    @media (max-width: 767px) {
      flex-direction: column-reverse;
      .left {
        width: 100%;
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
          <LoggedOutBanner />
          <UserInfo />
          <EndorseAndExperience />
          {/* Tagline */}
          <div className='tagline '>Building the protocol for professional attestations on the blockchain.</div>

          {/* Experience, Education and Skills */}
          <div className='experience-education-skills'>
            <div className='left'>
              <Experience workExperience={workExperience} />
              <Education education={education} />
            </div>

            <div className='right'>
              <Skills skills={skills} />
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
