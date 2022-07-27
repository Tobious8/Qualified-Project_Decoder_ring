const {caesar} = require("../src/caesar.js");
const expect = require("chai").expect;

describe("caesarModule", () => {
  it('encoding a message: with positive shift', () => {
  const actual = caesar("thinkful", 3);
  const expected = "wklqnixo";
    expect(actual).to.eql(expected);
  });
  it('encoding a message: with negative shift', () => {
    const actual = caesar("thinkful", -3);
    const expected = "qefkhcri";
    expect(actual).to.eql(expected);
  });
  it('decoding a messagge: with positive shift', () => {
     const actual = caesar("wklqnixo", 3, false);
     const expected = "thinkful";
    expect(actual).to.eql(expected);
     });
  it('encoding a message: with positive shift, spaces, symbols and capital letters', () => {
    const actual = caesar("This is a secret message!", 8);
    const expected = "bpqa qa i amkzmb umaaiom!";
    expect(actual).to.eql(expected);
  });
  it('decoding a message: with a positive shift, spaces, symbols and capital letters', () => {
    const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
    const expected = "this is a secret message!"
    expect(actual).to.eql(expected);
  })
  it('encoding a message: with no shift should result in false', () => {
    const actual = caesar("thinkful");
    const expected = false;
    expect(actual).to.eql(expected);
  });
  it('encoding a message: with shift over 25, should result in false', () => {
    const actual = caesar("thinkful, 99");
    const expected = false;
    expect(actual).to.eql(expected);
     });
  it('encoding a message: with negative shift over -25, should result in false', () => {
    const actual = caesar("thinkful", -26);
    const expected = false;
    expect(actual).to.eql(expected);
  })
})