//QUINTA FIGURA
//ESCENARIO
const scene = new THREE.Scene();
var loader = new THREE.TextureLoader();

loader.load("../text/imagen5.jpg", function(texture){
    scene.background = texture;
});

//CAMARA
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//RENDER
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//GEOMETRIA
const geometry = new THREE.CircleGeometry( 3, 32 );

const textureLoader = new THREE.TextureLoader();
const matcap = textureLoader.load("/text/imagen5.jpg")

const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( line );

const material5 = new THREE.MeshMatcapMaterial();
material5.matcap = matcap;
material5.flatShading = true;

const circle = new THREE.Mesh( geometry, material5 );
scene.add( circle );


camera.position.z = 5;



//FUNCION
function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
    circle.rotation.x += 0.02;
    circle.rotation.y += 0.02;
    line.rotation.x += 0.02
    line.rotation.y += 0.02
}

animate();