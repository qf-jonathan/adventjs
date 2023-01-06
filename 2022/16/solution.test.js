import { test, expect } from 'vitest';
import { fixLetter } from './solution';

test('day 16 - fixLetter', () => {
    expect(
        fixLetter(
            ' hello,  how are you??     do you know if santa claus exists?  ' +
                'i really hope he does!  bye  '
        )
    ).toEqual(
        'Hello, how are you? Do you know if Santa Claus exists? I really hop' +
            'e he does! Bye.'
    );
    expect(
        fixLetter(
            "  Hi Santa claus. I'm a girl from Barcelona , Spain . please, s" +
                'end me a bike.  Is it possible?'
        )
    ).toEqual(
        "Hi Santa Claus. I'm a girl from Barcelona, Spain. Please, send me a" +
            ' bike. Is it possible?'
    );
    expect(fixLetter('  hi    santa    claus ')).toEqual('Hi Santa Claus.');
    expect(
        fixLetter('  hi    santa    claus . santa claus is the best  ')
    ).toEqual('Hi Santa Claus. Santa Claus is the best.');
    expect(fixLetter('  hi,santa claus. are you there ?   ')).toEqual(
        'Hi, Santa Claus. Are you there?'
    );
    expect(
        fixLetter('Hey santa Claus .  I want a bike.   I want a videogame! ')
    ).toEqual('Hey Santa Claus. I want a bike. I want a videogame!');
});
