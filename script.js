// Toggle between Login and Register forms
function toggleForms() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const toggleText = document.getElementById('toggleText');
  
    if (loginForm.classList.contains('hidden')) {
      loginForm.classList.remove('hidden');
      registerForm.classList.add('hidden');
      toggleText.textContent = 'Register';
    } else {
      loginForm.classList.add('hidden');
      registerForm.classList.remove('hidden');
      toggleText.textContent = 'Login';
    }
  }
  
  // Validate email format
  function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }
  
  // Show error messages
  function showError(message, formId) {
    const errorContainer = document.getElementById(`${formId}Error`);
    errorContainer.textContent = message;
    errorContainer.style.display = 'block';
  }
  
  // Handle form submission
  function submitForm(type) {
    const emailField = type === 'login' ? 'loginEmail' : 'registerEmail';
    const passwordField = type === 'login' ? 'loginPassword' : 'registerPassword';
    const errorField = type === 'login' ? 'loginForm' : 'registerForm';
  
    const email = document.getElementById(emailField).value.trim();
    const password = document.getElementById(passwordField).value.trim();
  
    // Reset any previous error messages
    showError('', errorField);
  
    // Validate email and password
    if (!email || !password) {
      showError('Please fill in all fields!', errorField);
      return;
    }
  
    if (!isValidEmail(email)) {
      showError('Invalid email format! Please use a valid email address.', errorField);
      return;
    }
  
    // Redirect to the logout page if validation passes
    window.location.href = 'logout.html';
  }