let noiseLevel = 0.003
let flucSpeed = 0.0
let waveCenterLine = 0.2

function setup() {
	createCanvas(windowWidth, windowHeight);
	background("#00628F")
}

function draw() {
	if (waveCenterLine > height*1.5) {
	background("#00628F")
      	strokeWeight(1)
        stroke("#F4F5F5")
		waveCenterLine = 0.002
	}
	drawNoiseProfile()
}

function drawNoiseProfile() {
	stroke("#F4F5F5")
	strokeWeight(1)
	beginShape();
	for (let x = 0; x < width; x++) {
		const n = noise(x * noiseLevel, width * frameCount * flucSpeed);
		const y = waveCenterLine + map(n, 0.1, 1, -height/4, height/4, true)
		const col = lerpColor(color("#F4F5F5"), color(""), n)
		stroke(col)
		vertex(x, y)
	}
	noFill()
	endShape();
	waveCenterLine += random(5)
}