document.addEventListener('DOMContentLoaded', function() {
  var kirimChat = document.getElementById('kirimChat');
  kirimChat.addEventListener('click', function() {
	window.open("https://api.whatsapp.com/send/?phone="+document.getElementById('nomor').value+"&text="+document.getElementById('pesan').value);
  }, false);
}, false);