// document.getElementById('btn-case-plus').addEventListener('click', function(){
//     const caseField = document.getElementById('case-field');
//     const caseFieldNumberString = caseField.value;
//     const previousCaseNumber = parseInt(caseFieldNumberString);

//     const newCaseNumber = previousCaseNumber + 1;
//     caseField.value = newCaseNumber;
// })
// document.getElementById('case-field-minus').addEventListener('click', function(){
//     const caseFieldMinus = document.getElementById('case-field');
//     const caseFieldMinusString = caseFieldMinus.value;
//     const previousCaseMinus = parseInt(caseFieldMinusString);

//     const newCaseMinusNumber = previousCaseMinus - 1;
//     caseFieldMinus.value = newCaseMinusNumber;
// })


function caseNumber(isIncrease){
    const caseField = document.getElementById('case-field');
    const caseFieldNumberString = caseField.value;
    const previousCaseNumber = parseInt(caseFieldNumberString);

    let newCaseNumber;
    if(isIncrease){
        newCaseNumber = previousCaseNumber + 1;
    }
    else{
        newCaseNumber = previousCaseNumber - 1;
    }
    caseField.value = newCaseNumber;

    return newCaseNumber;
}


function caseTotalPrice(newCaseNumber){
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement =document.getElementById('case-total')
    caseTotalElement.innerText = caseTotalPrice;
}
document.getElementById('btn-case-plus').addEventListener('click', function(){
    const newCaseNumber = caseNumber(true);

    caseTotalPrice(newCaseNumber);
    calculatSubtotal();

    // const caseTotalPrice = newCaseNumber * 59;
    // const caseTotalElement = document.getElementById('case-total')
    // caseTotalElement.innerText = caseTotalPrice;
  
});
document.getElementById('case-field-minus').addEventListener('click', function(){
    const newCaseNumber = caseNumber(false);

    caseTotalPrice(newCaseNumber);
    calculatSubtotal();

    // const caseTotalPrice = newCaseNumber * 59;
    // const caseTotalElement = document.getElementById('case-total')
    // caseTotalElement.innerText = caseTotalPrice;
});