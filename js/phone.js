// document.getElementById('btn-phn-plus').addEventListener('click', function(){
//     const phnFieldNumber = document.getElementById('phn-field');
//     const phnFieldNumberString = phnFieldNumber.value;
//     const previousPhnFieldNumber = parseInt(phnFieldNumberString);

//     const newPhnPrice = previousPhnFieldNumber + 1;
//     phnFieldNumber.value = newPhnPrice;
// })

// document.getElementById('btn-phn-minus').addEventListener('click', function(){
//     const phnFieldNumber = document.getElementById('phn-field');
//     const phnFieldNumberString = phnFieldNumber.value;
//     const previousPhnFieldNumber = parseInt(phnFieldNumberString);

//     const newPhnPrice = previousPhnFieldNumber - 1;
//     phnFieldNumber.value = newPhnPrice;
// })
function updatePhoneNumber(isIncrease){
    const phnFieldNumber = document.getElementById('phn-field');
    const phnNumberString = phnFieldNumber.value;
    const previousPhnNumber = parseInt(phnNumberString);

    let newPhoneNumber;
    if(isIncrease){
        newPhoneNumber = previousPhnNumber + 1;
    }
    else{
        newPhoneNumber = previousPhnNumber - 1;
    }
    phnFieldNumber.value = newPhoneNumber;
    return newPhoneNumber;

}

// TOTAL PHN PRICE SECTION
function updatTotalPrice(newPhnNumber){
    const phnTotalPrice = newPhnNumber * 1229;
    const phnTotalElement = document.getElementById('phn-total');
    phnTotalElement.innerText = phnTotalPrice;
}


// TOTAL PHN SECTION
function getElementById(elementId){
    const phnTotalElement = document.getElementById(elementId);
    const currentPhnTotalString = phnTotalElement.innerText;
    const currentPhnTotal = parseInt(currentPhnTotalString);
    return currentPhnTotal;
}

// TOTAL PHN AND CASE CALCULAT 
function calculatSubtotal(){
    const currentPhnTotal = getElementById('phn-total');
    const currntCaseTotal = getElementById('case-total');
    const currentSubTotal = currentPhnTotal + currntCaseTotal;

    // Tax sub total 
    taxElementById('sub-total', currentSubTotal);
    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    taxElementById('tax-amount', taxAmount);

    const finalAmount = currentSubTotal + taxAmount;
    taxElementById('final-total', finalAmount);
}

// TAX SECTION 
function taxElementById(elementId, value){
    const subTotalElemnet = document.getElementById(elementId);
    subTotalElemnet.innerText = value;
}

// PHONE FUNTION 
document.getElementById('btn-phn-plus').addEventListener('click', function(){
    const newPhnNumber = updatePhoneNumber(true);

    updatTotalPrice(newPhnNumber); 
    calculatSubtotal()
});

document.getElementById('btn-phn-minus').addEventListener('click', function(){
    const newPhnNumber = updatePhoneNumber(false);

    updatTotalPrice(newPhnNumber);
    calculatSubtotal()
});
