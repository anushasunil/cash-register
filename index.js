const billAmount = document.querySelector("#bill-amount");
const checkButton = document.querySelector(".btn-check");
const cashGiven = document.querySelector("#bill-received");
const message = document.querySelector("#error-message");
var noOfNotes = document.querySelectorAll(".no-of-notes");


checkButton.addEventListener("click", function validateBillandCashAmount(){

    hideMessage()
    if(billAmount.value > 0)
    {
        console.log("amount received", cashGiven.value)
        console.log("amount to be paid", billAmount.value)
        console.log(cashGiven.value - billAmount.value)
        if(Number(cashGiven.value) >= Number(billAmount.value))
        {
            const amountToBeReturned = cashGiven.value - billAmount.value;
            showMessage("");
            calculateChange(amountToBeReturned);
            console.log("here all normal")
        }
        else
        {
            showMessage("Do you wanna wash plates? 🤨.");
        }
    } 
    else
    {
        showMessage("The bill amount should be greater than 0.");
    }
});

function calculateChange(amt)
{
    let denomination = [2000,500,100,50,20,10,5,1];
    let i = 0;
    while(i != denomination.length)
    {
        noOfNotes[i].innerText = Math.trunc(amt/denomination[i]);
        amt = amt % denomination[i];
        i = i + 1;

    }
}

function hideMessage(){
    message.style.display = "none"
}

function showMessage(msg)
{
    message.style.display = "block";
    message.innerText = msg;
}
