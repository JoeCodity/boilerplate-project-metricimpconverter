const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();
let input;
const inUnits = ['l','gal','mi','km','kg','lbs']
const outUnit = ['gal','L','km','mi','lbs','kg']

suite('Unit Tests', function(){
  let delta
      // #1
    test('#read a whole number input', function (done) {
      input = 
      assert.equal(convertHandler.getNum('12L'),12);
      done()
    });
      test('#read a decimal number input', function (done) {
      assert.equal(convertHandler.getNum('12.2354L'),12.2354);
        done()
    });
      test('#read a fractional input', function (done) {
      assert.equal(convertHandler.getNum('1/2L'),0.5);
        done()
    });
      test('#read a fractional input with a decimal', function (done) {
      assert.equal(convertHandler.getNum('12.5/2.5L'),5);
        done()
    });
      test('#return an error on a double-fraction', function (done) {
      assert.ifError(convertHandler.getNum('3/2/2L'));
        done()
    });
      test('#should correctly default to a numerical input of 1 when no numerical input is provided', function (done) {
      assert.equal(convertHandler.getNum('l'),1);
        done()
    });
      test('#should correctly read each valid input unit', function (done) {
      outUnit.forEach((unit,i)=>{
        assert.equal(convertHandler.getUnit(unit),unit);
      })

        done()
    });
      test('#return an error for an invalid input unit', function (done) {
      assert.ifError(convertHandler.getUnit('12min'));
        done()
    });
      test('#return the correct return unit for each valid input unit', function (done) {
      assert.equal(convertHandler.getReturnUnit('l'),"gal");
      assert.equal(convertHandler.getReturnUnit('gal'),"L");
      assert.equal(convertHandler.getReturnUnit('mi'),"km");
      assert.equal(convertHandler.getReturnUnit('km'),"mi");
      assert.equal(convertHandler.getReturnUnit('kg'),"lbs");
      assert.equal(convertHandler.getReturnUnit('lbs'),"kg");
        done()
    });
      test('#correctly return the spelled-out string unit for each valid input unit', function (done) {
      assert.equal(convertHandler.spellOutUnit('l'),"liters");
      assert.equal(convertHandler.spellOutUnit('gal'),"gallons");
      assert.equal(convertHandler.spellOutUnit('mi'),"miles");
      assert.equal(convertHandler.spellOutUnit('km'),"kilometers");
      assert.equal(convertHandler.spellOutUnit('kg'),"kilograms");
      assert.equal(convertHandler.spellOutUnit('lbs'),"pounds");
        done()
    });
      test('#correctly convert gal to L', function (done) {
        delta = 0.1
      assert.approximately(convertHandler.convert(1,'gal'),3.785,delta);
        done()
    });
      test('#correctly convert L to gal', function (done) {
      assert.approximately(convertHandler.convert(1,'L'),0.264,delta);
        done()
    });
      test('#correctly convert mi to km', function (done) {
      assert.approximately(convertHandler.convert(1,'mi'),1.609,delta);
        done()
    });
      test('#correctly convert km to mi', function (done) {
      assert.approximately(convertHandler.convert(1,'km'),0.621,delta);
        done()
    });
      test('#correctly convert lbs to kg', function (done) {
      assert.approximately(convertHandler.convert(1,'lbs'),0.453,delta);
        done()
    });
      test('#correctly convert kg to lbs', function (done) {
      assert.approximately(convertHandler.convert(1,'kg'),2.204,delta);
        done()
});
})