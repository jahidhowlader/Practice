document.getElementById('deposite-submit').addEventListener('click', function () {
    const depositInput = document.getElementById('deposite-input')
    const dipositAmmountString = document.getElementById('deposit-ammount')
    const dipositAmmount = dipositAmmountString.innerText

    const totalAmmountString = document.getElementById('total-ammount')
    const totalAmmountInner = totalAmmountString.innerText

    const addDiposit = parseFloat(depositInput.value)
    const previousDeposit = parseFloat(dipositAmmount)
    const totalAmmountConvertToNumber = parseFloat(totalAmmountInner)

    const currentDipositAmmount = addDiposit + previousDeposit
    const totalAmmount = totalAmmountConvertToNumber + addDiposit

    if (typeof addDiposit === 'number') {
        dipositAmmountString.innerText = currentDipositAmmount
        totalAmmountString.innerText = totalAmmount
        depositInput.value = ''
    } else {
        alert('Please write your ammount only; like = 500')
        depositInput.value = ''
    }
})