var config = {
    apiKey: "AIzaSyBakaFIMGbUxPiCMYRqi6NKkeNgcJBJcZQ",
    authDomain: "my-virtual-fridge-6ff0b.firebaseapp.com",
    databaseURL: "https://my-virtual-fridge-6ff0b.firebaseio.com",
    projectId: "my-virtual-fridge-6ff0b",
    storageBucket: "my-virtual-fridge-6ff0b.appspot.com",
    messagingSenderId: "520914821066"
};
firebase.initializeApp(config);

/* --------------------------------- */

    var login = document.getElementById('login');

var provider = new firebase.auth.GoogleAuthProvider();

function signIn(){
firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
}

/* -------------------------------------------- */

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}

  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }