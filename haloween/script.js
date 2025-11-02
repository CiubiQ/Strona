document.addEventListener('DOMContentLoaded', () => {

    const infoLink = document.getElementById('info-link');
    const infoPanel = document.getElementById('info-panel');
    const closeBtn = document.getElementById('close-btn');
    const overlay = document.getElementById('overlay');

    function openPanel() {
        infoPanel.classList.add('visible');
        overlay.classList.add('visible');
    }

    function closePanel() {
        infoPanel.classList.remove('visible');
        overlay.classList.remove('visible');
    }

    infoLink.addEventListener('click', openPanel);
    closeBtn.addEventListener('click', closePanel);
    overlay.addEventListener('click', closePanel);


    const pumpkin = document.getElementById('pumpkin');
    const jumpscareElement = document.getElementById('jumpscare');
    const screamSound = new Audio('https://www.myinstants.com/media/sounds/jumpscare-sound.mp3');

    function triggerJumpscare() {
        screamSound.play();
        jumpscareElement.style.display = 'flex';
        setTimeout(() => {
            jumpscareElement.style.display = 'none';
        }, 2500);
    }

    pumpkin.addEventListener('click', triggerJumpscare);

    const batsContainer = document.getElementById('bats-container');
    const numberOfBats = 15;

    function animateBat(bat) {
        const duration = Math.random() * 8 + 5;
        const size = Math.random() * 50 + 30;
        const startY = Math.random() * window.innerHeight;
        const endY = Math.random() * window.innerHeight;

        bat.style.width = `${size}px`;
        bat.style.height = `${size}px`;
        bat.style.top = `${startY}px`;
        bat.style.transition = `left ${duration}s linear, top ${duration}s linear`;
        
        if (Math.random() > 0.5) {
            bat.style.left = `-${size}px`;
            setTimeout(() => {
                bat.style.left = `${window.innerWidth + size}px`;
                bat.style.top = `${endY}px`;
            }, 100);
        } else {
            bat.style.left = `${window.innerWidth + size}px`;
            bat.style.transform = 'scaleX(-1)';
            setTimeout(() => {
                bat.style.left = `-${size}px`;
                bat.style.top = `${endY}px`;
            }, 100);
        }

        bat.addEventListener('transitionend', () => animateBat(bat), { once: true });
    }

    for (let i = 0; i < numberOfBats; i++) {
        const bat = document.createElement('div');
        bat.classList.add('bat');
        batsContainer.appendChild(bat);
        animateBat(bat);
    }
});