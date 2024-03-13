const lyrics = 'Tumi bondhu kala pakhi ami jeno ki. bosnto batase tmy bolte parini, sada sada kala kala rong jomece sada kala';
const parts = lyrics.split(' ');
const sentence = lyrics.split('.');
const chars = lyrics.split('');
console.log(parts);
console.log(sentence);
console.log(chars);

const partial = lyrics.slice(5, 8);
console.log(partial);
const partial2 = lyrics.substring(5, 8);
console.log(partial2);
const lines = ['Tumi bondhu kala pakhi ami jeno ki',
'bosnto batase tmy bolte parini', 
'sada sada kala kala rong jomece sada kala'];

const newSong = lines.join('. ');
console.log(newSong);