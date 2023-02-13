function returnValueById(element, value) {
    const seleteElement = document.getElementById(element)
    seleteElement.innerText = value
}

document.getElementById('checkout').addEventListener('click', function () {

    returnValueById('subtotal', '1000');
    returnValueById('total', '1000')

    const proceed = document.getElementById('proceed-btn')
    proceed.disabled = false

    document.getElementById('proceed-btn').addEventListener('click', function(){
        window.location.href = 'textarea.html'
    })

})

document.getElementById('cuppon-btn').addEventListener('click', function () {
    const cupponCode = document.getElementById('cuppon-code')
    const subtotal = document.getElementById('subtotal')
    const discount = document.getElementById('discount-ammount')
    const totalValue = document.getElementById('total')
    const total = totalValue.innerText

    if (subtotal.innerText < 1) {
        alert('Please One items and try to cuppon')
        cupponCode.value = ''
    } else if (cupponCode.value === 'disc30' && subtotal.innerText > 1) {
        const discountAmmount = (30 / 100) * +subtotal.innerText

        discount.innerText = '-' + discountAmmount
        let result = total - discountAmmount
        totalValue.innerText = result
        cupponCode.value = ''
        const cupponBtn = document.getElementById('cuppon-btn')
        cupponBtn.disabled = true
        cupponBtn.innerHTML = `<button>You have use cuppon<button/>`
        cupponCode.placeholder = 'You have use cuppon'

    } else {
        alert('Cuppon Code are invalid')
    }
})
