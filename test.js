const { fromEuroToDollar, fromDollarToYen} = require('./app.js');

test("One euro should be 1.206 Dollars", function(){
    const { fromEuroToDollar } = require('./app.js')
    expect(fromEuroToDollar(3.5)).toBe(4.2);
})
test("One dollar should be 144.03 Yens", function(){
    const { fromDollarToYen } = require('./app.js')
    expect(fromDollarToYen(2.5)).toBe(360.075);
})
test("One yen should be 0.0062 Pounds", function(){
     const { fromYenToPound } = require('./app.js')
     expect(fromYenToPound(1)).toBe(0.0062);
})