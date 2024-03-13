const lyrics = 'Tumi bondhu kala pakhi ami jeno ki. bosnto batase tmy bolte parini, sada sada kala kala rong jomece sada kala';
const searchString = 'pakhi';
//const doesExist = lyrics.includes('pakhi');
//const doesExist = lyrics.includes('Pakhi');
//const doesExist = lyrics.includes('searchString');

//const lyricsLowerCase = lyrics.toLowerCase();
//const doesExist = lyricsLowerCase.includes(searchString);
//const searchStringLower = searchString.toLowerCase();
//const doesExist = lyricsLowerCase.includes(searchStringLower);
const doesExist = lyrics.toLowerCase().includes(searchString.toLowerCase());
console.log(doesExist);

console.log(lyrics.indexOf('dhola'));
console.log(lyrics.indexOf('bosonto'));

if(lyrics.indexOf('sada') !== -1){
    console.log('Exists inside the string');
}else{
    console.log('Cannot find it');
}

//startsWith
console.log(lyrics.startsWith('Tumi'));

//endsWith
const fileName = 'mybiodata.pdf';
const otherFile = 'mypic.png';

console.log(fileName.endsWith('.pdf'));