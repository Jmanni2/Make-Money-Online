// script.js

// Firebase configuration
var firebaseConfig = {
  // Your Firebase configuration
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Function to register a new user
function register() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // User registered successfully
      alert("Registration successful!");
      // Credit $10 to the user's account
      // Note: This is a mock function, replace it with your actual logic
      creditAccount(userCredential.user.uid, 10);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
    });
}

// Function to credit $10 to the user's account (mock function)
function creditAccount(userId, amount) {
  // Here you would implement logic to credit the user's account with $10
  console.log("Crediting $10 to user with ID: " + userId);
}

// Function to process payment
function processPayment(amount) {
  // Here you would implement logic to process payment using PayPal or other payment gateway
  console.log("Processing payment for amount: $" + amount);
}



