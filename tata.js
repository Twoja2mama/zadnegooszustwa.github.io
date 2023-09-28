document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); 

  
  var name = document.getElementsByName("name")[0].value;
  var email = document.getElementsByName("email")[0].value;


  window.location.href = "Tata.2.html?name=" + encodeURIComponent(name) + "&email=" + encodeURIComponent(email);
});
