import test from 'node:test';import assert from 'node:assert/strict';import {observationSummary} from '../../src/skills/report.js';
test('report.js: educational helper behavior',()=>{assert.deepEqual(observationSummary(['comfortable','not-observed']),{comfortable:1,support_needed:0,not_observed:1,diagnosis:null});});
