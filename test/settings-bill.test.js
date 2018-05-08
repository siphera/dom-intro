describe("Settings Update function", function(){

  it("should return total for a call", function(){
   
      var settings = SettingBillFactory();
      
      settings.sms(1.00);
      settings.calls(2.00);
      settings.critical(10.00);
      settings.warning(5.00);
      
      settings.sumBill('call');
      
      assert.equal(settings.sumCall(), 2.00);
      assert.equal(settings.sumSms(), 0.00);
      assert.equal(settings.sumTotal(), 2.00);
      
  });
	
	it("should return total for an sms", function(){
  
      var settings = SettingBillFactory();
        
      settings.sms(1.00);
      settings.calls(2.00);
      settings.critical(20.00);
      settings.warning(10.00);
      
      settings.sumBill('sms');
      
      assert.equal(settings.sumCall(), 0.00);
     assert.equal(settings.sumSms(), 1.00);
     assert.equal(settings.sumTotal(), 1.00);
    
 });

    
 it("should return total for a call and sms", function(){
  
       var settings = SettingBillFactory();
     
      settings.sms(1.00);
      settings.calls(2.00);
      settings.critical(20.00);
      settings.warning(10.00);
      
      settings.sumBill('sms');
	  settings.sumBill('call');
      
      assert.equal(settings.sumCall(), 2.00);
      assert.equal(settings.sumSms(), 1.00);
       assert.equal(settings.sumTotal(), 3.00);
  });
   
 it("should return total for multiple calls", function(){
  
   var settings = SettingBillFactory();
     
      settings.sms(1.00);
      settings.calls(2.00);
      settings.critical(20.00);
      settings.warning(10.00);
      
      settings.sumBill('call');
	  settings.sumBill('call');
	  settings.sumBill('call');
	  settings.sumBill('call');
     
     assert.equal(settings.sumCall(), 8.00);
      assert.equal(settings.sumSms(), 0.00);
       assert.equal(settings.sumTotal(), 8.00);
  
 });
   
 it("should return total for multiple sms", function(){
  
   var settings = SettingBillFactory();
     
      settings.sms(1.00);
      settings.calls(2.00);
      settings.critical(20.00);
      settings.warning(10.00);
      
      settings.sumBill('sms');
	     settings.sumBill('sms');
	     settings.sumBill('sms');
	      settings.sumBill('sms');
     
     assert.equal(settings.sumCall(), 0.00);
      assert.equal(settings.sumSms(), 4.00);
       assert.equal(settings.sumTotal(), 4.00);
  
 });


});