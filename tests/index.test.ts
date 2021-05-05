import { check, isIn } from '../src';

test('Palestine check', () => {
  expect(check([31.9474, 35.2272])).toMatchObject({ name: 'Palestine', code: 'PS' });
});

test('Egypt check', () => {
  expect(check([30.0561, 31.2394])).toMatchObject({ name: 'Egypt', code: 'EG' });
});

test('Not in country check', () => {
  expect(check([31.9474, 35.72])).toMatchObject({});
});

test('isIn function', () => {
  expect(isIn([31.279862, 37.1297454], 'jordan')).toBe(true);
});
