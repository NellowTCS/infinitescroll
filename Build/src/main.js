const toggleBtn = document.getElementById('toggleBtn');
const body = document.body;
let isPlaying = true;

toggleBtn.addEventListener('click', () => {
    isPlaying = !isPlaying;

    if (isPlaying) {
        body.style.animationPlayState = 'running';
        toggleBtn.innerHTML = '<i class="fas fa-pause"></i>';
        toggleBtn.classList.remove('paused');
    } else {
        body.style.animationPlayState = 'paused';
        toggleBtn.innerHTML = '<i class="fas fa-play"></i>';
        toggleBtn.classList.add('paused');
    }
});

// scroll hue shift
let ticking = false;
function gentleUpdate() {
    const scrollY = window.scrollY;
    const hue = (scrollY * 0.03) % 360;
    body.style.setProperty('--hue-shift', `${hue}deg`);
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(gentleUpdate);
        ticking = true;
    }
}, { passive: true });

// infinite scroll
const content = document.getElementById('content');
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

// velocity control
let lastScroll = 0;
let velocityTimeout;

window.addEventListener('scroll', () => {
    clearTimeout(velocityTimeout);

    velocityTimeout = setTimeout(() => {
        const velocity = Math.abs(window.scrollY - lastScroll);
        if (isPlaying && velocity > 800) {
            body.style.animationDuration = '20s';
        } else if (isPlaying) {
            body.style.animationDuration = '60s';
        }
        lastScroll = window.scrollY;
    }, 80);
}, { passive: true });