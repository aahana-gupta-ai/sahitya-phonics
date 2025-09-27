import test from 'node:test';import assert from 'node:assert/strict';import {updateProgress,progressSummary} from '../../src/skills/progress.js';
test('progress.js: educational helper behavior',()=>{const p=updateProgress({},'a',true);assert.equal(progressSummary(p).correct,1);assert.equal(progressSummary(updateProgress(p,'a',false)).attempts,2);});
