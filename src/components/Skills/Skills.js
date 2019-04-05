import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
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
`;

export default function Skills({ skills }) {
  return (
    <Container className='skills-container'>
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
                        left: skill.percentile_group === 5 ? '159px' : skill.percentile_group === 4 ? '119px' : null
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
    </Container>
  );
}
