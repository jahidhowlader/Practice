function selectAmmountCatagory (elementId){
    // const totalAmmount = document.getElementById(elementId)
    // const totalAmmountString = totalAmmount.innerText
    // const previousAmmount = parseFloat(totalAmmountString).toFixed(2)
    // console.log(previousAmmount);
}

function updateFeatureQuantity(quantityItemId, incrase, updateAmmountId, itemPrice) {

    const quantity = document.getElementById(quantityItemId)
    const quantityString = quantity.value
    const previousQuantity = parseInt(quantityString)

    const updateAmmount = document.getElementById(updateAmmountId)

    const updateQuantityIncrase = previousQuantity + 1
    const updateQuantitydecrase = previousQuantity - 1

    if (incrase) {
        quantity.value = updateQuantityIncrase
        updateAmmount.innerText = itemPrice * updateQuantityIncrase     

    } else {
        quantity.value = updateQuantitydecrase
        updateAmmount.innerText = itemPrice * updateQuantitydecrase
       
    }

    const subTotalAmmount = document.getElementById('subtotal-ammount')
    const taxAmmount = document.getElementById('tax-ammount')
    const totalAmmount = document.getElementById('total-ammount')

    const phoneAmmount = document.getElementById('total-phone-ammount')
    const caseAmmount = document.getElementById('total-case-ammount')

    subTotalAmmount.innerText = parseInt(phoneAmmount.innerText) + parseInt(caseAmmount.innerText)
    taxAmmount.innerText = (parseFloat(subTotalAmmount.innerText) * .1).toFixed(2)
    totalAmmount.innerText = (parseFloat(subTotalAmmount.innerText) + parseFloat(taxAmmount.innerText)).toFixed(2)


}

