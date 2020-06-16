function onLoad() {
    const canvas = document.querySelector('#game-canvas');
    const ctx = canvas.getContext('2d');
    const whaleImage = new Image();
    const coralImage = new Image();
    ctx.rect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = 'skyblue';
    ctx.fill();
    coralImage.src = 'coral.jpg'
    whaleImage.src = 'whale.png'
    coralImage.onload = function () {
        ctx.drawImage(coralImage, 0, 500, 600, 100);
    }
    whaleImage.onload = function () {
        ctx.drawImage(whaleImage, 300, 300, 80, 80);
    }
    var dx = 0;
    var dy = 0;

    var keycode;
    var x = 300, y = 350;

    runGame();
    setInterval(runGame, 10);

    function runGame() {
        moveAll();
        drawAll();
    }
    function moveAll() {
        x += dx;
        y += dy;
    }
    function drawAll() {
        whaleImage.onload;
    }
    function keydown() {
        keycode = event.keyCode;
        switch (keycode) {
            case 37: dx = -1; break;
            case 38: dx = -1; break;
            case 39: dx = 1; break;
            case 40: dx = 1; break;
        }
    }
    function keyup() {
        keycode = event.keyCode;
        switch (keycode) {
            case 37:
            case 40: dx = 0; break;
            case 38:
            case 40: dx = 0; break;

        }
    }
}