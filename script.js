// Three.js sahnesi ve kamera ayarları
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// OrbitControls ekliyoruz
const controls = new THREE.OrbitControls(camera, renderer.domElement);

// Fotoğraf URL'lerini buraya ekleyin
const photos = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHnPmFL2HljXJPGsqa8WhfZdK8GN2_gzaJIC1WgoQjMM6FV7sXe4tQAdCKs_4cgaFkEo&usqp=CAU',
];  

// Kart boyutu
const cardWidth = 25;
const cardHeight = 25;
const radius = 100; // Küre yarıçapı

// Küreyi oluşturma
const cards = [];
const totalCards = 100; // Toplam kart sayısı
for (let i = 0; i < totalCards; i++) {
  const texture = new THREE.TextureLoader().load(photos[i]);
  const geometry = new THREE.PlaneGeometry(cardWidth, cardHeight);
  const material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
  const card = new THREE.Mesh(geometry, material);

  // Küresel koordinatlar (kartları küre üzerine yerleştirme)
  const phi = Math.acos(-1 + (2 * i) / totalCards); // Dikey açı
  const theta = Math.sqrt(totalCards * Math.PI) * phi; // Yatay açı

  card.position.x = radius * Math.cos(theta) * Math.sin(phi);
  card.position.y = radius * Math.sin(theta) * Math.sin(phi);
  card.position.z = radius * Math.cos(phi);

  // Kartları sahneye ekleyin
  scene.add(card);
  cards.push(card);
}

// Kamera ayarları
camera.position.z = 300;

// OrbitControls ayarları
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.screenSpacePanning = false;

// Animasyon fonksiyonu
function animate() {
  requestAnimationFrame(animate);

  controls.update(); // OrbitControls güncellemesi

  // Kartları döndürme (opsiyonel, dinamik hareket ekleyebilirsiniz)
  cards.forEach((card, index) => {
    card.rotation.x += 0.01; // Kartları x ekseninde döndür
    card.rotation.y += 0.01; // Kartları y ekseninde döndür
  });

  renderer.render(scene, camera);
}

animate();
