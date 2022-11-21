// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('1234567890 is phone number', () => {
    expect(functions.isPhoneNumber('(123)-456-7890')).toBe(true);
});

test('2345678901 is a phone number', () => {
    expect(functions.isPhoneNumber('(234)-567-8901')).toBe(true);
});

test('1234 is not a phone number', () => {
    expect(functions.isPhoneNumber('1234')).toBe(false);
});

test('408 is not a phone number', () => {
    expect(functions.isPhoneNumber('408')).toBe(false);
});

test('awnguyen@ucsd.edu is a valid email', () => {
    expect(functions.isEmail('awnguyen@ucsd.edu')).toBe(true);
});

test('3ndrew123@gmail.com is a valid email', () => {
    expect(functions.isEmail('3ndrew123@gmail.com')).toBe(true);
});
test('a is not a valid email', () => {
    expect(functions.isEmail('a')).toBe(false);
});
test('b is not a valid email', () => {
    expect(functions.isEmail('b')).toBe(false);
});
test('an081302 is a string password', () => {
    expect(functions.isStrongPassword('an081302')).toBe(true);
});
test('Andrew123 is a strong password', () => {
    expect(functions.isStrongPassword('Andrew123')).toBe(true);
});
test('p is not a strong password', () => {
    expect(functions.isStrongPassword('p')).toBe(false);
});
test('k is not a strong password', () => {
    expect(functions.isStrongPassword('k')).toBe(false);
});
test('11/21/2022 is a valid date', () => {
    expect(functions.isDate('11/21/2022')).toBe(true);
});
test('11/22/2022 is a valid date', () => {
    expect(functions.isDate('11/22/2022')).toBe(true);
});
test('z is not a valid date', () => {
    expect(functions.isDate('z')).toBe(false);
});
test('x is not a valid date', () => {
    expect(functions.isDate('x')).toBe(false);
});
test('CCCCFF is a valid hex color', () => {
    expect(functions.isHexColor('CCCCFF')).toBe(true);
});
test('8f99fb is a valid hex color', () => {
    expect(functions.isHexColor('8f99fb')).toBe(true);
});
test('red is not a valid hex color', () => {
    expect(functions.isHexColor('red')).toBe(false);
});
test('blue is not a valid hex color', () => {
    expect(functions.isHexColor('blue')).toBe(false);
});
