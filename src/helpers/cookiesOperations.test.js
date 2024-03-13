import { setCookie } from './cookiesOperations';

describe('CookiesHelpers', () => {
  it('should set correct items', () => {
    setCookie('testName', 'testValue');
    setCookie('testName2', 'testValue2');

    expect(document.cookie).toEqual('testName=testValue; testName2=testValue2');
  });
});
