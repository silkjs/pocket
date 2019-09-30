import { add } from './main';

describe('main', () => {
  it(`add`, async () => {
    expect(add(1, 2)).toBe(3);
  });
});
