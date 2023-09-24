document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Перешкоджаємо відправці форми перезавантажити сторінку

  // Отримуємо значення введені користувачем
  var name = document.getElementsByName("name")[0].value;
  var email = document.getElementsByName("email")[0].value;

  // Перенаправляємо користувача на наступну сторінку з додаванням параметрів URL-адреси
  window.location.href = "Tata.2.html?name=" + encodeURIComponent(name) + "&email=" + encodeURIComponent(email);
});