// every ellipse is a "creature" ;-)
class Creature {
    constructor() {
        this.min_size = 2;
        this.max_size = img_width / 2;
        this.generate();
    }

    generate() {
        for (let i = 0; i < num_creatures; i++) {
            this.x = floor(random(img_width));
            this.y = floor(random(img_height));
            this.dx = floor(random(this.min_size, this.max_size / 2));
            this.dy = floor(random(this.min_size, this.max_size / 2));
            this.red = 128;
            this.green = 128;
            this.blue = 128;
            this.alpha = 50;
        }
        this.adjust();
    }

    draw(offset_x = 0) {
        push();
        translate(offset_x, 0);
        fill(this.red, this.green, this.blue, this.alpha);
        noStroke();
        ellipse(this.x, this.y, 2 * this.dx, 2 * this.dy);
        pop();
    }

    mutate() {
        let param = random([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        let factor = random([-1, 1]);

        switch (param) {
            case 1:
                this.x = floor(this.x + (factor * mutation_amount));
                break;
            case 2:
                this.y = floor(this.y + (factor * mutation_amount));
                break;
            case 3:
                this.dx = floor(this.dx + (factor * mutation_amount));
                break;
            case 4:
                this.dy = floor(this.dy + (factor * mutation_amount));
                break;
            case 5:
                this.red = floor(this.red + (factor * mutation_amount));
                break;
            case 6:
                this.green = floor(this.green + (factor * mutation_amount));
                break;
            case 7:
                this.blue = floor(this.blue + (factor * mutation_amount));
                break;
            case 8:
                this.alpha = floor(this.alpha + (factor * mutation_amount));
                break;
            case 9:
                // 5 % chance for mutation jump
                if (random() < 0.05) {
                    this.x = floor(random(img_width));
                    this.y = floor(random(img_height));
                }
                break;
            case 10:
                // 5 % chance for mutation jump
                if (random() < 0.05) {
                    this.red = floor(random(256));
                    this.green = floor(random(256));
                    this.blue = floor(random(256));
                    this.alpha = floor(random(256));
                }
                break;
            default:
                break
        }
        this.adjust();
    }

    adjust() {
        if (this.x < 0) this.x = 0;
        if (this.x > img_width) this.x = img_width;
        if (this.y < 0) this.y = 0;
        if (this.y > img_width) this.y = img_height;
        if (this.dx < this.min_size) this.dx = this.min_size;
        if (this.dx > this.max_size) this.dx = this.max_size;
        if (this.dy < this.min_size) this.dy = this.min_size;
        if (this.dy > this.max_size) this.dy = this.max_size;
        if (this.red < 0) this.red = 0;
        if (this.red > 255) this.red = 255;
        if (this.green < 0) this.green = 0;
        if (this.green > 255) this.green = 255;
        if (this.blue < 0) this.blue = 0;
        if (this.blue > 255) this.blue = 255;
        if (this.alpha < 0) this.alpha = 0;
        if (this.alpha > 255) this.alpha = 255;
    }
}