describe("text-Bill function", function(){

  it("should return total cost (2.75) for one call", function(){
    var textBill1 = Text_billFactoryF();
	textBill1.textBillTotal("call");
      
    assert.equal(textBill1.callCostTotal(), 2.75);
    assert.equal(textBill1.smsCostTotal(), 0.00);
    assert.equal(textBill1.textBillTotal(), 2.75);
	
  });
    
 it("should return total cost (0.75) for one sms", function(){
    var textBill1 = Text_billFactoryF();
	textBill1.textBillTotal("sms");
     
    assert.equal(textBill1.smsCostTotal(),0.75);
    assert.equal(textBill1.callCostTotal(),0.00);
    assert.equal(textBill1.textBillTotal(),0.75);

  });
    
it("should return total cost(3.50) for one sms and one call", function(){
    var textBill1 = Text_billFactoryF();
    textBill1.textBillTotal("sms");
    textBill1.textBillTotal("call");
    
    assert.equal(textBill1.smsCostTotal(),0.75);
    assert.equal(textBill1.callCostTotal(),2.75);
    assert.equal(textBill1.textBillTotal(),3.50);
});
    
  it("should return total cost (0.00) for empty strings", function(){
     var textBill1 = Text_billFactoryF();
	textBill1.textBillTotal(" ");
	 textBill1.textBillTotal(" ");
      
      assert.equal(textBill1.smsCostTotal(),0.00);
	  assert.equal(textBill1.callCostTotal(),0.00);
	  assert.equal(textBill1.textBillTotal(),0.00);

  });


});