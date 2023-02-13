document.getElementById('withdraw-submit').addEventListener('click', function () {
    const getWithdrawInput = getInputById('withdraw-input')
    const getWithdrawTotal = getTotalValueById('withdraw-ammount')
    const getTotalAmmount = getTotalValueById('total-ammount')

    const validationCheck = + getWithdrawInput
    if (isNaN(validationCheck)) {
        validationRejectAlert()
    } else if (getWithdrawInput > getTotalAmmount) { 
        alert('Sorry! Your Withdraw Ammount is Gratter than your Total Ammount')
    } else {
        const updateWithdrawValue = getWithdrawInput + getWithdrawTotal
        setTotalValue('withdraw-ammount', updateWithdrawValue)

        const updateTotalValue = getTotalAmmount - getWithdrawInput
        setTotalValue('total-ammount', updateTotalValue)
    }


})