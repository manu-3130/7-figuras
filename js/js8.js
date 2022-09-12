//OCTAVA FIGURA
//ESCENARIO
const scene = new THREE.Scene();
var loader = new THREE.TextureLoader();

loader.load("../text/gradiente.jpg", function(texture){
    scene.background = texture;
});

//CAMARA
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//RENDER
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//GEOMETRIA
const material8 = new THREE.MeshNormalMaterial()
material8.flatShading = true;

const geometry = new THREE.TorusKnotGeometry( 0.7, 0.2, 50, 32 );
const torusKnot = new THREE.Mesh( geometry, material8 );
scene.add( torusKnot );


camera.position.z = 5;



//FUNCION
function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
    torusKnot.rotation.x += 0.02;
    torusKnot.rotation.y += 0.02;
}

animate();