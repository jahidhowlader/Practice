document.getElementById('withdraw-submit').addEventListener('click', function() {
    const withdrawString = document.getElementById('withdraw-ammount')
    const withdrawInputString = document.getElementById('withdraw-input')
    const totalAmmountString = document.getElementById('total-ammount')

    const withdrawInner = withdrawString.innerText
    const withdawInputValue = withdrawInputString.value
    const totalAmmountInner = totalAmmountString.innerText

    const withdraw = parseFloat(withdrawInner)
    const withdrawInput = parseFloat(withdawInputValue)
    const totalAmmount = parseFloat(totalAmmountInner)

    if(typeof withdrawInput === 'number') {
        withdrawString.innerText = withdrawInput + withdraw
        withdrawInputString.value = ''
        totalAmmountString.innerText = totalAmmount - withdrawInput
    }



})