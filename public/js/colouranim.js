class Colour {
    constructor() {
        this.min = 0;
        this.max = 35;
        this.r = this.randRange(this.min, this.max);
        this.g = this.randRange(this.min, this.max);
        this.b = this.randRange(this.min, this.max);
    }
    randRange() {
        return Math.floor(Math.random() * (this.max - this.min) + this.min);
    }
    randomColor() {
        this.r = this.randRange(this.min, this.max);
        this.g = this.randRange(this.min, this.max);
        this.b = this.randRange(this.min, this.max);
        return `rgb(${this.r},${this.g},${this.b})`;
    }

    animateColour(selector, background, foreground, secondaryforeground, secondaryBackground, time) {


        $(selector).css("--main-bg", background);
        $(selector).css("--main-fg", foreground);
        $(selector).css("--sec-fg", secondaryforeground);
        $(selector).css("--sec-bg", secondaryBackground);

        $(selector).animate({
            backgroundColor: background,
            color: foreground
        }, time);
    }

    hsl() {
        let r = this.r,
            g = this.g,
            b = this.b;

        // make r,g,b fractions of one
        r /= 255;
        g /= 255;
        b /= 255;
        // find greatest and smallest channel values
        let cmin = Math.min(r, g, b),
            cmax = Math.max(r, g, b),
            delta = cmax - cmin,
            h = 0,
            s = 0,
            l = 0;
        if (delta == 0) {
            h = 0;
        } else if (cmax == r)
        // red is max
        {
            h = ((g - b / delta % 6));
        } else if (cmax == g)
        // green is max
        {
            h = (b - r) / delta + 2;
        } else if (cmax == r)
        // blue is max
        {
            h = (r - g) / delta + 4;
        }
        h = Math.round(h * 60);
        if (h < 0) h += 360;
        // calculate lightness
        l = (cmax + cmin) / 2;
        // calculate saturation
        s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
        s = +(s * 100).toFixed(1);
        l = +(l * 100).toFixed(1);
        this.h = h;
        this.s = s;
        this.l = l;
        return `hsl(${h},${s}%,${l}%)`;
    }
    opposite() {
        const {
            h,
            s,
            l
        } = this;
        // rotate 180 degrees
        const newHue = (h + 180) % 360;
        return `hsl(${newHue},${s}%,${l}%)`;
    }
    oppositeFullBrightness(sat, luminosity) {
        this.hsl();
        const {
            h,
            s,
            l
        } = this;
        const newHue = (h + 180) % 360;
        return `hsl(${newHue},${sat}%,${luminosity}%)`;
    }

}

const c = new Colour()


c.animateColour('body', c.randomColor(), c.oppositeFullBrightness(11, 80), c.oppositeFullBrightness(40, 80), c.opposite(), 500, )