function depositButtonpressed(){
    depositstring = document.getElementById('deposit-amount').value;
    depositAmount = parseFloat(depositstring);
    previousdepositstring = document.getElementById('deposit').innerText
    deposit = parseFloat(previousdepositstring);
    deposit = deposit + depositAmount;
    document.getElementById('deposit').innerText = deposit;
    totalAmountString = document.getElementById('total').innerText;
    totalAmount = parseFloat(totalAmountString);
    totalAmount = totalAmount + depositAmount;
    document.getElementById('total').innerText = totalAmount;
}

document.getElementById('btn-deposit').addEventListener('click',function(){
    depositButtonpressed();
})