// JJ's Splash Kingdom - Interactive Scripts

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add splash effect on button clicks
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    // Create splash effect
    const splash = document.createElement('div');
    splash.innerHTML = '💦';
    splash.style.cssText = `
      position: fixed;
      left: ${e.clientX}px;
      top: ${e.clientY}px;
      font-size: 2rem;
      pointer-events: none;
      animation: splashAway 1s forwards;
      z-index: 9999;
    `;
    document.body.appendChild(splash);
    
    setTimeout(() => splash.remove(), 1000);
  });
});

// Add splash animation keyframes
const style = document.createElement('style');
style.textContent = `
  @keyframes splashAway {
    0% {
      transform: scale(1) translate(-50%, -50%);
      opacity: 1;
    }
    100% {
      transform: scale(2) translate(-50%, -100%);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// Fun console message
console.log(`
🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊
  Welcome to JJ's Splash Kingdom!
  Hope you're ready to get WET! 💦
🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊
`);

// Make ticket buttons show alert (for demo)
document.querySelectorAll('.btn-ticket').forEach(btn => {
  btn.addEventListener('click', function() {
    alert('🎉 Awesome choice! Your splash adventure awaits! 🌊');
  });
});

// Add water drop cursor trail effect
let lastX = 0;
let lastY = 0;
let dropCount = 0;

document.addEventListener('mousemove', (e) => {
  const distance = Math.sqrt(Math.pow(e.clientX - lastX, 2) + Math.pow(e.clientY - lastY, 2));
  
  if (distance > 50) {
    dropCount++;
    if (dropCount % 3 === 0) { // Only create drop every 3rd trigger
      createDrop(e.clientX, e.clientY);
    }
    lastX = e.clientX;
    lastY = e.clientY;
  }
});

function createDrop(x, y) {
  const drop = document.createElement('div');
  drop.innerHTML = '💧';
  drop.style.cssText = `
    position: fixed;
    left: ${x}px;
    top: ${y}px;
    font-size: 1rem;
    pointer-events: none;
    opacity: 0.6;
    animation: dropFall 1s forwards;
    z-index: 9999;
  `;
  document.body.appendChild(drop);
  
  setTimeout(() => drop.remove(), 1000);
}

// Add drop fall animation
const dropStyle = document.createElement('style');
dropStyle.textContent = `
  @keyframes dropFall {
    0% {
      transform: translateY(0) scale(1);
      opacity: 0.6;
    }
    100% {
      transform: translateY(50px) scale(0.5);
      opacity: 0;
    }
  }
`;
document.head.appendChild(dropStyle);
