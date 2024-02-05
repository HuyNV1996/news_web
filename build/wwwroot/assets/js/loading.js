document.addEventListener("load", function () {
    document.getElementById('loading-modal').style.display = 'block';

    setTimeout(function () {
        document.getElementById('loading-modal').style.display = 'none';
    }, 500);
});