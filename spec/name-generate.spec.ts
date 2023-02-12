import RandomInteger from '../dist/random-integer.js';


// let char ='bcdfghjklmnpqrstvwxyz.js';
// let vocal ='aeiou.js';

const char ='bdglmnprstw';
const vocal ='aeiou';

// let char ='ndkcr.js';
// let vocal ='ai.js';


for(let a =0; a<=15; a++) {

    const rows : string[] = [];
    for(let i =0; i<=20; i++) {

        const chars : string[] = ['a'];

        for(let j =0; j<=2; j++) {

            chars.push(
                vocal[RandomInteger.Parameters(0, vocal.length - 1)]
            );
            chars.push(
                char[RandomInteger.Parameters(0, char.length - 1)]
            );

        }

        rows.push(chars.join(''));
    }

    console.log(rows.join(' '));
}
