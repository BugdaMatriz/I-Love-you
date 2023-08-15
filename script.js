function moveButton() {
    const noButton = document.getElementById('noButton');
    const randomX = Math.random() * (window.innerWidth - noButton.clientWidth);
    const randomY = Math.random() * (window.innerHeight - noButton.clientHeight);
    noButton.style.position = 'absolute';
    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
}
