document.addEventListener("DOMContentLoaded", function() {
    const loginBtn = document.getElementById("loginBtn");
    const registerBtn = document.getElementById("registerBtn");
    const logoutBtn = document.getElementById("logoutBtn");
    const depositBtn = document.getElementById("depositBtn");
    const withdrawBtn = document.getElementById("withdrawBtn");

    // Check if user is logged in
    const isLoggedIn = false; // Simulated variable, should be set based on actual login status

    // Function to handle login
    loginBtn.addEventListener("click", function() {
        alert("Login functionality is not implemented in this demo.");
    });

    // Function to handle registration
    registerBtn.addEventListener("click", function() {
        alert("Registration functionality is not implemented in this demo.");
    });

    // Function to handle logout
    logoutBtn.addEventListener("click", function() {
        alert("Logout functionality is not implemented in this demo.");
    });

    // Show/hide buttons based on login status
    if (isLoggedIn) {
        loginBtn.style.display = "none";
        registerBtn.style.display = "none";
        logoutBtn.style.display = "inline-block";
        depositBtn.style.display = "inline-block";
        withdrawBtn.style.display = "inline-block";
    } else {
        loginBtn.style.display = "inline-block";
        registerBtn.style.display = "inline-block";
        logoutBtn.style.display = "none";
        depositBtn.style.display = "none";
        withdrawBtn.style.display = "none";
    }

    // Function to handle deposit
    depositBtn.addEventListener("click", function() {
        // Simulate deposit of $10
        const balanceDisplay = document.getElementById("balance");
        const depositAmount = 10;
        // Update account balance display
        balanceDisplay.textContent = (parseFloat(balanceDisplay.textContent) + depositAmount).toFixed(2);
        alert("Deposit successful! Your account has been credited with $10.");
    });

    // Function to handle withdrawal
    withdrawBtn.addEventListener("click", function() {
        alert("Withdrawal functionality is not implemented in this demo.");
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const depositBtn = document.getElementById("depositBtn");
    const withdrawBtn = document.getElementById("withdrawBtn");

    depositBtn.addEventListener("click", function() {
        alert("Deposit functionality is not implemented in this demo.");
    });

    withdrawBtn.addEventListener("click", function() {
        alert("Withdrawal functionality is currently unavailable. Please try again later.");
    });
});

