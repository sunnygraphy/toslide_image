const button = document.querySelector('ul');
const input = document.getElementsByClassName('form-control');

button.addEventListener('click', event => {
  document.getElementById("my-keyword").value = event.target.innerHTML;
});

function movePagePhoto(){
    location.href = "https://prefer2.github.io/toslide_image/photo_ko.html";
  }

  function movePageWrite(){
    location.href = "https://prefer2.github.io/toslide_image/message.html";
  }

  function movePageMessage(){
    location.href = "https://prefer2.github.io/toslide_image/show_message.html";
  }

 