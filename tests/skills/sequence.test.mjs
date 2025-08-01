import test from 'node:test';import assert from 'node:assert/strict';import {wordSequence} from '../../src/skills/sequence.js';
test('sequence.js: educational helper behavior',()=>{assert.equal(wordSequence('cat sat',['cat','sat']),true);assert.equal(wordSequence('sat cat',['cat','sat']),false);});
