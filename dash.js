function depositButtonPressed(){
    depositString = document.getElementById('deposit-amount').value;
    depositAmount = parseFloat(depositString);
    if (!isNaN(depositAmount)) {
        console.log('number');
        previousdepositstring = document.getElementById('deposit').innerText
        deposit = parseFloat(previousdepositstring);
        deposit = deposit + depositAmount;
        document.getElementById('deposit').innerText = deposit;
        totalAmountString = document.getElementById('total').innerText;
        totalAmount = parseFloat(totalAmountString);
        totalAmount = totalAmount + depositAmount;
        document.getElementById('total').innerText = totalAmount;
        document.getElementById('deposit-amount').value = '';
        document.getElementById('deposit-warning').style.display = 'none';
    }
    else{
        console.log('notnumber');
        document.getElementById('deposit-warning').style.display = 'block';
        document.getElementById('deposit-amount').value = '';
    }
}

function withdrawButtonPressed(){
    withdrawString = document.getElementById('withdraw-amount').value;
    withdrawAmount = parseFloat(withdrawString);
    if (!isNaN(withdrawAmount)) {
        console.log('number');
        previouswithdrawString = document.getElementById('withdraw').innerText
        withdraw = parseFloat(previouswithdrawString);
        withdraw = withdraw + withdrawAmount;
        totalAmountString = document.getElementById('total').innerText;
        totalAmount = parseFloat(totalAmountString);
        if(totalAmount < withdrawAmount){
            document.getElementById('low-money').style.display = 'block';
            document.getElementById('withdraw-amount').value = '';
        }
        else{
            totalAmount = totalAmount - withdrawAmount;
            document.getElementById('total').innerText = totalAmount;
            document.getElementById('withdraw').innerText = withdraw;
            document.getElementById('withdraw-amount').value = '';
            document.getElementById('withdraw-warning').style.display = 'none';   
            document.getElementById('low-money').style.display = 'none';   
        }
    }
    else{
        console.log('notnumber');
        document.getElementById('withdraw-warning').style.display = 'block';
        document.getElementById('withdraw-amount').value = '';
    }
}

document.getElementById('btn-deposit').addEventListener('click',function(){
    depositButtonPressed();
})

document.getElementById('btn-withdraw').addEventListener('click',function(){
    withdrawButtonPressed();
})