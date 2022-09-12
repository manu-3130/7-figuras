//SEPTIMA FIGURA
//ESCENARIO
const scene = new THREE.Scene();

const cubetextureloader = new THREE.CubeTextureLoader();

/* var loader = new THREE.TextureLoader();

loader.load("../text/gradiente.jpg", function(texture){
    scene.background = texture;
}); */

//CAMARA
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//RENDER
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//GEOMETRIA
const material7 = new THREE.MeshStandardMaterial()
material7.color.set("#3ED2F0")
material7.metalness = 1;
material7.roughness = 0;

const luz = new THREE.DirectionalLight(0xffffff, 1000);
luz.position.set(1, 3, 1);
scene.add(luz)

/* const ambientalight = new THREE.AmbientLight(0xffffff, 3);
scene.add(ambientalight)

const pointlight = new THREE.PointLight(0xffffff, 2)
scene.add(pointlight)
pointlight.position.set(5, 5, 5) */



const geometry = new THREE.TorusKnotGeometry( 10, 1, 64, 8, 15, 17 );

/* const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( line ); */

const torusKnot = new THREE.Mesh( geometry, material7 );
scene.add( torusKnot );


camera.position.z = 50;



//FUNCION
function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
    torusKnot.rotation.x += 0.02;
    torusKnot.rotation.y += 0.02;
}

animate();