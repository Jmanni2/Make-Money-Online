// Firebase configuration
const firebaseConfig = {
  // Your Firebase configuration here
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

const mainContainer = document.getElementById('main-container');
const logoutBtn = document.getElementById('logoutBtn');

// Check if user is logged in
auth.onAuthStateChanged(user => {
  if (user) {
    // User is signed in
    renderUserProfile(user);
  } else {
    // No user is signed in
    renderAuthOptions();
  }
});

// Render authentication options (login/register)
function renderAuthOptions() {
  mainContainer.innerHTML = `
    <section id="auth-container">
      <form id="login-form">
        <h2>Login</h2>
        <input type="email" id="login-email" placeholder="Email" required>
        <input type="password" id="login-password" placeholder="Password" required>
        <button type="submit">Login</button>
      </form>
      <form id="register-form">
        <h2>Register</h2>
        <input type="email" id="register-email" placeholder="Email" required>
        <input type="password" id="register-password" placeholder="Password" required>
        <button type="submit">Register</button>
      </form>
    </section>
  `;

  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');

  // Login form submit
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;
    auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        loginForm.reset();
      })
      .catch(error => {
        alert(error.message);
      });
  });

  // Register form submit
  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = registerForm['register-email'].value;
    const password = registerForm['register-password'].value;
    auth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        registerForm.reset();
      })
      .catch(error => {
        alert(error.message);
      });
  });
}

// Render user profile
function renderUserProfile(user) {
  mainContainer.innerHTML = `
    <section id="profile-container">
      <h2>Welcome, ${user.email}</h2>
      <p>Credited: $10</p>
      <button id="shopNowBtn">Shop Now</button>
      <button id="tradeNowBtn">Trade Now</button>
      <button id="depositBtn">Deposit</button>
    </section>
  `;

  const shopNowBtn = document.getElementById('shopNowBtn');
  const tradeNowBtn = document.getElementById('tradeNowBtn');
  const depositBtn = document.getElementById('depositBtn');

  // Implement click handlers for each button
  shopNowBtn.addEventListener('click', () => {
    // Implement shop now functionality
  });

  tradeNowBtn.addEventListener('click', () => {
    // Implement trade now functionality
  });

  depositBtn.addEventListener('click', () => {
    // Implement deposit functionality
  });

  logoutBtn.style.display = 'block';
}

// Logout button click
logoutBtn.addEventListener('click', () => {
  auth.signOut();
});
