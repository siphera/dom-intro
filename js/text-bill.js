document.addEventListener('DOMContentLoaded', function()
{

var billText = document.querySelector(".billTypeText");

//get a reference to the add button
var textTotalAddBtn = document.querySelector(".addToBillBtn");

//create a variable that will keep track of the total bill
var totalCostElementText = document.querySelector(".totalOne");

// Variables that will track the total of calls and sms
var callsTotalElementText = document.querySelector(".callTotalOne");
var smsTotalElementText = document.querySelector(".smsTotalOne");

//add an event listener for when the add button is pressed


 var text_Bill = Text_billFactoryF();
textTotalAddBtn.addEventListener('click',
        function()
        {

            var billTypeEntered = billText.value.trim();
            var total = text_Bill.textBillTotal(billTypeEntered);
            var sms = text_Bill.smsCostTotal();
            var call = text_Bill.callCostTotal();
            callsTotalElementText.innerHTML = call;
            smsTotalElementText.innerHTML = sms;
            totalCostElementText.innerHTML = total;


       if(total < 30.00){
            totalCostElementText.classList.remove("warning");
             totalCostElementText.classList.remove("danger");
         }

       if (total> 30.00 && 50.00 > total){

             totalCostElementText.classList.remove("danger");
             totalCostElementText.classList.add("warning");
         }

         if(total >50.00){
             totalCostElementText.classList.remove("warning");
             totalCostElementText.classList.add("danger");
         }

        }

    );
});
