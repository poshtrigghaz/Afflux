let email = document.getElementById('email'),
password = document.getElementById('password')


function signUpButtonPressed(){
    firebase.auth().createUserWithEmailAndPassword(email.Value, password.value).then(auth => {
        console.log(auth);
    }).catch(error => {
        console.log(error.message);
    })
}