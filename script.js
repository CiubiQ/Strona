document.addEventListener("mousemove", function(event) {
    let x = event.clientX / window.innerWidth * 100;
    let y = event.clientY / window.innerHeight * 100;
    document.body.style.background = `radial-gradient(circle at ${x}% ${y}%, #4a90e2, #1e3a8a)`;
});

document.addEventListener("DOMContentLoaded", function() {
    const container = document.createElement('div');
    container.classList.add('particles');
    document.body.appendChild(container);
    document.body.style.animation = "backgroundShift 10s infinite alternate";
    
    for (let i = 0; i < 50; i++) {
        let particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.top = Math.random() * 100 + 'vh';
        particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
        container.appendChild(particle);
    }
});
