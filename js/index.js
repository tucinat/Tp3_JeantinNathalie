
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





