// Your web app's Firebase configuration

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var userUid = user.uid;
      var usernameDisplay = document.getElementById("usernameDisplay");
      var bannerDisplay = document.getElementById("bannerDisplay");
  
      // Get a reference to the user's data in the database
      var userRef = firebase.database().ref('users/' + userUid);
  
      // Listen for changes in the user's data
      userRef.on('value', function(snapshot) {
        var userData = snapshot.val();
        if (userData && userData.username) {
          // Update the usernameDisplay element with the fetched username
          usernameDisplay.textContent = userData.username;
          bannerDisplay.textContent = userData.username;
        }
      });

    } else {
      // No user is signed in.
      /*window.location.replace("http://127.0.0.1:5500/login.html");*/
      window.location.href = "login.html";

    }
  });

  function logout(){
    firebase.auth().signOut()
  .then(function() {
    // Sign-out successful.
  })
  .catch(function(error) {
    // An error happened
    window.alert("Error:"+error);
  });
  }

  var db = firebase.database();
  var ref = db.ref("/text");
  ref.on("value", function(snapshot) {
    console.log(snapshot.val());
  });


function appt(id,name){
var dbref = firebase.database().ref();
var somevalue = "hi";
dbref.child("text").set(id);
alert(id);
alert(name);
}


