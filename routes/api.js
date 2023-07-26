'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.get('/api/convert',(req,res)=>{
    let num = convertHandler.getNum(req.query.input)
    let unit = convertHandler.getUnit(req.query.input)
    if (num===false&&unit===false){
      res.send("invalid number and unit")
      return
    }
    if (num===false){
      res.send("invalid number")
      return
    }
    if (unit===false){
      res.send("invalid unit")
      return
    }
    let convertNum = convertHandler.convert(num,unit)
    let convertUnit = convertHandler.getReturnUnit(unit)
    //Split query params into number and einheit
    res.json(convertHandler.getString(num,unit,convertNum,convertUnit))

  })

};
