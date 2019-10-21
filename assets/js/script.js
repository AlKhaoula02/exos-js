



   
let element = document.getElementById("lorem");

function myFunction() {
    element.classList.toggle("mystyle");
}



function changeImage() {
    let image = document.getElementById('myImage');
    // console.log(image);
    if (myImage.src.match("img1")) {
      image.src = 'assets/img/img2.png';
    } else {
      image.src = 'assets/img/img1.png';
    }
  }
document.addEventListener("keydown", changeImage);



let Moncarre = document.getElementById("carre");
let Maposition = 0;

function move(event) {
    console.log(event.keyCode);
    let moncode = event.keyCode;
  if (moncode == 38) {

    if (Maposition >= 380) {
        Moncarre.style.bottom = "0px";
        Maposition = 0;
    }
    else{
        Maposition += 10;
        console.log(Maposition)
        Moncarre.style.bottom = Maposition +'px';
    }
    
}
}
document.addEventListener("keydown",move);
console.log(Maposition)




