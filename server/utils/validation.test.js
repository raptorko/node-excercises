const expect = require('require');

//import isRealString
const {isRealString} = require('./validation');

//isRealString
  // should reject non-string values - false
  //should reject string with only space - false
  //should allow string with non space characters true

describe('isRealString', () => {
  it('should reject non string values', () => {
    var res = isRealString(98);
    expect(res).toBe(false);
  });
  it('should reject string with only space', () => {
    var res = isRealString('     ');
    expect(res).toBe(false);
  });
  it('should allow string with non space characters', () => {
    var res = isRealString('grgrggr3g6867ub549%^&  ');
    expect(res).toBe(true);
  });
});
