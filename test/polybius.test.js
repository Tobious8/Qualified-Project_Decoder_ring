const {polybius} = require("../src/polybius.js");
const expect = require("chai").expect;

describe("polybiusModule", () => {
  it('encoding a message', () => {
    const actual = polybius("thinkful");
    const expected = "4432423352125413";
    expect(actual).to.eql(expected);
  });
  it('encoding a message: checking for spaces', () => {
    const actual = polybius("Hello world");
    const expected = "3251131343 2543241341";
    expect(actual).to.eql(expected);
  });
  it('decoding a message', () => {
    const actual = polybius("3251131343 2543241341", false);
    const expected = "hello world";
    expect(actual).to.eql(expected);
  });
  it('decoding a message: checking for use of (i/j)', () => {
    const actual = polybius("4432423352125413", false);
    const expected = "th(i/j)nkful";
    expect(actual).to.eql(expected);
  });
  it('decoding a message: checking for even number of characters, otherwise false', () => {
    const actual = polybius("44324233521254134", false);
    const expected = false;
    expect(actual).to.eql(expected);
  });
})
