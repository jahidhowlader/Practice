document.getElementById('phone-quantity-increment').addEventListener('click', function () {

    updateFeatureQuantity('phone-quantity', true, 'total-phone-ammount', 1219)
})

document.getElementById('phone-quantity-decrement').addEventListener('click', function () {

    updateFeatureQuantity('phone-quantity', false, 'total-phone-ammount', 1219)
})
