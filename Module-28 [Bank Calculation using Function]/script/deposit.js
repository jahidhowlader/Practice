document.getElementById('deposite-submit').addEventListener('click', function () {
    const getDepositInput = getInputById('deposite-input')
    const getDipositTotal = getTotalValueById('deposit-ammount')
    const getTotalAmmount = getTotalValueById('total-ammount')

    const validationCheck = +getDepositInput
    if (isNaN(validationCheck)) {
        validationRejectAlert()
    } else if (String(getDepositInput).length > 8) { 
        alert('You can total deposit only 99999999')
    } else {
        const updateDepositValue = getDepositInput + getDipositTotal
        setTotalValue('deposit-ammount', updateDepositValue)

        const updateTotalValue = getTotalAmmount + getDepositInput
        setTotalValue('total-ammount', updateTotalValue)
    }
})