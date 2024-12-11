import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

test('sum adds two numbers correctly', () => {
    assert.strictEqual(sum(2, 3), 5, '2 + 3 should equal 5');
    assert.strictEqual(sum(-1, 1), 0, '-1 + 1 should equal 0');
    assert.strictEqual(sum(0, 0), 0, '0 + 0 should equal 0');
  });

// test('sum function adds two numbers correctly', () => {
//     const result = sum(2, 3);
//     assert.strictEqual(result, 5, 'Expected sum(2, 3) to equal 5');
//   });