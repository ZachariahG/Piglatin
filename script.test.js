const translate = require('./script');

test('Word starting with a vowel', ()=> {
    expect(translate('array')).toBe('arrayay');
})

test('Word starting with a consonant', ()=> {
    expect(translate('consonant')).toBe('onsonantcay');
})

test('Word with a consonant cluster', ()=> {
    expect(translate('cluster')).toBe('usterclay');
})

test('A sentence translation', ()=> {
    expect(translate('hello world')).toBe('ellohay orldway');
})