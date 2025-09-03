import test from 'node:test';import assert from 'node:assert/strict';import {normalize} from '../../src/skills/normalize.js';
test('normalize.js: educational helper behavior',()=>{assert.equal(normalize('  CAT  '),'cat');assert.equal(normalize(null),'');});
