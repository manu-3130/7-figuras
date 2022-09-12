//CUARTA FIGURA
//ESCENARIO
const scene = new THREE.Scene();
var loader = new THREE.TextureLoader();

loader.load("../text/imagen4.jpg", function(texture){
    scene.background = texture;
});

//CAMARA
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//RENDER
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//GEOMETRIA
const geometry = new THREE.BoxGeometry( 1, 1, 1 );

const textureLoader = new THREE.TextureLoader();
const matcap = textureLoader.load("/text/imagen4.jpg")

const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( line );

const material4 = new THREE.MeshMatcapMaterial();
material4.matcap = matcap;
material4.flatShading = true;

const cube = new THREE.Mesh( geometry, material4 );
scene.add( cube );


camera.position.z = 5;



//FUNCION
function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
    cube.rotation.x += 0.02;
    cube.rotation.y += 0.02;
    line.rotation.x += 0.02
    line.rotation.y += 0.02
}

animate();