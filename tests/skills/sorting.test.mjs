import test from 'node:test';import assert from 'node:assert/strict';import {sortByPattern} from '../../src/skills/sorting.js';
test('sorting.js: educational helper behavior',()=>{assert.deepEqual(sortByPattern(['ship','cat','shop'],'sh'),{matching:['ship','shop'],other:['cat']});});
