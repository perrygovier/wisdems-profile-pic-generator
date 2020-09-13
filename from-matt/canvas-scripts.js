
function drawTemplate (canvas, ctx) { //draws image (fairly useless)
  

  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

} 

function doTransform(width, height) {
    
    var val = document.getElementById('scale').value;
    const ratio = width / height;
    width = val * ratio;
    height = val * ratio;

    return {width, height};


}

function drawFoto (src, canvas, ctx, img) //approx. prof pic @ 
    {
        const image = new Image();
        image.src = src;
        image.onload = function (){
            
            ctx.drawImage(image,90,50,350,350)
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
        }
        return image;
    }
function updateImage(file, img){ //updates file upload image? i think?
 
    img.src = URL.createObjectURL(file);
    
}
onload = function() {
    const canvas = document.getElementById('display');
    const ctx = canvas.getContext('2d');
    const img = document.getElementById('template');  

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const userFoto = drawFoto("anon.jpg", canvas, ctx, img);
    
    const input = document.querySelector("input[type='file']");
    input.addEventListener('change', function() {
        
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        updateImage(this.files[0], userFoto);
      });
    scale = document.getElementById("scale");
    scale.addEventListener('change', doTransform(image.width, image.height), false);

    rotate = document.getElementById("rotate");
    rotate.addEventListener('change', doTransform(image), false);
}