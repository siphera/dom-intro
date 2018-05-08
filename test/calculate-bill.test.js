describe("Calculate Bill function", function(){

          it("should return total cost (2.75) for one call", function()
		  {
		  	 var Calls = billPhone();
			   assert.equal(Calls.phone("call"),2.75);
          });

         it("should return total cost (0.75) for one sms", function(){
         	 var sms = billPhone();
			   assert.equal(sms.phone("sms"),0.75);
           });

	      it("should return total cost (3.50) for one sms and one call", function(){
 			 var call_sms = billPhone();
			   assert.equal(call_sms.phone("sms,call"),3.50);
           });
          it("should return total cost (0.00) for empty strings", function(){
              var call_sms = billPhone();
              
              assert.equal(call_sms.phone(""),0.00);
          });
});
