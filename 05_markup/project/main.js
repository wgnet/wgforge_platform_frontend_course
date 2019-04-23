const sections = document.querySelectorAll('section');
const turret = document.getElementById('tank_turret');

for (const section of sections) {
  section.addEventListener('mouseenter', e => {
    const turretDirection = e.target.dataset.turretDirection;
    turret.classList.add(`tank_turret__${turretDirection}`);
  });

  section.addEventListener('mouseleave', e => {
    const turretDirection = e.target.dataset.turretDirection;
    turret.classList.remove(`tank_turret__${turretDirection}`);
  });
}

sections[0].addEventListener('click', e => {
  document.body.className = 'toggle';
});





const tank = document.getElementsByClassName('art-tank-fw parallax-ultra-fore')[0];
let lastPos = 0;
let lastScrollTop = 0;
sections[0].addEventListener('scroll', (e)=>{
    curentTop
    tank.style.transform = `translateX(${lastPos}px)`;
    lastPos += 2;
})
