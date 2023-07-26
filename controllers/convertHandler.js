function ConvertHandler() {

  const units = ["gal","l","L","lbs","kg","mi","km"]
  
  this.getNum = function(input) {
    let result;
    const pattern = /^(\d+(?:\.\d+)?(?:\/\d+(?:\.\d+)?)?)(?:[a-zA-Z]+)?$/;
    if (units.includes(input.toLowerCase())){
      return 1
    }
    try{
    result = eval(pattern.exec(input)[1]);
    
    }
    catch(err)
      {
      return false
      }
    return result;
  };
  
  this.getUnit = function(input) {
    let result;
    try{
    result = input.match(/([a-zA-Z]+$)/gm).join('').toLowerCase()
    }catch(err)
    {
      return false
    }
    if(result==='l')
    {
      result = 'L'
    }
    return units.includes(result)?result:false; 
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    switch (initUnit.toLowerCase()){
      case 'gal':
        result = 'L'
        break;
      case 'l':
        result = 'gal'
        break;
      case 'lbs':
        result = 'kg'
        break;
      case 'kg':
        result = 'lbs'
        break;
      case 'mi':
        result = 'km'
        break;
      case 'km':
        result = 'mi'
        break;
      default:
        return false
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
        switch (unit.toLowerCase()){
      case 'gal':
        result = 'gallons'
        break;
      case 'l':
        result = 'liters'
        break;
      case 'lbs':
        result = 'pounds'
        break;
      case 'kg':
        result = 'kilograms'
        break;
      case 'mi':
        result = 'miles'
        break;
      case 'km':
        result = 'kilometers'
        break;
    }
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    
    switch (initUnit.toLowerCase()){
      case 'gal':
        result = (initNum * galToL).toFixed(5)
        break;
      case 'l':
        result = (initNum / galToL).toFixed(5)
        break;
      case 'lbs':
        result = (initNum * lbsToKg).toFixed(5)
        break;
      case 'kg':
        result = (initNum / lbsToKg).toFixed(5)
        break;
      case 'mi':
        result = (initNum * miToKm).toFixed(5)
        break;
      case 'km':
        result = (initNum / miToKm).toFixed(5)
        break;
      default:
        return false
    }
    return parseFloat(result);
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    result = {"initNum":initNum,
              "initUnit":initUnit,
              "returnNum":returnNum,
              "returnUnit":returnUnit,
              "string":`${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`}
    return result;
  };
  
}

module.exports = ConvertHandler;
