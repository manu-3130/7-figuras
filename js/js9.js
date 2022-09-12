//NOVENA FIGURA
//ESCENARIO
const scene = new THREE.Scene();

const cubetextureloader = new THREE.CubeTextureLoader();

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
const material7 = new THREE.MeshStandardMaterial()
material7.color.set("#46E3A7")
material7.metalness = 1;
material7.roughness = 0;

const luz = new THREE.DirectionalLight(0xffffff, 1000);
luz.position.set(1, 3, 1);
scene.add(luz)


const geometry = new THREE.TorusGeometry( 4, 10, 30, 200, 3 );

const torus = new THREE.Mesh( geometry, material7 );
scene.add( torus );


camera.position.z = 50;



//FUNCION
function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
    torus.rotation.x += 0.02;
    torus.rotation.y += 0.02;
}

animate();