import * as lunr from 'lunr';
import lunrStemmer from 'lunr-languages/lunr.stemmer.support';
import lunrMulti from 'lunr-languages/lunr.multi';
import lunrHebrew from 'lunr-languages/lunr.he';

lunrStemmer(lunr);
lunrMulti(lunr);
lunrHebrew(lunr);

console.log("Lunr Hebrew plugins loaded.");