var boldCount = 0
var italicCount = 0
var underlineCount = 0

const textArea = document.getElementById('textarea')

document.getElementById('bold').addEventListener('click', function () {

    boldCount++
    const boldElement = document.getElementById('bold')

    if (boldCount % 2 === 1) {
        textArea.classList.add('font-bold')
        boldElement.classList.add('font-black')

    } else {
        textArea.classList.remove('font-bold')
        boldElement.classList.remove('font-black')

    }
})

document.getElementById('text-italic').addEventListener('click', function () {

    italicCount++
    const italicElement = document.getElementById('text-italic')

    if (italicCount % 2 === 1) {
        textArea.classList.add('italic')
        italicElement.classList.add('font-black')
    } else {
        textArea.classList.remove('italic')
        italicElement.classList.remove('font-black')
    }
})

document.getElementById('text-underline').addEventListener('click', function () {

    underlineCount++
    const underlineElement = document.getElementById('text-underline')

    if (underlineCount % 2 === 1) {
        textArea.classList.add('underline', 'underline-offset-2')
        underlineElement.classList.add('font-black')
    } else {
        textArea.classList.remove('underline', 'underline-offset-2')
        underlineElement.classList.remove('font-black')
    }
})


const leftAlignElement = document.getElementById('left-align')
const centerAlignElement = document.getElementById('center-align')
const rightAlignElement = document.getElementById('right-align')
const justifyAlignElement = document.getElementById('justify-align')

if (leftAlignElement.addEventListener('click', function () {

    textArea.classList.add('text-left')
    textArea.classList.remove('text-center', 'text-right', 'text-justify')

})) { } else if (centerAlignElement.addEventListener('click', function () {

    textArea.classList.add('text-center')
    textArea.classList.remove('text-left', 'text-right', 'text-justify')
    console.log(centerAlignElement.classList);
})) {

} else if (rightAlignElement.addEventListener('click', function () {

    textArea.classList.add('text-right')
    textArea.classList.remove('text-left', 'text-center', 'text-justify')
})) {

} else if (justifyAlignElement.addEventListener('click', function () {

    textArea.classList.add('text-justify')
    textArea.classList.remove('text-left', 'text-right', 'text-center')
})) {

}

var textTransformCount = 0;
document.getElementById('text-transform').addEventListener('click', function () {

    textTransformCount++

    if (textTransformCount % 2 === 1) {
        const upperCase = textArea.value.toUpperCase()
        textArea.value = upperCase
    } else {
        const lowerCase = textArea.value.toLocaleLowerCase()
        textArea.value = lowerCase
    }

})

document.getElementById('font-size').addEventListener('focusout', function(){
    const fontSizeElement = document.getElementById('font-size')
    textArea.style.fontSize = fontSizeElement.value + 'px'
})
