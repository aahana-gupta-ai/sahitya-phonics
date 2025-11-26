export function normalize(value){return String(value??'').normalize('NFKC').trim().toLocaleLowerCase('en').replace(/\s+/g,' ');}
