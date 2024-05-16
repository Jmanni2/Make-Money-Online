// Firebase configuration
var firebaseConfig = {
  // Your Firebase configuration here
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
      // Deposit $8 to the user's account
      depositInitialAmount(userCredential.user.uid, 8);
      // Redirect to the user's dashboard after registration
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
    });
}

// Function to deposit initial amount to the user's account
function depositInitialAmount(userId, amount) {
  // Here you would implement logic to deposit the initial amount to the user's account
  console.log("Depositing initial amount to user with ID: " + userId);
  // For demonstration purposes, let's just log the initial deposit amount
  console.log("Initial deposit amount: $" + amount);
}

// Function to deposit money
function deposit() {
  var amount = prompt("Enter the amount to deposit:");
  if (amount !== null && amount !== "") {
    amount = parseFloat(amount);
    if (!isNaN(amount) && amount > 0) {
      // Here you would implement logic to deposit the money
      // For now, let's just log the amount to the console
      console.log("Deposited: $" + amount);
      // Update the total earnings display (just for visual feedback)
      document.getElementById("totalEarnings").textContent = "$" + (parseFloat(document.getElementById("totalEarnings").textContent.slice(1)) + amount).toFixed(2);
    } else {
      alert("Please enter a valid amount.");
    }
  }
}

// Function to withdraw earnings
function withdrawEarnings() {
  var isAdmin = true; // You can replace this with your own condition to determine if the user is the administrator
  if (isAdmin) {
    // Perform withdrawal logic
    alert("Withdrawal successful!");
    // Here you would implement logic to actually withdraw the earnings
  } else {
    alert("You are not authorized to perform this action.");
  }
}

// Function to invite friends
function inviteFriends() {
  // Implement invite friends functionality here
}

// Function to upgrade plan
function upgradePlan() {
  // Implement upgrade plan functionality here
}

// Function to log out the user
function logout() {
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
    alert("Logged out successfully!");
    // Redirect to the login page after logout
    window.location.href = "login.html";
  }).catch(function(error) {
    // An error happened.
    alert("Error logging out: " + error.message);
  });
}
