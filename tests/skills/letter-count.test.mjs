import test from 'node:test';import assert from 'node:assert/strict';import {letterCount} from '../../src/skills/letter-count.js';
test('letter-count.js: educational helper behavior',()=>{assert.equal(letterCount('ship'),4);assert.equal(letterCount(''),0);});
