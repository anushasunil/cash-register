const billAmount = document.querySelector("#bill-amount");
const checkButton = document.querySelector(".btn-check");
const cashGiven = document.querySelector("#bill-received");
const message = document.querySelector("#error-message");
var noOfNotes = document.querySelectorAll(".no-of-notes");
const nextButton = document.querySelector(".btn-next");
const validMessage = document.querySelector(".validate-bill-amount")
const billValidSection = document.querySelector(".bill-amount-validation")

billValidSection.style.display = "none";

nextButton.addEventListener("click", function validateBillAmount() {

    if (Number(billAmount.value)) {
        if (billAmount.value > 0) {
            billValidSection.style.display = "block";
            hideValidationMessage()
            checkButton.addEventListener("click", function validateCashAmount() {

                hideMessage()
                if (Number(cashGiven.value) >= Number(billAmount.value)) {
                    const amountToBeReturned = cashGiven.value - billAmount.value;
                    showMessage("Thankyou for the payment. 🙂");
                    calculateChange(amountToBeReturned);
                } else {
                    showMessage("Do you wanna wash plates? 🤨.");
                }
            })

        } else {
            validationMessage("The bill amount should be greater than 0.");
        }
    } else {
        validationMessage("The values entered should be a number.")
    }
});


function calculateChange(amt) {
    let denomination = [2000, 500, 100, 50, 20, 10, 5, 1];
    let i = 0;
    while (i != denomination.length) {
        noOfNotes[i].innerText = Math.trunc(amt / denomination[i]);
        amt = amt % denomination[i];
        i = i + 1;

    }
}

function hideMessage() {
    message.style.display = "none"
}

function hideValidationMessage() {
    validMessage.style.display = "none"
}

function showMessage(msg) {
    message.style.display = "block";
    message.style.color = 'var(--textColor)';
    message.style.fontSize = '1.2rem';
    message.style.paddingTop = "1rem";
    message.style.paddingBottom = "1rem";
    message.style.textAlign = "center";
    message.innerText = msg;
}

function validationMessage(msg) {
    validMessage.style.display = "block";
    validMessage.style.marginLeft = '1rem';
    validMessage.style.color = 'var(--textColor)';
    validMessage.style.fontSize = '1.2rem';
    validMessage.style.paddingTop = "1rem";
    validMessage.style.paddingBottom = "1rem";
    validMessage.innerText = msg;
}