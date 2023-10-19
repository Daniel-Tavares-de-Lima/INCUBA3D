let slide = document.querySelector(".slide");
let count = 0;

function slider(){
    ++count;

    if(count == 3){
        count = 0;
    }

    slide.style.transform = `translateX(${-count * 300}px)`;
}

setInterval(slider, 3000);