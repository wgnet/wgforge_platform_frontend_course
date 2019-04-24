const sections = document.querySelectorAll('section');
const turret = document.getElementById('tank_turret');
const tank = document.querySelector(".art-tank-fw");

for (const section of sections) {
    section.addEventListener('mouseenter', e => {
        const turretDirection = e.target.dataset.turretDirection;
        turret.classList.add(`tank_turret__${turretDirection}`);
        console.log(turretDirection);
    });

    section.addEventListener('mouseleave', e => {
        const turretDirection = e.target.dataset.turretDirection;
        turret.classList.remove(`tank_turret__${turretDirection}`);
    });
}

sections[0].addEventListener('click', e => {
    document.body.className = 'toggle';
});


sections[0].addEventListener("scroll", e => {
    let pos = sections[0].scrollTop / 2 - 350;
    tank.style.transform = `translateX(${pos}px) translateY(${pos / 2}px)`; 
    // translateY для видимости текста за танком
})
