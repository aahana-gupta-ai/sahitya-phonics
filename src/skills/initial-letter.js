import {normalize} from './normalize.js';export function initialLetter(word,letter){const p=normalize(letter);return p.length>0&&normalize(word).startsWith(p);}
