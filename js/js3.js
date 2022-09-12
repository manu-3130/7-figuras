//TERCERA FIGURA
//ESCENARIO
const scene = new THREE.Scene();
var loader = new THREE.TextureLoader();

loader.load("../text/imagen3.jpg", function(texture){
    scene.background = texture;
});


//CAMARA
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//RENDER
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//GEOMETRIA
const geometry4 = new THREE.ConeGeometry( 1, 5, 10 );

const textureLoader = new THREE.TextureLoader();
const matcap = textureLoader.load("/text/imagen3.jpg")


const edges = new THREE.EdgesGeometry( geometry4 );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( line );

const material4 = new THREE.MeshMatcapMaterial();
material4.matcap = matcap;
material4.flatShading = true;

const cone = new THREE.Mesh( geometry4, material4 );
scene.add( cone );


camera.position.z = 5;



//FUNCION
function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
    cone.rotation.x += 0.02;
    cone.rotation.y += 0.02;
    line.rotation.x += 0.02
    line.rotation.y += 0.02
}

animate();