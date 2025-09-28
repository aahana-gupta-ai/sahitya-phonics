import test from 'node:test';import assert from 'node:assert/strict';import {patternMatch} from '../../src/skills/pattern-match.js';
test('pattern-match.js: educational helper behavior',()=>{assert.equal(patternMatch('SHIP','sh'),true);assert.equal(patternMatch('cat','sh'),false);});
