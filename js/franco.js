document.addEventListener('DOMContentLoaded', function() {
    const btnGif = document.getElementById('btnGif');
    const gifContainer = document.getElementById('gifContainer');
    const gifFav = document.getElementById('gifFav');
    if (btnGif && gifContainer && gifFav) {
        btnGif.addEventListener('click', function() {
            if (gifContainer.style.display === 'none' || gifContainer.style.display === '') {
                gifContainer.style.display = 'block';
                gifFav.style.opacity = 1;
            } else {
                gifFav.style.opacity = 0;
                gifContainer.style.display = 'none';
            }
        });
    }
});