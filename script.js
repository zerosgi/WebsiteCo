const fallingCode = document.getElementById('falling-code');

function createFallingCode() {
    const code = document.createElement('div');
    code.className = 'code';
    code.textContent = Math.random() > 0.5 ? '0' : '1';
    code.style.left = Math.random() * 100 + 'vw';
    code.style.animationDuration = Math.random() * 3 + 2 + 's'; // 2-5 seconds
    fallingCode.appendChild(code);
    setTimeout(() => {
        code.remove();
    }, 5000); // Remove after 5 seconds
}

setInterval(createFallingCode, 100); // Create new code every 100 ms
