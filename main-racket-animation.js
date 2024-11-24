console.clear();

const canvas = document.getElementById("hero-racket");
const context = canvas.getContext("2d");

canvas.width = 1722;
canvas.height = 2213;

const frameCount = 35;
const currentFrame = index => (
  `https://usapadelplay.com/wp-content/uploads/2022/09/${(index + 1).toString().padStart(4, '0')}.png`
);

const images = [];
const airpods = {
  frame: 0
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = currentFrame(i);
  images.push(img);
}

gsap.to(airpods, {
  frame: frameCount - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
    scrub: 0.5,
    end: '+=1000'
  },
  onUpdate: render
});

images[0].onload = render;

function render() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(images[airpods.frame], 0, 0);
}
