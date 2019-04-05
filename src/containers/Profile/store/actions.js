import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  fetchWorkExperience: null,
  fetchWorkExperienceStart: null,
  fetchWorkExperienceSuccess: ['payload'],
  fetchWorkExperienceFailure: null,

  fetchEducation: null,
  fetchEducationStart: null,
  fetchEducationSuccess: ['payload'],
  fetchEducationFailure: null,

  fetchSkills: null,
  fetchSkillsStart: null,
  fetchSkillsSuccess: ['payload'],
  fetchSkillsFailure: null
});

export { Types, Creators };
