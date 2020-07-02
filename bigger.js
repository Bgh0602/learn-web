let height = 10;
let width = 10;
function pressButton() {
    let bigger = document.getElementById('snowball');
    bigger.style.height = height + 10 + 'px';
    bigger.style.width = width + 10 + 'px';
    height += 10;
    width += 10;
}