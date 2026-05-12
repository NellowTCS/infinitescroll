const toggleBtn = document.getElementById('toggleBtn');
const body = document.body;
const content = document.getElementById('content');

let isPlaying = true;

const rainbow = [
    'hsl(340deg 75% 82%)',
    'hsl(355deg 70% 83%)',
    'hsl(10deg  72% 83%)',
    'hsl(20deg  75% 83%)',
    'hsl(35deg  72% 83%)',
    'hsl(50deg  70% 84%)',
    'hsl(65deg  62% 84%)',
    'hsl(85deg  55% 82%)',
    'hsl(120deg 50% 80%)',
    'hsl(150deg 55% 80%)',
    'hsl(175deg 58% 80%)',
    'hsl(200deg 65% 82%)',
    'hsl(225deg 65% 82%)',
    'hsl(255deg 58% 82%)',
    'hsl(285deg 55% 82%)',
    'hsl(310deg 62% 82%)',
    'hsl(325deg 68% 82%)',
];

const propertyNames = [
    '--gradient-color-0',
    '--gradient-color-1',
    '--gradient-color-2',
    '--gradient-color-3',
    '--gradient-color-4',
    '--gradient-color-5',
    '--gradient-color-6',
    '--gradient-color-7',
];

// Register Houdini properties
if (window.CSS && CSS.registerProperty) {
    propertyNames.forEach((name, index) => {
        try {
            CSS.registerProperty({
                name,
                syntax: '<color>',
                inherits: false,
                initialValue: rainbow[index],
            });
        } catch (e) {
            // already registered
        }
    });
}

let cycle = 0;
let interval;

function updateGradient() {
    propertyNames.forEach((prop, index) => {
        const color = rainbow[(cycle + index) % rainbow.length];
        body.style.setProperty(prop, color);
    });
    cycle++;
}

function startAnimation() {
    updateGradient();
    interval = setInterval(updateGradient, 8000);
}

function stopAnimation() {
    clearInterval(interval);
}

startAnimation();

// Pause/play button
toggleBtn.addEventListener('click', () => {
    isPlaying = !isPlaying;
    if (isPlaying) {
        startAnimation();
        toggleBtn.innerHTML = '<i class="fas fa-pause"></i>';
        toggleBtn.classList.remove('paused');
    } else {
        stopAnimation();
        toggleBtn.innerHTML = '<i class="fas fa-play"></i>';
        toggleBtn.classList.add('paused');
    }
});

// Infinite scroll expansion
let currentHeight = 800;

function extendContent() {
    currentHeight += 400;
    content.style.height = currentHeight + 'vh';
}

window.addEventListener('scroll', () => {
    const scrollBottom = window.scrollY + window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;
    if (scrollBottom > docHeight - 3000) {
        extendContent();
    }
}, { passive: true });
