import userReducer, { userActions } from './userSlice';

describe('UserSlice component', () => {
  it('should set name and id with setUserData action', () => {
    expect(userReducer(undefined, userActions.setUserData({ name: 'testName', _id: 'testId' }))).toEqual({
      name: 'testName',
      _id: 'testId',
    });
  });
});
