document.getElementById("loginForm").addEventListener("submit", function(event)
{
  event.preventDefault(); 
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  
  if (username === "" || password === "") 
  {
    alert("");
    return;
  }
  window.location.href = "index.html";
});

