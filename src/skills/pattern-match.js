import {normalize} from './normalize.js';export function patternMatch(word,pattern){const p=normalize(pattern);return p.length>0&&normalize(word).includes(p);}
