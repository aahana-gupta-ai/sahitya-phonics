import {normalize} from './normalize.js';export function wordMatch(answer,expected){return normalize(answer)!==''&&normalize(answer)===normalize(expected);}
