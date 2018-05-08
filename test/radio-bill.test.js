describe("Radio Button function", function(){

          it("should return total cost (8.25) for three calls made.", function(){
			 
			 var radioTest = radioBillFactoryF();
			 radioTest.radioCalculate("call");
			  radioTest.radioCalculate("call");
              radioTest.radioCalculate("call");
              
			    assert.equal(radioTest.callTotal(), 8.25);
      		  	assert.equal(radioTest.smsTotal(), 0.00);
      			assert.equal(radioTest.totalBill(), 8.25);


          });

         it("should return total cost (2.25) for three smses made.", function(){

			  	var radioTest = radioBillFactoryF();
			 	radioTest.radioCalculate("sms");
			  	radioTest.radioCalculate("sms");
			    radioTest.radioCalculate("sms");
			  
			    assert.equal(radioTest.callTotal(), 0.00);
      		  	assert.equal(radioTest.smsTotal(), 2.25);
      			assert.equal(radioTest.totalBill(), 2.25);


          });

          it("should return total cost for the sum three sms and three calls (10.50)", function(){
			  
	var radioTest = radioBillFactoryF();
			 	radioTest.radioCalculate("sms");
			  	radioTest.radioCalculate("sms");
                radioTest.radioCalculate("sms");
              
			    radioTest.radioCalculate("call");
			    radioTest.radioCalculate("call");
                radioTest.radioCalculate("call");
			  
			    assert.equal(radioTest.callTotal(), 8.25);
      		  	assert.equal(radioTest.smsTotal(), 2.25);
      			assert.equal(radioTest.totalBill(), 10.50);

          });

});