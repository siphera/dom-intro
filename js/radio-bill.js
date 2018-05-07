document.addEventListener('DOMContentLoaded', function() 
{


// get a reference to the sms or call radio buttons

var callsTotalElem = document.querySelector(".callTotalTwo");
var smsTotalElem = document.querySelector(".smsTotalTwo");

//get a reference to the add button

var RadioTotalAddBtn = document.querySelector(".radioBillAddBtn");
//create a variable that will keep track of the total bill
var totalCostElem = document.querySelector(".totalTwo");
var billTypeRadio = document.querySelector(".billItemTypeRadio");


var radioFactoryF = radioBillFactoryF();
//add an event listener for when the add button is pressed
RadioTotalAddBtn.addEventListener('click', 
function()
{
   
   var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
   var billItemType = checkedRadioBtn.value;
    // update the correct total

    
    //update the totals that is displayed on the screen.
    var radioAdd = radioFactoryF.radioCalculate(billItemType);
    var callsTotals = radioFactoryF.callTotal(); 
    var smsTotals = radioFactoryF.smsTotal();
    var sum = radioFactoryF.totalBill();
    
    
    callsTotalElem.innerHTML = callsTotals;
    smsTotalElem.innerHTML = smsTotals;
    totalCostElem.innerHTML = sum;
    
    
      
    //color the total based on the criteria
    if (sum >= 50){
        // adding the danger class will make the text red
        totalCostElem.classList.add("danger");
    }
    else if (sum >= 30){
        totalCostElem.classList.add("warning");
    }
    });

});

function fieldReset(){
  document.getElementById("radioCall").checked=false;
  document.getElementById("radioSms").checked=false;

  callsTotalElem.innerHTML = 0.00;
  smsTotalElem.innerHTML = 0.00;
  totalCostElem.innerHTML = 0.00;

   }
