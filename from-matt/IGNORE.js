const img = document.getElementById('template');
const canvas = document.getElementById('display');
const ctx = canvas.getContext('2d');


function drawTemplate(canvas, ctx) //should draw the template on top of uploaded photo
    {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    }


function addPhoto(src, canvas, ctx) {
    var pic = newImage();
    pic.src = src;
    pic.onload = function(){

    }

}

function updateImage(file, img){
    img.src = URL.createObjectURL(file);
  }
  
  function updateImageSrc(url, img){
    img.src = url;
  }

onload = function() {
    
}