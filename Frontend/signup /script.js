document.addEventListener('DOMContentLoaded', function () {
    var signupButton = document.querySelector('#btn');

    signupButton.addEventListener('click', function () {
      signUpButtonPressed();
    });

    signupButton.addEventListener('click', function () {
        signUpButtonPressed();
    });

    function signUpButtonPressed() {
      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;

      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(auth => {
          console.log(auth);
        })
        .catch(error => {
          console.log(error.message);
        });
    }
  });