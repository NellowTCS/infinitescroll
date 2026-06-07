const THEMES = {
    pastel: [
        'hsl(340deg 75% 82%)', 'hsl(355deg 70% 83%)', 'hsl(10deg  72% 83%)',
        'hsl(20deg  75% 83%)', 'hsl(35deg  72% 83%)', 'hsl(50deg  70% 84%)',
        'hsl(65deg  62% 84%)', 'hsl(85deg  55% 82%)', 'hsl(120deg 50% 80%)',
        'hsl(150deg 55% 80%)', 'hsl(175deg 58% 80%)', 'hsl(200deg 65% 82%)',
        'hsl(225deg 65% 82%)', 'hsl(255deg 58% 82%)', 'hsl(285deg 55% 82%)',
        'hsl(310deg 62% 82%)', 'hsl(325deg 68% 82%)',
    ],
    neon: [
        'hsl(330deg 100% 55%)', 'hsl(345deg 100% 55%)', 'hsl(0deg   100% 60%)',
        'hsl(15deg  100% 58%)', 'hsl(30deg  100% 55%)', 'hsl(45deg  100% 55%)',
        'hsl(60deg  100% 50%)', 'hsl(90deg  100% 50%)', 'hsl(150deg 100% 50%)',
        'hsl(170deg 100% 50%)', 'hsl(195deg 100% 50%)', 'hsl(220deg 100% 55%)',
        'hsl(250deg 100% 60%)', 'hsl(280deg 100% 55%)', 'hsl(300deg 100% 55%)',
        'hsl(315deg 100% 55%)', 'hsl(325deg 100% 55%)',
    ],
    ocean: [
        'hsl(195deg 80% 40%)', 'hsl(200deg 75% 48%)', 'hsl(195deg 70% 55%)',
        'hsl(190deg 65% 62%)', 'hsl(185deg 70% 68%)', 'hsl(180deg 75% 62%)',
        'hsl(175deg 80% 55%)', 'hsl(185deg 75% 48%)', 'hsl(192deg 80% 42%)',
        'hsl(200deg 85% 38%)', 'hsl(205deg 80% 44%)', 'hsl(198deg 75% 50%)',
        'hsl(190deg 70% 58%)', 'hsl(182deg 75% 65%)', 'hsl(178deg 80% 70%)',
        'hsl(188deg 75% 55%)', 'hsl(195deg 80% 45%)',
    ],
    sunset: [
        'hsl(350deg 85% 55%)', 'hsl(0deg   82% 55%)', 'hsl(10deg  88% 58%)',
        'hsl(20deg  92% 55%)', 'hsl(30deg  88% 55%)', 'hsl(40deg  82% 55%)',
        'hsl(50deg  75% 55%)', 'hsl(310deg 70% 48%)', 'hsl(295deg 72% 42%)',
        'hsl(280deg 78% 38%)', 'hsl(270deg 72% 42%)', 'hsl(285deg 68% 48%)',
        'hsl(305deg 65% 50%)', 'hsl(325deg 72% 50%)', 'hsl(340deg 78% 52%)',
        'hsl(350deg 82% 53%)', 'hsl(355deg 85% 55%)',
    ],
    forest: [
        'hsl(120deg 38% 32%)', 'hsl(130deg 34% 38%)', 'hsl(145deg 28% 45%)',
        'hsl(80deg  34% 40%)', 'hsl(60deg  40% 48%)', 'hsl(45deg  50% 52%)',
        'hsl(35deg  44% 45%)', 'hsl(25deg  38% 38%)', 'hsl(100deg 34% 32%)',
        'hsl(115deg 40% 28%)', 'hsl(125deg 44% 24%)', 'hsl(135deg 38% 30%)',
        'hsl(150deg 30% 38%)', 'hsl(160deg 26% 45%)', 'hsl(90deg  34% 48%)',
        'hsl(70deg  38% 42%)', 'hsl(50deg  44% 38%)',
    ],
    cosmic: [
        'hsl(280deg 82% 38%)', 'hsl(290deg 76% 44%)', 'hsl(305deg 68% 50%)',
        'hsl(260deg 76% 44%)', 'hsl(240deg 82% 38%)', 'hsl(220deg 72% 44%)',
        'hsl(200deg 65% 52%)', 'hsl(180deg 58% 58%)', 'hsl(168deg 82% 55%)',
        'hsl(155deg 88% 52%)', 'hsl(172deg 75% 48%)', 'hsl(250deg 80% 42%)',
        'hsl(270deg 85% 38%)', 'hsl(315deg 68% 50%)', 'hsl(335deg 62% 55%)',
        'hsl(295deg 76% 40%)', 'hsl(275deg 82% 36%)',
    ],
};

// Default theme (for reset)
const DEFAULTS = {
    speed: 1,
    direction: 135,
    theme: 'pastel',
    mouseReactive: true,
    orbsVisible: true,
    intensity: 100,
};

// Application State
const state = {
    isPlaying: true,
    cycle: 0,
    speed: DEFAULTS.speed,
    direction: DEFAULTS.direction,
    theme: DEFAULTS.theme,
    mouseReactive: DEFAULTS.mouseReactive,
    orbsVisible: DEFAULTS.orbsVisible,
    intensity: DEFAULTS.intensity,
    mouseX: 0.5,
    mouseY: 0.5,
    settingsOpen: false,
    baseInterval: 3000, // ms between gradient color shifts
};

// CSS Custom Property Names
const PROPERTY_NAMES = [
    '--gradient-color-0',
    '--gradient-color-1',
    '--gradient-color-2',
    '--gradient-color-3',
    '--gradient-color-4',
    '--gradient-color-5',
    '--gradient-color-6',
    '--gradient-color-7',
];

// DOM References
const el = {
    body: document.body,
    content: document.getElementById('content'),
    toggleBtn: document.getElementById('toggleBtn'),
    settingsBtn: document.getElementById('settingsBtn'),
    settingsPanel: document.getElementById('settingsPanel'),
    settingsBackdrop: document.getElementById('settingsBackdrop'),
    closeSettingsBtn: document.getElementById('closeSettingsBtn'),
    fullscreenBtn: document.getElementById('fullscreenBtn'),
    speedSlider: document.getElementById('speedSlider'),
    speedValue: document.getElementById('speedValue'),
    directionSlider: document.getElementById('directionSlider'),
    directionValue: document.getElementById('directionValue'),
    intensitySlider: document.getElementById('intensitySlider'),
    intensityValue: document.getElementById('intensityValue'),
    themeButtons: document.getElementById('themeButtons'),
    mouseToggle: document.getElementById('mouseToggle'),
    orbsToggle: document.getElementById('orbsToggle'),
    keyboardHints: document.getElementById('keyboardHints'),
    resetBtn: document.getElementById('resetBtn'),
    orbs: document.querySelectorAll('.orb'),
};


// Houdini Property Registration
function registerProperties() {
    if (!window.CSS || !CSS.registerProperty) return;

    const palette = THEMES[state.theme];
    PROPERTY_NAMES.forEach((name, index) => {
        try {
            CSS.registerProperty({
                name,
                syntax: '<color>',
                inherits: false,
                initialValue: palette[index],
            });
        } catch (_e) {
            // Property already registered. ignore
        }
    });
}


// Gradient Animation
let interval = null;

/**
 * Returns the current palette adjusted by the saturation intensity.
 * Intensity works by scaling the HSL saturation value.
 */
function getAdjustedColors() {
    const palette = THEMES[state.theme];
    const factor = state.intensity / 100;

    return palette.map(color => {
        // Parse hsl(H S% L%) format
        const match = color.match(/hsl\((\d+)deg\s+(\d+)%\s+(\d+)%\)/);
        if (!match) return color;

        const h = parseInt(match[1], 10);
        const s = Math.round(parseInt(match[2], 10) * factor);
        const l = parseInt(match[3], 10);

        return `hsl(${h}deg ${s}% ${l}%)`;
    });
}

function updateGradient() {
    const colors = getAdjustedColors();
    PROPERTY_NAMES.forEach((prop, index) => {
        const color = colors[(state.cycle + index) % colors.length];
        el.body.style.setProperty(prop, color);
    });
    state.cycle++;
}

function getIntervalDuration() {
    return Math.max(250, state.baseInterval / state.speed);
}

function updateTransitionSpeed() {
    const duration = getIntervalDuration();
    el.body.style.setProperty('--transition-speed', `${duration}ms`);
}

function startAnimation() {
    stopAnimation(); // Clear any existing interval
    updateGradient();
    updateTransitionSpeed();
    interval = setInterval(() => {
        updateGradient();
    }, getIntervalDuration());
}

function stopAnimation() {
    if (interval) {
        clearInterval(interval);
        interval = null;
    }
}


// Gradient Direction
function updateDirection() {
    let angle = state.direction;

    // Mouse reactive: shift angle based on horizontal mouse position
    if (state.mouseReactive) {
        const mouseOffset = (state.mouseX - 0.5) * 40; // ±20°
        angle = state.direction + mouseOffset;
    }

    el.body.style.setProperty('--gradient-angle', `${angle}deg`);
}


// Mouse Tracking
function handleMouseMove(e) {
    state.mouseX = e.clientX / window.innerWidth;
    state.mouseY = e.clientY / window.innerHeight;

    if (state.mouseReactive) {
        updateDirection();
    }
}


// Play / Pause
function togglePlay() {
    state.isPlaying = !state.isPlaying;

    if (state.isPlaying) {
        startAnimation();
        el.toggleBtn.innerHTML = '<i class="fas fa-pause"></i>';
        el.toggleBtn.classList.remove('paused');
        el.toggleBtn.setAttribute('aria-label', 'Pause animation');
    } else {
        stopAnimation();
        el.toggleBtn.innerHTML = '<i class="fas fa-play"></i>';
        el.toggleBtn.classList.add('paused');
        el.toggleBtn.setAttribute('aria-label', 'Play animation');
    }
}


// Settings Panel
function openSettings() {
    state.settingsOpen = true;
    el.settingsPanel.classList.add('open');
    el.settingsPanel.setAttribute('aria-hidden', 'false');
    el.settingsBackdrop.classList.add('visible');
    el.settingsBtn.classList.add('active');
}

function closeSettings() {
    state.settingsOpen = false;
    el.settingsPanel.classList.remove('open');
    el.settingsPanel.setAttribute('aria-hidden', 'true');
    el.settingsBackdrop.classList.remove('visible');
    el.settingsBtn.classList.remove('active');
}

function toggleSettings() {
    if (state.settingsOpen) {
        closeSettings();
    } else {
        openSettings();
    }
}


// Speed Control
function setSpeed(value) {
    state.speed = parseFloat(value);
    el.speedValue.textContent = `${state.speed.toFixed(state.speed % 1 === 0 ? 1 : 2)}x`;

    if (state.isPlaying) {
        startAnimation(); // Restart with new interval
    }
}


// Direction Control
function setDirection(value) {
    state.direction = parseInt(value, 10);
    el.directionValue.textContent = `${state.direction}\u00B0`;
    updateDirection();
}


// Saturation Intensity Control
function setIntensity(value) {
    state.intensity = parseInt(value, 10);
    el.intensityValue.textContent = `${state.intensity}%`;

    // Immediately update gradient with new saturation
    updateGradient();

    if (state.isPlaying) {
        startAnimation(); // Restart interval
    }
}


// Theme Switching
function setTheme(themeName) {
    if (!THEMES[themeName]) return;

    state.theme = themeName;

    // Update active button
    el.themeButtons.querySelectorAll('.theme-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.theme === themeName);
    });

    // Briefly disable transition for instant theme change
    el.body.classList.add('no-transition');
    updateGradient();
    // Force reflow
    void el.body.offsetHeight;
    el.body.classList.remove('no-transition');

    if (state.isPlaying) {
        startAnimation();
    }
}


// Mouse Reactive Toggle
function setMouseReactive(enabled) {
    state.mouseReactive = enabled;
    if (!enabled) {
        // Reset to base direction
        el.body.style.setProperty('--gradient-angle', `${state.direction}deg`);
    } else {
        updateDirection();
    }
}


// Orbs Toggle
function setOrbsVisible(visible) {
    state.orbsVisible = visible;
    el.orbs.forEach(orb => {
        orb.classList.toggle('hidden', !visible);
    });
}


// Fullscreen
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {
            // Fullscreen not supported or denied
        });
    } else {
        document.exitFullscreen();
    }
}

function updateFullscreenIcon() {
    if (document.fullscreenElement) {
        el.fullscreenBtn.innerHTML = '<i class="fas fa-compress"></i>';
        el.fullscreenBtn.setAttribute('aria-label', 'Exit fullscreen');
    } else {
        el.fullscreenBtn.innerHTML = '<i class="fas fa-expand"></i>';
        el.fullscreenBtn.setAttribute('aria-label', 'Toggle fullscreen');
    }
}


// Reset Defaults
function resetDefaults() {
    state.speed = DEFAULTS.speed;
    state.direction = DEFAULTS.direction;
    state.theme = DEFAULTS.theme;
    state.mouseReactive = DEFAULTS.mouseReactive;
    state.orbsVisible = DEFAULTS.orbsVisible;
    state.intensity = DEFAULTS.intensity;

    // Update UI controls
    el.speedSlider.value = DEFAULTS.speed;
    el.speedValue.textContent = `${DEFAULTS.speed.toFixed(1)}x`;
    el.directionSlider.value = DEFAULTS.direction;
    el.directionValue.textContent = `${DEFAULTS.direction}\u00B0`;
    el.intensitySlider.value = DEFAULTS.intensity;
    el.intensityValue.textContent = `${DEFAULTS.intensity}%`;
    el.mouseToggle.checked = DEFAULTS.mouseReactive;
    el.orbsToggle.checked = DEFAULTS.orbsVisible;

    // Apply changes
    setTheme(DEFAULTS.theme);
    setOrbsVisible(DEFAULTS.orbsVisible);
    updateDirection();

    if (state.isPlaying) {
        startAnimation();
    }
}


// Keyboard Shortcuts
function handleKeydown(e) {
    // Don't capture keys when typing in inputs
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    switch (e.key) {
        case ' ':
            e.preventDefault();
            togglePlay();
            break;

        case 'f':
        case 'F':
            toggleFullscreen();
            break;

        case 's':
        case 'S':
            toggleSettings();
            break;

        case '+':
        case '=':
            if (state.speed < 4) {
                const newSpeed = Math.min(4, state.speed + 0.25);
                el.speedSlider.value = newSpeed;
                setSpeed(newSpeed);
            }
            break;

        case '-':
        case '_':
            if (state.speed > 0.25) {
                const newSpeed = Math.max(0.25, state.speed - 0.25);
                el.speedSlider.value = newSpeed;
                setSpeed(newSpeed);
            }
            break;

        case 'Escape':
            if (state.settingsOpen) {
                closeSettings();
            }
            break;
    }
}


// Infinite Scroll
let currentHeight = 800;

function extendContent() {
    currentHeight += 400;
    el.content.style.height = currentHeight + 'vh';
}

function handleScroll() {
    const scrollBottom = window.scrollY + window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;
    if (scrollBottom > docHeight - 3000) {
        extendContent();
    }
}


// Reduced Motion Detection
function checkReducedMotion() {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) {
        state.isPlaying = false;
        stopAnimation();
        el.toggleBtn.innerHTML = '<i class="fas fa-play"></i>';
        el.toggleBtn.classList.add('paused');
    }

    mq.addEventListener('change', (e) => {
        if (e.matches) {
            state.isPlaying = false;
            stopAnimation();
            el.toggleBtn.innerHTML = '<i class="fas fa-play"></i>';
            el.toggleBtn.classList.add('paused');
        } else {
            // Re-enable when user turns off reduced motion
            state.isPlaying = true;
            startAnimation();
            el.toggleBtn.innerHTML = '<i class="fas fa-pause"></i>';
            el.toggleBtn.classList.remove('paused');
        }
    });
}


// Initialize
function init() {
    // Register Houdini custom properties
    registerProperties();

    // Start gradient animation
    startAnimation();

    // Apply initial direction
    updateDirection();

    // Event Listeners

    // Play / Pause
    el.toggleBtn.addEventListener('click', togglePlay);

    // Settings
    el.settingsBtn.addEventListener('click', toggleSettings);
    el.closeSettingsBtn.addEventListener('click', closeSettings);
    el.settingsBackdrop.addEventListener('click', closeSettings);

    // Fullscreen
    el.fullscreenBtn.addEventListener('click', toggleFullscreen);
    document.addEventListener('fullscreenchange', updateFullscreenIcon);

    // Speed slider
    el.speedSlider.addEventListener('input', (e) => setSpeed(e.target.value));

    // Direction slider
    el.directionSlider.addEventListener('input', (e) => setDirection(e.target.value));

    // Intensity slider
    el.intensitySlider.addEventListener('input', (e) => setIntensity(e.target.value));

    // Theme buttons
    el.themeButtons.addEventListener('click', (e) => {
        const btn = e.target.closest('.theme-btn');
        if (btn && btn.dataset.theme) {
            setTheme(btn.dataset.theme);
        }
    });

    // Mouse reactive toggle
    el.mouseToggle.addEventListener('change', (e) => setMouseReactive(e.target.checked));

    // Orbs toggle
    el.orbsToggle.addEventListener('change', (e) => setOrbsVisible(e.target.checked));

    // Reset
    el.resetBtn.addEventListener('click', resetDefaults);

    // Mouse tracking
    document.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Touch tracking for mobile
    document.addEventListener('touchmove', (e) => {
        if (e.touches.length > 0) {
            state.mouseX = e.touches[0].clientX / window.innerWidth;
            state.mouseY = e.touches[0].clientY / window.innerHeight;
            if (state.mouseReactive) {
                updateDirection();
            }
        }
    }, { passive: true });

    // Keyboard shortcuts
    document.addEventListener('keydown', handleKeydown);

    // Infinite scroll
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Reduced motion
    checkReducedMotion();
}

// Start the app
init();
