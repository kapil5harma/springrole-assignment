import axios from 'axios';
import { put } from 'redux-saga/effects';
import { Creators } from './actions';
import { apiEndpoints } from '../../../config/config';

// *************************** Fetch WorkExperience Saga ***************************
export function* fetchWorkExperienceSaga(action) {
  try {
    yield put(Creators.fetchWorkExperienceStart());
    const url = yield apiEndpoints.workExperience;
    const res = yield axios.get(url);
    const workExperience = res.data.work_experiences;
    yield put(Creators.fetchWorkExperienceSuccess(workExperience));
  } catch (err) {
    yield put(Creators.fetchWorkExperienceFailure(err));
  }
}
// _________________________________________________________________________________

// ***************************** Fetch Education Saga *****************************
export function* fetchEducationSaga(action) {
  try {
    yield put(Creators.fetchEducationStart());
    const url = yield apiEndpoints.education;
    const res = yield axios.get(url);
    const education = res.data.educationList;
    yield put(Creators.fetchEducationSuccess(education));
  } catch (err) {
    yield put(Creators.fetchEducationFailure(err));
  }
}
// _________________________________________________________________________________

// ******************************* Fetch Skills Saga *******************************
export function* fetchSkillsSaga(action) {
  try {
    yield put(Creators.fetchSkillsStart());
    const url = yield apiEndpoints.skills;
    const res = yield axios.get(url);
    const skills = res.data.skills;
    yield put(Creators.fetchSkillsSuccess(skills));
  } catch (err) {
    yield put(Creators.fetchSkillsFailure(err));
  }
}
// _________________________________________________________________________________
