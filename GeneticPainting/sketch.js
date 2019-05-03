const img_width = 300;
const img_height = 300;
const canvas_width = 600;
const canvas_height = 400;
const probe_size = 10; // pixel distance for fitness calculation / 1 = best but slow, greater values will be faster but mor inaccurate
const num_creatures = 150;
const mutation_rate = 0.01; // mutation rate (0.01 = 1%)
const mutation_amount = 1; // mutation steps (pixel, color values)

let target_img;
let dna;
let current_fitness;
let best_fitness = 9999999999;
let generation = 0;


function preload() {
	target_img = loadImage('./img/mona_lisa_300x300.jpg')
}


function setup() {
	createCanvas(canvas_width, canvas_height);
	pixelDensity(1);
	dna = new DNA();
}


function draw() {
	background(0);

	dna.draw();
	image(target_img, canvas_width / 2, 0);
	dna.evolution();

	generation++;
	showPanel();
}


function showPanel() {
	fill(51);
	noStroke();
	rect(0, img_height, canvas_width, canvas_height - img_height)

	textSize(16);

	if (current_fitness == best_fitness) {
		fill(0, 255, 0);
	} else {
		fill(255);
	}

	text('Current fitness:', 20, img_height + 30);
	text(current_fitness, 20, img_height + 60);

	fill(255);
	text('Generation: ' + generation, img_width, img_height + 30);
	text('Best fitness: ' + best_fitness, img_width, img_height + 60);
}