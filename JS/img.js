function changeImage(element) {
    document.getElementById('img-principal').src = element.src;
}

function resetImage() {
    document.getElementById('img-principal').src = 'Img/productos/ProductoA2/1.png';
}

var subImages = document.getElementsByClassName('sub-img');
for (var i = 0; i < subImages.length; i++) {
    subImages[i].addEventListener('mouseout', resetImage);
}