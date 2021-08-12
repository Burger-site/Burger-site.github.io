const imgBlock = document.getElementById('slider-img'),
    pblock = document.getElementById('p-block'),
    btn1 = document.querySelector('.btn-1'),
    btn2 = document.querySelector('.btn-2'),
    btn3 = document.querySelector('.btn-3'),
    butslid = document.querySelector('.btn');

btn1.addEventListener('click',() => {
    imgBlock.src = "/img/burger53.png";
    pblock.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisc ing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum sus pendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.";

})

btn2.addEventListener('click',() => {
    imgBlock.src = "/img/2.png"
    pblock.innerHTML = "меняется текст и картинка";
})

btn3.addEventListener('click',() => {
    imgBlock.src = "/img/3.png"
    pblock.innerHTML = "меняется текст и картинка";
})

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})