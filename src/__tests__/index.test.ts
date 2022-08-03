import { Greet } from '../index';

test('Testing Greet Function', () => {
  expect(Greet('Walter')).toBe('Hello Walter');
});
