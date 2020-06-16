var link = {
    setColor: function (color) {
        $('a').css('color', color);
    }
}

var body = {
    setColor: function (color) {
        $('body').css('color', color);
    },
    setBackgroundColor: function (color) {
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
    }
    else {
        body.setColor('black');
        body.setBackgroundColor('white');
        self.value = 'night';

        link.setColor('blue')
    }
}