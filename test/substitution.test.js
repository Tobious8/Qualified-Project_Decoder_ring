const {substitution} = require("../src/substitution.js");
const expect = require("chai").expect;

describe("substitutionModule", () => {
  it('encoding a message', () => {
    const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
    const expected = 'jrufscpw'
    expect(actual).to.eql(expected);
  });
  it('encoding a message: keeping spaces', () => {
    const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
    const expected = 'elp xhm xf mbymwwmfj dne'
    expect(actual).to.eql(expected); 
 });
  it('decoding a message', () => {
    const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
    const expected = 'thinkful';
    expect(actual).to.eql(expected);
  });
  it('encoding a message: using symbols in alphabet', () => {
    const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
    const expected = "y&ii$r&";
    expect(actual).to.eql(expected);
  });
  it('decoding a message: using symbols in input', () => {
    const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
    const expected = "message";
    expect(actual).to.eql(expected);
  });
  it('encoding a message: checking for 26 letters in alphabet', () => {
    const actual = substitution("thinkful", "short");
    const expected = false;
    expect(actual).to.eql(expected);
  });
  it('encoding a message: checking for duplicate letters', () => {
    const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
    const expected = false;
    expect(actual).to.eql(expected);
  });
});
