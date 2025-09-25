import test from 'node:test';import assert from 'node:assert/strict';import {blendWrittenSegments} from '../../src/skills/blending.js';
test('blending.js: educational helper behavior',()=>{assert.equal(blendWrittenSegments(['c','a','t']),'cat');assert.throws(()=>blendWrittenSegments('cat'));});
