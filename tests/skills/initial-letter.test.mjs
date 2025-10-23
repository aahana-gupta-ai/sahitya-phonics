import test from 'node:test';import assert from 'node:assert/strict';import {initialLetter} from '../../src/skills/initial-letter.js';
test('initial-letter.js: educational helper behavior',()=>{assert.equal(initialLetter('bat','b'),true);assert.equal(initialLetter('cat','b'),false);});
