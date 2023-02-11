// way 1 : Add Event Listener or Handler

function onClick() {
    const container = document.getElementById('container')
    const input = document.getElementById('input')

    const section = document.createElement('section')
    const header = document.createElement('h1')
    header.innerText = input.value
    container.appendChild(section)
    section.appendChild(header)
    input.value = ''

}


// way 2 : Add Event Listener or Handler

document.getElementById('dark-mode').addEventListener('click', function () {
    document.body.style.background = 'black'
})

document.getElementById('light-mode').addEventListener('click', function () {
    document.body.style.background = 'white'
})