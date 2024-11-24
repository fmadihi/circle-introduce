let img = document.querySelectorAll(".img");
let contentBx = document.querySelectorAll(".contentBx");
for (let i = 0; i < img.length; i++) {
    
  img[i].addEventListener("mouseover", function () {
    for (let i = 0; i < contentBx.length; i++) {
      contentBx[i].className = 'contentBx';
    }
    document.getElementById(this.dataset.id).className = 'contentBx active';
    for (let i = 0; i < img.length; i++) {
      img[i].className = "img";
    }
    this.className = "img active";
  });
}
