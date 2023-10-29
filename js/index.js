
// PREMIER ÉVÉNEMENT : effet hover qui déclenche la lecture de la video sur la page passion

let video = document.getElementById('video-hover');

    // Fonction pour vérifier la largeur de l'écran
function isSmallScreen() {
  return window.innerWidth <= 768;
}

if (isSmallScreen()) {
  video.play(); // Lancer automatiquement la vidéo sur les petits écrans
} 

else {
  video.addEventListener('mouseover', () => {
    video.play(); // Lire la vidéo au passage de la souris sur les grands écrans
  });

  video.addEventListener('mouseout', () => {
    video.pause(); // Mettre en pause la vidéo lorsque la souris quitte la vidéo sur les grands écrans
  });
}




//2ÈME ÉVÉNEMENT : événement qui permet d'ouvrir la popup avec un clic de souris

 //Pour la ligne popup Phil

 document.addEventListener("DOMContentLoaded", function () {
  const openPopupButton = document.getElementById("openPopupButtonP");
  const popup = document.getElementById("popupPhil");
  const popupClose = document.getElementById("popupClosePhil");

  openPopupButton.addEventListener("click", function () {
      popup.style.display = "block";
  });

  popupClose.addEventListener("click", function () {
      popup.style.display = "none";
  });
});


    //Pour la ligne popup Alex

document.addEventListener("DOMContentLoaded", function () {
  const openPopupButton = document.getElementById("openPopupButton");
  const popup = document.getElementById("popupAlex");
  const popupClose = document.getElementById("popupCloseAlex");

  openPopupButton.addEventListener("click", function () {
      popup.style.display = "block";
  });

  popupClose.addEventListener("click", function () {
      popup.style.display = "none";
  });
});

 //Pour la ligne popup Jordan

 document.addEventListener("DOMContentLoaded", function () {
  const openPopupButton = document.getElementById("openPopupButtonJ");
  const popup = document.getElementById("popupJordan");
  const popupClose = document.getElementById("popupCloseJordan");

  openPopupButton.addEventListener("click", function () {
      popup.style.display = "block";
  });

  popupClose.addEventListener("click", function () {
      popup.style.display = "none";
  });
});





