const btn = document.querySelector('input.button');
const scene = document.querySelector('.scene');
const sparks = document.querySelector('.sparks');

for(let i = 0; i < 120; i++){
    sparks.innerHTML += '<i></i>';
}

btn.addEventListener('change', () => {
    scene.classList.toggle('cameraMove');
});