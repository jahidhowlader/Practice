function getInputById(inputField) {
    const getInputField = document.getElementById(inputField)
    const getInputFieldString = getInputField.value
    const getInput = parseFloat(getInputFieldString)
    getInputField.value = ''

    return getInput
}


function getTotalValueById(elementID) {
    const getTotalValueElement = document.getElementById(elementID)
    const getTotalValueString = getTotalValueElement.innerText
    const getTotalvalues = parseFloat(getTotalValueString)

    return getTotalvalues
}

function setTotalValue(elementID, currentValue){
    const setValue = document.getElementById(elementID)
    setValue.innerText = currentValue
}

function validationRejectAlert(){
    alert('Please enter an ammonut like [500, 1000, 15.36]')
}