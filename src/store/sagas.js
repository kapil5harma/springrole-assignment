// import { takeEvery, takeLatest, all } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga/effects';

// Import all ActionTypes
import { Types } from './actions';

// Import all Sagas
import { fetchWorkExperienceSaga, fetchEducationSaga, fetchSkillsSaga } from '../containers/Profile/store';

export function* watchProfile() {
  yield takeLatest(Types.FETCH_WORK_EXPERIENCE, fetchWorkExperienceSaga);
  yield takeLatest(Types.FETCH_EDUCATION, fetchEducationSaga);
  yield takeLatest(Types.FETCH_SKILLS, fetchSkillsSaga);
}
