const link = {
    setColor(color) {
        $('a').css('color', color);
    }
}

const body = {
    setColor(color) {
        $('body').css('color', color);
    },
    setBackgroundColor(color) {
        $('body').css('backgroundColor', color);
    }
}

function dayNightHandler(self) {
    let target = document.querySelector('body');
    if (self.value === 'night') {
        body.setColor('white');
        body.setBackgroundColor('black')
        self.value = 'day';

        link.setColor('skyblue');
    } else {
        body.setColor('black');
        body.setBackgroundColor('white');
        self.value = 'night';

        link.setColor('blue')
    }
}
