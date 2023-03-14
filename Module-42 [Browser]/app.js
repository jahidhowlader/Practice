// level 1

// console.log('Helo');

// // console.log(localStorage.getItem('cart '));

// const loadWebsite = () => {
//     // localStorage.setItem('name', 'Sakib Khan')
//     // localStorage.setItem('age', '40')

//     // localStorage.removeItem('age')
//     // localStorage.removeItem('name')

//     // console.log(localStorage.getItem('name'));
//     // console.log(localStorage.getItem('age'));

//     const student = {
//         firstName: 'Jahid',
//         secondName: 'Howlader'
//     }

//     localStorage.setItem('array', '[1,2,3]')
//     localStorage.setItem('object', {})

//     localStorage.setItem('student', JSON.stringify(student))

//     const demo = localStorage.getItem('student')

//     console.log(JSON.parse(demo));

// } 

// level 2

// let count = localStorage.getItem('count') || 0

// const countElement = document.getElementById('count')
// countElement.innerText = count

// document.getElementById('click').addEventListener('click', function(){
//     localStorage.setItem('count', count+= 1)

//     countElement.innerText = count
// })


// level 3 

// const reset = _ => {
//     localStorage.clear()
// }

// const send = (key, value) => {

//     value = document.getElementById(value)
//     localStorage.setItem(key, value.value)
//     value.value = ''
// }

// const del = key => {
//     // key = document.getElementById(key)
//     localStorage.removeItem(key)

// }

// document.getElementById('send-name').addEventListener('click', function(){
//     send('name', 'name-input')
// })

// document.getElementById('del-name').addEventListener('click', function(){
//     del('name')
// })

// document.getElementById('send-email').addEventListener('click', function(){
//     send('email', 'email-input')
// })

// document.getElementById('del-email').addEventListener('click', function(){
//     del('email')
// })

// document.getElementById('send-messege').addEventListener('click', function(){
//     send('messege', 'messege-input')
// })

// document.getElementById('del-messege').addEventListener('click', function(){
//     del('messege')
// })












// level 4

const reset = _ => {
    localStorage.clear()
    document.getElementById('name-input').value = ''
    document.getElementById('email-input').value = ''
    document.getElementById('messege-input').value = ''
}

const nameInput = document.getElementById('name-input')
const nameField = JSON.parse(localStorage.getItem('info')) || ''
nameInput.value = nameField.name || ''

const emailInput = document.getElementById('email-input')
const emailField = JSON.parse(localStorage.getItem('info')) || ''
emailInput.value = emailField.email || ''

const messegeInput = document.getElementById('messege-input')
const messegeField = JSON.parse(localStorage.getItem('info')) || ''
messegeInput.value = messegeField.messege || ''

const send = (key, value, valueName) => {
    const find = localStorage.getItem('info')
    value = document.getElementById(value)

    if (!find) {
        localStorage.setItem(key, JSON.stringify({ [valueName]: value.value }))

    } else {
        const info = JSON.parse(localStorage.getItem(key))
        info[valueName] = value.value

        const replaceName = JSON.stringify(info)
        localStorage.setItem(key, replaceName)
        value.value = ''
    }
}

const del = (valueName) => {
    const find = localStorage.getItem('info')
    if (!find) {
        return ''
    } else {
        const info = JSON.parse(localStorage.getItem('info'))
        delete info[valueName]

        localStorage.setItem('info', JSON.stringify(info))
    }
}


document.getElementById('send-name').addEventListener('click', function () {
    send('info', 'name-input', 'name')
})
document.getElementById('del-name').addEventListener('click', function () {
    del('name')
})

document.getElementById('send-email').addEventListener('click', function () {
    send('info', 'email-input', 'email')
})
document.getElementById('del-email').addEventListener('click', function () {
    del('email')
})

document.getElementById('send-messege').addEventListener('click', function () {
    send('info', 'messege-input', 'messege')
})
document.getElementById('del-messege').addEventListener('click', function () {
    del('messege')
})

const allSend = () => {
    const name = document.getElementById('name-input').value
    const email = document.getElementById('email-input').value
    const messege = document.getElementById('messege-input').value
    const allInfo = {
        name, email, messege
    }

    localStorage.setItem('info', JSON.stringify(allInfo))
    document.getElementById('name-input').value = ''
    document.getElementById('email-input').value = ''
    document.getElementById('messege-input').value = ''
}


