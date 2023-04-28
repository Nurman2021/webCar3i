
  // popup
  var openPopup = document.getElementById('open-popup');
  var closePopup = document.getElementById('close-popup');
  var popup = document.querySelector('.popup');
  // var body = document.getElementsByTagName('body');

  openPopup.addEventListener('click', function () {
    popup.style.display = 'block';
    document.getElementsByTagName('section').style.filter = "blur(5px)";
  });

  closePopup.addEventListener('click', function () {
    popup.style.display = 'none';
  });
  