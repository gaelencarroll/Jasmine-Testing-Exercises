
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({amount: 5000, years: 10, rate: 1.5})).toEqual('44.90');
  expect(calculateMonthlyPayment({amount: 10000, years: 7, rate: 5})).toEqual('141.34');
});

it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment({amount: 10047, years: 7, rate: 5,})).toEqual('142.00');
});

it("should handle very high principle amounts", function(){
  expect(calculateMonthlyPayment({amount: 10000000, years: 7, rate: 5})).toEqual('141339.09');
});

it("should handle very high interest rates", function(){
  expect(calculateMonthlyPayment({amount: 10000, years: 7, rate: 99})).toEqual('826.06');
})

it("should be able to handle decimal values", function(){
  expect(calculateMonthlyPayment({amount: 10000.12, years: 7.3, rate: 2.7})).toEqual('125.90');
})