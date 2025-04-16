document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Clear previous errors
  clearErrors();

  // Get form values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const skill = document.getElementById("skill").value;
  const portfolio = document.getElementById("portfolio").value.trim();

  let isValid = true;

  // Name validation
  if (name === "") {
    showError("nameError", "Please enter your full name");
    isValid = false;
  }

  // Email validation
  if (!validateEmail(email)) {
    showError("emailError", "Please enter a valid email address");
    isValid = false;
  }

  // Skill validation
  if (skill === "") {
    showError("skillError", "Please select a skill category");
    isValid = false;
  }

  // Portfolio URL validation
  if (portfolio !== "" && !validateURL(portfolio)) {
    showError("portfolioError", "Please enter a valid URL");
    isValid = false;
  }

  if (isValid) {
    // Show success message
    document.getElementById("successMessage").classList.remove("hidden");
    document.getElementById("signupForm").reset();
    setTimeout(() => {
      document.getElementById("successMessage").classList.add("hidden");
    }, 5000);
  }
});

function showError(elementId, message) {
  const errorElement = document.getElementById(elementId);
  errorElement.textContent = message;
}

function clearErrors() {
  const errors = document.getElementsByClassName("error");
  for (let error of errors) {
    error.textContent = "";
  }
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validateURL(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}
