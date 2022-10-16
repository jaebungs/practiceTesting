import { it, expect, beforeAll, beforeEach, afterAll, afterEach } from 'vitest';

import { User } from './hooks';

const testEmail = 'test@test.com';
let user = new User(testEmail);

beforeAll(() => { // could be used for global vars for shared tests
  // user = new User(testEmail);
})

beforeEach(() => {
  // user = new User(testEmail);
})
afterEach(() => { // reset user after each test
  // user = new User(testEmail); //should show no test fail.

})
afterAll(() => { // could be used for general cleanup work

})


 
it('should update the email', () => {
  const newTestEmail = 'test2@test.com';

  user.updateEmail(newTestEmail);

  expect(user.email).toBe(newTestEmail);
});

it('should have an email property', () => {

  expect(user).toHaveProperty('email');
});

it('should store the provided email value', () => {

  expect(user.email).toBe(testEmail);
});

it('should clear the email', () => {
  user.clearEmail();

  expect(user.email).toBe('');
});

it('should still have an email property after clearing the email', () => {
  user.clearEmail();

  expect(user).toHaveProperty('email');
});
