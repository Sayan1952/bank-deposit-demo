document.getElementById('btn-login').addEventListener('click',function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    const passwordField = document.getElementById('user-pass');
    const pass = passwordField.value;
    if (email==='hello@bello.com' && pass === '12345'){
        //go to main page
        window.location.href = 'interface.html'
    }
    else{
        document.getElementById('exception').style.display = 'block'
    }
})