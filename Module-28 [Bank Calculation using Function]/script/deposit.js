document.getElementById('deposite-submit').addEventListener('click', function () {
    const getDepositInput = getInputById('deposite-input')
    const getDipositTotal = getTotalValueById('deposit-ammount')
    const getTotalAmmount = getTotalValueById('total-ammount')

    const validationCheck = +getDepositInput
    if (isNaN(validationCheck)) {
        validationRejectAlert()
    } else if (String(getDepositInput).length > 7) {
        alert('You can total deposit only 9999999')
    } else {
        const updateDepositValue = getDepositInput + getDipositTotal
        if (updateDepositValue > 9999999) {
            alert(`you Can't deposit more than $9999999`)
        }
        else {
            setTotalValue('deposit-ammount', updateDepositValue)

            const updateTotalValue = getTotalAmmount + getDepositInput
            setTotalValue('total-ammount', updateTotalValue)
        }
    }
})