var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      document.getElementById('ajax').innerHTML = xhr.responseText;
    } else if (xhr.status === 404) {
      // statusText = file not found
    } else if (xhr.status === 500) {
      // server had a problem
    }
  }
};

xhr.open('GET', 'sidebar.html');

function sendAJAX() {
  xhr.send();
  document.getElementById('load').style.display = "none";
};
