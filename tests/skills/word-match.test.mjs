import test from 'node:test';import assert from 'node:assert/strict';import {wordMatch} from '../../src/skills/word-match.js';
test('word-match.js: educational helper behavior',()=>{assert.equal(wordMatch(' Cat ','cat'),true);assert.equal(wordMatch('',''),false);});
