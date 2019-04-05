import { createReducer } from 'reduxsauce';
import { Types } from './actions';

// Initial State
const INITIAL_STATE = {
  loading: false,
  workExperience: null,
  education: null,
  skills: null
};

// ************************ Fetch WorkExperience ************************
const fetchWorkExperienceStart = (state = INITIAL_STATE, action) => {
  return { ...state, loading: true };
};

const fetchWorkExperienceSuccess = (state = INITIAL_STATE, action) => {
  return { ...state, workExperience: action.payload, loading: false };
};

const fetchWorkExperienceFailure = (state = INITIAL_STATE, action) => {
  return { ...state, loading: false };
};
// _____________________________________________________________________

// ************************** Fetch Education **************************
const fetchEducationStart = (state = INITIAL_STATE, action) => {
  return { ...state, loading: true };
};

const fetchEducationSuccess = (state = INITIAL_STATE, action) => {
  return { ...state, education: action.payload, loading: false };
};

const fetchEducationFailure = (state = INITIAL_STATE, action) => {
  return { ...state, loading: false };
};
// _____________________________________________________________________

// *************************** Fetch Skills ***************************
const fetchSkillsStart = (state = INITIAL_STATE, action) => {
  return { ...state, loading: true };
};

const fetchSkillsSuccess = (state = INITIAL_STATE, action) => {
  return { ...state, skills: action.payload, loading: false };
};

const fetchSkillsFailure = (state = INITIAL_STATE, action) => {
  return { ...state, loading: false };
};
// _____________________________________________________________________

// Define Handlers
const HANDLERS = {
  [Types.FETCH_WORK_EXPERIENCE_START]: fetchWorkExperienceStart,
  [Types.FETCH_WORK_EXPERIENCE_FAILURE]: fetchWorkExperienceFailure,
  [Types.FETCH_WORK_EXPERIENCE_SUCCESS]: fetchWorkExperienceSuccess,

  [Types.FETCH_EDUCATION_START]: fetchEducationStart,
  [Types.FETCH_EDUCATION_FAILURE]: fetchEducationFailure,
  [Types.FETCH_EDUCATION_SUCCESS]: fetchEducationSuccess,

  [Types.FETCH_SKILLS_START]: fetchSkillsStart,
  [Types.FETCH_SKILLS_FAILURE]: fetchSkillsFailure,
  [Types.FETCH_SKILLS_SUCCESS]: fetchSkillsSuccess
};

// Create and Export Reducer
export const profileReducer = createReducer(INITIAL_STATE, HANDLERS);
