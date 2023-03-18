const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector("#userEmail").value.trim();
  const password = document.querySelector("#userPassword").value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const user_name = document.querySelector("#signupUsername").value.trim();
  const email = document.querySelector("#signupEmail").value.trim();
  const password = document.querySelector("#signupConfirmPassword").value.trim();

  if (user_name && email && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ user_name, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector("#login")
  .addEventListener("submit", loginFormHandler);

document
  .querySelector("#createAccount")
  .addEventListener("submit", signupFormHandler);

document
  .querySelector("#linkCreateAccount")
  .addEventListener("click", (event) => {
    event.preventDefault();
    login.classList.add("hidden");
    createAccount.classList.remove("hidden");
  });

document
  .querySelector("#linkLogin")
  .addEventListener("click", (event) => {
    event.preventDefault();
    login.classList.remove("hidden");
    createAccount.classList.add("hidden");
  });