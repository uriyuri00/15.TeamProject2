const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const password = document.querySelector('#inputPassword3').value.trim();
    const username = document.querySelector('#inputUsername3').value.trim();

    if (password && username) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({username, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        console.log('response OK')
        // If successful, redirect the browser to the dashboard page
        document.location.replace('/dashboard');

      } else {
        alert(response.statusText);
      }
    }
  };
  
  // const signupFormHandler = async (event) => {
  //   event.preventDefault();
  
  //   const name = document.querySelector('#name-signup').value.trim();
  //   const email = document.querySelector('#email-signup').value.trim();
  //   const password = document.querySelector('#password-signup').value.trim();
  
  //   if (name && email && password) {
  //     const response = await fetch('/api/users', {
  //       method: 'POST',
  //       body: JSON.stringify({ name, email, password }),
  //       headers: { 'Content-Type': 'application/json' },
  //     });
  
  //     if (response.ok) {
  //       document.location.replace('/profile');
  //     } else {
  //       alert(response.statusText);
  //     }
  //   }
  // };
  
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);

// event listener for logout button that was created in the login handlebars
document.getElementById('logoutBtn').addEventListener('click', function(event) {
  event.preventDefault();
});

  
  // document
  //   .querySelector('.signup-form')
  //   .addEventListener('submit', signupFormHandler);
  