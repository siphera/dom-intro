//get a reference to the calculate button
var billStringField = document.querySelector(".billString");
//get a reference to the billTotal element
var calculateBtn = document.querySelector(".calculateBtn");
//get a reference to the billString

var billTotalElement = document.querySelector(".billTotal");

var total = document.querySelector(".total");

//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

function calculateBtnClicked(){
    // get the string entered in the textArea
    var billString = billStringField.value;
    //split the string
    var billItems = billString.split(",");
    // a variable for the total phone bill.
    var billTotal = 0;
    //loop over all the bill items
    for (var i=0;i<billItems.length;i++){
        var billItem = billItems[i].trim();
        if (billItem === "call"){
            billTotal += 2.75;
        }
        else if (billItem === "sms"){
            billTotal += 0.75;
        }
    }
    //round to two decimals
     var roundedBillTotal = billTotal.toFixed(2);
    billTotalElement.innerHTML = roundedBillTotal;


}

//link the function to a click event on the calculate button

calculateBtn.addEventListener('click', function(){
    calculateBtnClicked();
    colorWarning();

});

function colorWarning() {


       if (billTotalElement.innerHTML > 20.00 && 30.00 > billTotalElement.innerHTML ){

         total.classList.add("warning");
       } else {
           total.classList.remove("danger");
       }
         if(billTotalElement.innerHTML >30.00){

             total.classList.add("danger");
        }

        else if (billTotalElement.innerHTML < 20) {
          total.classList.remove("warning");
          total.classList.remove("danger");
        }
         billTotalElement.innerHTML;
}

function clearContents(element) {
  element.value = '';
};
