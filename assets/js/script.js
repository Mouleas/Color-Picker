let currentSlide = 0;
showSlide(currentSlide);

function changeSlide(num){
    setTimeout(() => {
        currentSlide += num;
        currentSlide %= 3;
        if (currentSlide < 0){
            currentSlide = 2;
        }
        showSlide(currentSlide);
    },500);
    
}

function colorChange(){
    let color = document.getElementById("color"+currentSlide);
    console.log(color.value+" "+currentSlide);
    let slides = document.getElementsByClassName("slide");
    slides[currentSlide].style.backgroundColor = color.value;
    document.getElementById("colorCode"+currentSlide).innerHTML = color.value;
}

function showSlide(currentSlide){
    let slides = document.getElementsByClassName("slide");
    let boxes = document.getElementsByClassName("box")
    for (var i=0; i < slides.length; i++){
        slides[i].style.display = "none";
        boxes[i].style.display = "none";
    }
    slides[currentSlide].style.display = "block";
    boxes[currentSlide].style.display = "block";
    colorChange();
    
}
