const toggleBtn = document.getElementById('toggleBtn');
const body = document.body;
const content = document.getElementById('content');

let isPlaying = true;

const rainbow = [
    'hsl(0deg 100% 55%)',
    'hsl(15deg 100% 55%)',
    'hsl(30deg 100% 55%)',
    'hsl(45deg 100% 55%)',
    'hsl(60deg 100% 55%)',
    'hsl(90deg 100% 50%)',
    'hsl(120deg 100% 45%)',
    'hsl(150deg 100% 45%)',
    'hsl(180deg 100% 50%)',
    'hsl(210deg 100% 55%)',
    'hsl(240deg 100% 60%)',
    'hsl(270deg 100% 60%)',
    'hsl(300deg 100% 60%)',
    'hsl(320deg 100% 60%)',
    'hsl(340deg 100% 60%)',
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

// Smooth infinite color cycling
function updateGradient() {
    propertyNames.forEach((prop, index) => {
        const color =
            rainbow[(cycle + index) % rainbow.length];

        body.style.setProperty(prop, color);
    });

    cycle++;
}

function startAnimation() {
    updateGradient();

    interval = setInterval(() => {
        updateGradient();
    }, 8000);
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

        toggleBtn.innerHTML =
            '<i class="fas fa-pause"></i>';

        toggleBtn.classList.remove('paused');
    } else {
        stopAnimation();

        toggleBtn.innerHTML =
            '<i class="fas fa-play"></i>';

        toggleBtn.classList.add('paused');
    }
});

// Infinite scroll expansion
let currentHeight = 800;

function extendContent() {
    currentHeight += 400;
    content.style.height = currentHeight + 'vh';
}

window.addEventListener(
    'scroll',
    () => {
        const scrollBottom =
            window.scrollY + window.innerHeight;

        const docHeight =
            document.documentElement.scrollHeight;

        if (scrollBottom > docHeight - 3000) {
            extendContent();
        }
    },
    { passive: true }
);
