describe("Calculate Bill function", function(){

          it("should return total cost that is equal to '2.75' for one call made", function()
		  {
		  	 var Calls = billPhone();
			   assert.equal(Calls.phone("call"),2.75);
          });

         it("should return total cost that is equal to '0.75' for one sms made", function(){
         	 var sms = billPhone();
			   assert.equal(sms.phone("sms"),0.75);
           });

	      it("should return total cost that is equal to '3.50' for one sms and one call made", function(){
 			 var call_sms = billPhone();
			   assert.equal(call_sms.phone("sms,call"),3.50);
           });

});
