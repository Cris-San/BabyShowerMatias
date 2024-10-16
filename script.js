
    document.addEventListener("DOMContentLoaded", function() {
        const video = document.querySelector('video');

        // Detecta cuando el video comienza a reproducirse
        video.addEventListener('play', function() {
            // Verifica si el navegador permite el modo pantalla completa
            if (video.requestFullscreen) {
                video.requestFullscreen();
            } else if (video.webkitRequestFullscreen) { /* Safari */
                video.webkitRequestFullscreen();
            } else if (video.msRequestFullscreen) { /* IE/Edge */
                video.msRequestFullscreen();
            }
        });
    });

