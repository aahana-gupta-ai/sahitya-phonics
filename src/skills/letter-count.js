import {normalize} from './normalize.js';export function letterCount(word){return Array.from(normalize(word)).filter(c=>/[a-z]/.test(c)).length;}
