
document.getElementById('case-quantity-increment').addEventListener('click', function () {
    updateFeatureQuantity('case-quantity', true, 'total-case-ammount', 59)

})

document.getElementById('case-quantity-decrement').addEventListener('click', function () {
    updateFeatureQuantity('case-quantity', false, 'total-case-ammount', 59)

})