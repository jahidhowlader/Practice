document.getElementById('auth-submit').addEventListener('click', function () {
    const userEmailInput = document.getElementById('user-email')
    const userPasswordInput = document.getElementById('user-password')

    const userEmail = userEmailInput.value
    const userPassword = userPasswordInput.value
    
    const userID  = 'jahidhowlader.info@gmail.com'
    const userPass = '1234'

    if(userEmail === userID && userPassword === userPass){
        window.location.href = 'dashboard.html'
    } else {
        alert('Authentication Invalid')
        userEmailInput.value = ''
        userPasswordInput.value = ''
    }

})
