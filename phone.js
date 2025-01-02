const images = [
    "https://i.ibb.co/bRpX9DC/img1.jpg",
    "https://i.ibb.co/X3F6h96/img2.jpg",
    "https://i.ibb.co/pvV0zcG/img3.jpg"
];
let currentIndex = 0;

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("phoneImage").src = images[currentIndex];
}
