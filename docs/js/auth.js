window.onload = function() {
  const correctUsername = "{{ extra.username }}";  // From mkdocs.yml
  const correctPassword = "{{ extra.password }}";  // From mkdocs.yml
  
  var username = prompt("Enter username:");
  var password = prompt("Enter password:");

  if (username !== correctUsername || password !== correctPassword) {
    document.body.innerHTML = "Access Denied. Incorrect username or password.";
    return;
  }
};

