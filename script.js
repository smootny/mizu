  document.addEventListener('DOMContentLoaded', function () {
    if (!localStorage.getItem('cookieAccepted')) {
      document.getElementById('cookie-banner').style.display = 'block';
    }
    document.getElementById('cookie-accept').onclick = function () {
      localStorage.setItem('cookieAccepted', '1');
      document.getElementById('cookie-banner').style.display = 'none';
    }
  });