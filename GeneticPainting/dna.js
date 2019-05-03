class DNA {
    constructor() {
        this.dna_master = [];
        this.dna_buffer = [];

        for (let i = 0; i < num_creatures; i++) {
            this.dna_master[i] = new Creature();
        }
        for (let i = 0; i < num_creatures; i++) {
            this.dna_buffer[i] = new Creature();
        }
    }

    clone(src, target) {
        for (let i = 0; i < num_creatures; i++) {
            target[i].x = src[i].x;
            target[i].y = src[i].y;
            target[i].dx = src[i].dx;
            target[i].dy = src[i].dy;
            target[i].red = src[i].red;
            target[i].green = src[i].green;
            target[i].blue = src[i].blue;
            target[i].alpha = src[i].alpha;
        }
        return (true);
    }


    mutate() {
        for (let i = 0; i < num_creatures; i++) {
            this.dna_master[i].mutate();
        }
    }

    draw() {
        for (let i = 0; i < num_creatures; i++) {
            this.dna_master[i].draw(0);
        }
    }

    evolution() {
        current_fitness = floor(this.calculateFitness(0));

        if (current_fitness < best_fitness) {
            this.clone(this.dna_master, this.dna_buffer);
            best_fitness = current_fitness;
            console.log(Date());
            console.log('current_fitness:', current_fitness);
        }
        else {
            this.clone(this.dna_buffer, this.dna_master);;
        }

        this.mutate();
    }

    calculateFitness(offset_x) {
        let target_pixel, current_pixel;
        let fitness = 0;
        let pixel_fitness = 0;

        loadPixels();
        fitness = 0;
        pixel_fitness = 0;

        for (let x = 0; x < img_width; x += probe_size) {
            for (let y = 0; y < img_height; y++) {
                target_pixel = this.getPixel(x + img_width, y);
                current_pixel = this.getPixel(x + offset_x, y);
                pixel_fitness = dist(red(target_pixel), green(target_pixel), blue(target_pixel), red(current_pixel), green(current_pixel), blue(current_pixel)); // vector distance in 3D color space
                fitness += pixel_fitness;
            }
        }
        return fitness;
    }

    getPixel(x, y) {
        let index;
        let d = pixelDensity();
        let red, green, blue;
        index = (y * (canvas_width) + x) * d * 4;
        red = pixels[index];
        green = pixels[index + 1];
        blue = pixels[index + 2];
        return (color(red, green, blue));
    }
}