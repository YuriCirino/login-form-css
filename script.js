let emailField = document.getElementById('email')
let passwordField = document.getElementById('password')

let iconMailFocus = document.getElementById('icon-mail-focus')
let iconMail = document.getElementById('icon-mail')

let iconLockFocus = document.getElementById('icon-lock-focus')
let iconLock = document.getElementById('icon-lock')
let iconEye = document.getElementById('icon-eye')

iconEye.addEventListener('click',()=>{
    if (passwordField.getAttribute('type') === 'text'){
        passwordField.setAttribute('type','password')
    }else{
        passwordField.setAttribute('type','text')
    }
    
})
function toggleMailIcon(event){
    iconMailFocus.classList.toggle('show')    
    iconMail.classList.toggle('hide')    
}

function toggleLockIcon(event){
    iconLockFocus.classList.toggle('show')    
    iconLock.classList.toggle('hide')    
}

emailField.addEventListener('focus',toggleMailIcon)
emailField.addEventListener('blur',toggleMailIcon)
passwordField.addEventListener('focus',toggleLockIcon)
passwordField.addEventListener('blur',toggleLockIcon)