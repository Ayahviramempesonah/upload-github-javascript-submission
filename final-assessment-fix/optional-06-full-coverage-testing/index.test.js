import { test } from 'node:test';
import assert from 'node:assert';
import  sum from './index.js';


// test('sum handles valid inputs correctly', () => {
//     assert.strictEqual(sum(2, 3), 5, '2 + 3 should equal 5');
//     assert.strictEqual(sum(0, 0), 0, '0 + 0 should equal 0');
//   });
  
//   test('sum handles invalid inputs and negative numbers', () => {
//     assert.strictEqual(sum(-1, 1), 0, '-1 + 1 should return 0');
//     assert.strictEqual(sum(1, -1), 0, '1 + -1 should return 0');
//     assert.strictEqual(sum('a', 1), 0, 'Non-numeric input should return 0');
//     assert.strictEqual(sum(1, 'b'), 0, 'Non-numeric input should return 0');
//   });


test('sum handles valid inputs correctly', (t) => {
  try {
    assert.strictEqual(sum(2, 3), 5, '2 + 3 should equal 5');
    assert.strictEqual(sum(0, 0), 0, '0 + 0 should equal 0');
  } catch (error) {
    t.fail(`Unexpected error in valid inputs test: ${error.message}`);
  }
});

test('sum handles invalid inputs and negative numbers', (t) => {
  try {
    assert.strictEqual(sum(-1, 1), 0, '-1 + 1 should return 0');
    assert.strictEqual(sum(1, -1), 0, '1 + -1 should return 0');
    assert.strictEqual(sum('a', 1), 0, 'Non-numeric input should return 0');
    assert.strictEqual(sum(1, 'b'), 0, 'Non-numeric input should return 0');
  } catch (error) {
    t.fail(`Unexpected error in invalid inputs test: ${error.message}`);
  }
});
